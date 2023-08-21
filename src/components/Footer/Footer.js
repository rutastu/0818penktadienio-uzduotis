import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
        <div className='contact'>
          <ul>
            <li className="questions"><a href="">Questions? Contact us.</a></li>
          </ul>
        </div>
        <div className ="links">
            <ul>
                <li><a href="https://help.netflix.com/support/412">FAQ</a></li>
                <li><a href="">Media Center</a></li>
                <li><a href="">Ways to Watch</a></li>
                <li><a href="">Cookie preferences</a></li>
                <li><a href="">Speed Test</a></li>
                <li><a href="">Only on Netflix</a></li>
            </ul>
            <ul>
                <li><a href="">Help Center</a></li>
                <li><a href="">Investor Relations</a></li>
                <li><a href="">Terms of Use</a></li>
                <li><a href="">Corporate Information</a></li>
                <li><a href="">Legal Guarantee</a></li>
                <li><a href="">Ad Choices</a></li>
            </ul>
            <ul>
                <li><a href="">Account</a></li>
                <li><a href="">Jobs</a></li>
                <li><a href="">Privacy</a></li>
                <li><a href="">Contact Us</a></li>
                <li><a href="">Legal Notices</a></li>
            </ul>
        </div>
        <div className="dropdown">
            <button className="dropbtn">🌐︎ English   ▾</button>
                <div className="dropdown-content">
                    <a href="#">English</a>
                </div>
        </div>
        <div className='country'>
            <p>Netflix Lithuania</p>
        </div>
      </div>
    )
}

export default Footer