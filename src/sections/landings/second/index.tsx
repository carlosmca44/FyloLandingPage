import { FC } from "react"
import Landing from "../../../components/Landing_component"
import "../style.css"

const SLanding: FC = () => {
  return (
    <>
      <img 
        style={{marginBottom: -15}} 
        src={ window.screen.width < 376 
          ? "/images/bg-curve-mobile.svg" 
          : "/images/bg-curve-desktop.svg" } 
          alt="" />
      <Landing backgroundC="hsl(240, 75%, 98%)">
        <>
          <div>
            some3
          </div>
          <div>
            some4
          </div>
        </>
      </Landing>
      </>
  )
}

export default SLanding
