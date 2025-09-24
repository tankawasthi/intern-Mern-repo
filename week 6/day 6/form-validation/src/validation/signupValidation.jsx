import * as Yup from 'yup'

export const signupValidation=Yup.object({
    name: Yup.string().min(3).required("enter your name"),
    email: Yup.string().email("Please enter valid email").required("Enter your email"),
    password: Yup.string().min(5).required("Enter password"),
    cpassword: Yup.string().oneOf([Yup.ref("password]")],"password is not matched")

})