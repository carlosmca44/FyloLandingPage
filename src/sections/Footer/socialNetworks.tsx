import { FC } from "react"
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"
import "./style.css"

const SocialNetworks: FC = () => {
    return (
        <div className="networks-container">
            <div className="network">
                <FaFacebook className="icons"/>
            </div>
            <div className="network">
                <FaTwitter className="icons"/>
            </div>
            <div className="network">
                <FaInstagram className="icons"/>
            </div>
        </div>
    )
}

export default SocialNetworks
