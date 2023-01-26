import { PropTypes } from "prop-types";

const Button = ({text, aoClicar})=>{
  
    return (
        
          <button onClick={aoClicar}>{text}</button>
        
    )
}

Button.propTypes = {
    text: PropTypes.string,
    aoClicar: PropTypes.func,

};
export default Button;