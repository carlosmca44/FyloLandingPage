import { FC } from "react"
import Spacer from "../../components/Spacer_component"
import SocialNetworks from "./socialNetworks"
import "./style.css"

const Footer: FC = () => {
    return (
        <footer className="footer-container">
            <img width="200px" src="/images/logo-white.svg" alt="logo" />
            <div className="footer-links">
                <ul>
                    <li>
                        <span>
                            <img width="20px" src="/images/icon-phone.svg" alt="icon-phone" />
                        </span>
                        Phone: +1-543-123-4567
                    </li>
                    <li>
                        <span>
                            <img width="20px" src="/images/icon-email.svg" alt="icon-email" />
                        </span>
                        example@fylo.com
                    </li>
                </ul>
                <Spacer />
                <ul>
                    <li>About Us</li>
                    <li>Jobs</li>
                    <li>Press</li>
                    <li>Blog</li>
                </ul>
                <Spacer />
                <ul>
                    <li>Contact Us</li>
                    <li>Terms</li>
                    <li>Privacy</li>
                </ul>
                <Spacer />
                <SocialNetworks />
                <Spacer />
            </div>
            <p className="attribution">
              Challenge by <a href="www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
              Coded by <a href="https://github.com/carlosmca44">Carlos Manuel Crespo Astorac</a>.
            </p>
        </footer>
    )
}

export default Footer
