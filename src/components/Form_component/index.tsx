import { FC } from "react"
import Spacer from "../Spacer_component"
import "./style.css"

type FormProps = {
    placeholder: string,
    buttonText: string,
    marginTop?: string,
    boxShadow?: string
}

const Form: FC<FormProps> = ({
    placeholder,
    buttonText,
    marginTop,
    boxShadow
}) => {
  return (
      <form className="container1">
          <input type="email" placeholder={placeholder} />
          <Spacer />
          <button type="submit" style={{marginTop:marginTop, boxShadow:boxShadow}}>
              {buttonText}
          </button>
          <Spacer />
      </form>
  )
}

export default Form
