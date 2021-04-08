import { FC } from "react"
import "./style.css"

type LandingProps = {
    backgroundI?: string,
    backgroundC?: string,
    children?: React.ReactChild,
}

const Landing: FC<LandingProps> = ({
    backgroundI,
    backgroundC,
    children,
}) => {
  return (
        <div style={{backgroundImage: `url("${backgroundI}")`, backgroundRepeat: "no-repeat", backgroundColor: backgroundC}} className="container">
            {children}
        </div>
  )
}

export default Landing
