import { FC } from "react"
import Spacer from "../Spacer_component"
import "./style.css"

type FormProps = {
    placeholder: string,
    buttonText: string,
    direction: string
}

const Form: FC<FormProps> = ({
    placeholder,
    buttonText
}) => {
  return (
      <form className="container1">
          <input type="email" placeholder={placeholder} />
          <Spacer />
          <button type="submit">
              {buttonText}
          </button>
          <Spacer />
      </form>
  )
}

export default Form
