import { useState } from 'react';

const Home = () => {

    const [name, setName] = useState("");
    const handleClick = (e) => {
        setName("Love's U!")
    }

    return (
        <div className="home">
            <h1>Live Laugh Love</h1>
            <h2>{name}</h2>
            <button onClick={(e) => handleClick(e)}>CLICK</button>
        </div>
    );
}

export default Home;