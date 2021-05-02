import { FC } from "react"
import "../style.css"

const Avatar: FC = () => {
  return (
      <div className="avatar">
          <img src="/images/avatar-testimonial.jpg" alt="" />
          <div className="av-data">
              <p className="av-name">
                Kyle Burton
              </p>
              <p className="av-job">
                Founder & CEO, Huddle
              </p>
          </div>
      </div>
  )
}

export default Avatar
