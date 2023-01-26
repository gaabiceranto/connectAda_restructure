import { PropTypes } from "prop-types";


const Input = ({type, aoMudar, placeholder, value,  required}) => {
    return (
        <div className="inputForm">
            <input type={type} placeholder={placeholder} value={value} onChange={aoMudar} required={required ? "required" : ""} />
        </div>
    )
}

Input.propType = {
    label: PropTypes.string,
    aoMudar:PropTypes.func,
   
}





export default Input;