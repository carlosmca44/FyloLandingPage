import { FC } from "react"
import Avatar from "./Avatar"

const PresentationCard: FC = () => {
  return (
        <div className="pc-container">
            <img width="20px" src="/images/icon-quotes.svg" alt="" />
            <p>
              Fylo has improved our team productivity by an order of magnitude. Since 
              making the switch our team has become a well-oiled collaboration machine.
            </p>
            <Avatar />
        </div>
  )
}

export default PresentationCard
