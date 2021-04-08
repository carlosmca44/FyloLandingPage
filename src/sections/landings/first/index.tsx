import { FC } from "react"
import Form from "../../../components/Form_component"
import Landing from "../../../components/Landing_component"
import "../style.css"

const FLanding: FC = () => {
  return (
    <Landing>
        <>
          <div className="text-landing">
            <h1>
                All your files in one secure location, accessible anywhere.
            </h1>
            <p>                
                Fylo stores your most important files in one secure location. 
                Access them wherever you need, share and collaborate with friends, 
                family, and co-workers.
            </p>
            <Form placeholder="Enter your email..." buttonText="Get Started" direction="row" />
          </div>

          <div>
              <img width="100%" src="/images/illustration-1.svg" alt="" />
          </div>
        </>
  </Landing>
  )
}

export default FLanding
