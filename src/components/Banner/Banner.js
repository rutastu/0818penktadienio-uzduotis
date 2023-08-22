import './Banner.css'
import GetStarted from '../GetStarted/GetStarted'
import NeftlixLogo from './Logonetflix.png'

const Banner = () => {
    return (
        <>
        <div className='bannerContainer'>
            <div className='header'>
                <img className='netflixLogo' src={NeftlixLogo} alt="logo" />
                <div>
                    <div className="dropdown">
                    <button className="dropbtn">🌐︎ English   ▾</button>
                    <div className="dropdown-content">
                        <a href="#">English</a>
                        <a href="#">українська</a>
                    </div>
                    </div>
                    <button className='signInButton'>Sign In</button>
                </div>
            </div>
            <div className='overlay'></div>
            <h1 className='firstTitle'> Unlimited movies, TV shows, and more
            </h1>
            <p className='secondTitle'>Watch anywhere. Cancel anytime.</p>
            < GetStarted />
        </div>
        <div className="greyLine"></div>
        </>
    )
}

export default Banner