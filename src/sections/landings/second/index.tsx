import { FC } from "react"
import Landing from "../../../components/Landing_component/index"
import PresentationCard from "../../../components/PresentationCard_component/index"
import "../style.css"

const SLanding: FC = () => {
  return (
    <>
      <img 
        style={{marginBottom: -15, marginTop: "50px"}} 
        src={ window.screen.width < 376 
          ? "/images/bg-curve-mobile.svg" 
          : "/images/bg-curve-desktop.svg" } 
          alt="" />
      <Landing backgroundC="hsl(240, 75%, 98%)">
        <>
          <div className="text-landing-second">
            <h1>              
              Stay productive, wherever you are
            </h1>
            <div className="tls-description">
              <p>
                Never let location be an issue when accessing your files. Fylo has you 
                covered for all of your file storage needs.
              </p>
              <p>
                Securely share files and folders with friends, family and colleagues for 
                live collaboration. No email attachments required!
              </p>
            </div>
            <div className="green-link-container">
              <a className="green-link" href="/">
                See how Fylo works
                <img src="/images/icon-arrow.svg" alt="" />
              </a>
              <div className="green-line"></div>
            </div>
            <PresentationCard />
          </div>
          <div className="image-landing">
            <img width="100%" src="/images/illustration-2.svg" alt="" />
          </div>
        </>
      </Landing>
      </>
  )
}

export default SLanding
