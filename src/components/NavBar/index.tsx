import { FC } from "react"
import Spacer from "../Spacer"
import "./style.css"

const NavBar: FC = () => {
    return (
        <nav className="navbar">
            <img className="logo" src="/images/logo.svg" alt="logo" />
            <Spacer/>
            <div className="nav-buttons">
                <p>
                    Features
                </p>
                <p>
                    Team
                </p>
                <p>
                    Sign In
                </p>
            </div>
        </nav>
    )
}

export default NavBar
