import { FC } from "react"
import Form from "../../components/Form_component"
import "./style.css"

const PreFooter: FC = () => {
    return (
        <div className="pre-container">
            <div className="description-text-side">
                <h1>
                    Get early access today
                </h1>

                <p>
                    It only takes a minute to sign up and our free starter tier is extremely generous. 
                    If you have any questions, our support team would be happy to help you.
                </p>
            </div>

            <div className="form-side">
                <Form 
                    placeholder={"email@example.com"} 
                    buttonText={"Get Started For Free"} 
                    marginTop={"10px"}
                    boxShadow={"1px 1px 3px #4f4f4f"} />
            </div>

        </div>
    )
}

export default PreFooter
