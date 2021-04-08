import { FC } from "react"
import "./style.css"

type LandingProps = {
    backgroundC?: string,
    children?: React.ReactChild,
}

const Landing: FC<LandingProps> = ({
    backgroundC,
    children,
}) => {
  return (
        <div style={{backgroundColor: backgroundC}}>
            <div className="container">
                {children}
            </div>
        </div>
  )
}

export default Landing
