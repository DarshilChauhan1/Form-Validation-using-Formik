import * as yup from "yup"
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
// Minimum length of password should be 8 Atleast one  uppercase or lowercase and Special Character and digit 
const numberregex = /^\d{10}$/;

const validateScehma = yup.object().shape({
    username : yup.string().min(8).required("Username is required"),
    email : yup.string().email("Please enter valid email").required("Enter a Valid Email Address"),
    number : yup.string().matches(numberregex).required("Please enter valid number"),
    password : yup.string().min(5).matches(passwordRegex).required("Create a Strong Password"),
    confirmpassword : yup.string().oneOf([yup.ref('password'),null], "Password Must Match").required("Required")
})

export default validateScehma;

