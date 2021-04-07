import { FC } from "react"
import "./style.css"

type LandingProps = {
    background?: string,
    children?: React.ReactChild,
}

const Landing: FC<LandingProps> = ({
    children,
}) => {
  return (
        <div className="container">
            {children}
        </div>
  )
}

export default Landing
