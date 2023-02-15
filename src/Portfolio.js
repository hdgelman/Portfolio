import checkout from './checkout.png'
import loginPic from './login pic.png'
import pup from './pup.png'

const Portfolio = () => {
    return (
        <div className="portfolio">
            <ul>
                <h3>Checkout Screen</h3>
                <li>
                    <img src={checkout} className='checkout-pic' alt='Checkout Screen'></img>
                </li>
                <h3>Login Screen</h3>
                <li>
                    <img src={loginPic} className='login-pic' alt='Login Screen'></img>
                </li>
                <h3>Choose your fighter</h3>
                <li>
                    <img src={pup} className='pup-pic' alt='Puppy Fighter Card'></img>
                </li>
            </ul>
        </div>
    );
}

export default Portfolio;