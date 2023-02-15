import './App.css';
import Navbar from './Navbar'
import Home from './Home'
import Portfolio from './Portfolio';
import Music from './Music'

function App() {

  let component
  // eslint-disable-next-line default-case
  switch (window.location.pathname) {
    case '/':
      component = <Home />
      break
    case '/portfolio':
      component = <Portfolio />
      break
    case '/music':
      component = <Music />
      break
  }

  return (
    <>
      <Navbar />
      <div className='App'>
        <div className="content">
          {component}
        </div>
      </div>
    </>
  );
}

export default App;
