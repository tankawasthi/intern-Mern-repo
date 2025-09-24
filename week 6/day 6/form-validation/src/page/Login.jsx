// using formik and yup
import { useFormik } from "formik";
import { signupValidation } from "../validation/signupValidation";

const initialValues = {
    name:'',
    email:'',
    password:'',
    cpassword:'',

}

function Login(){
 const {values, handleBlur, handleChange,handleSubmit,errors} = useFormik({
        initialValues: initialValues,
        validationSchema: signupValidation,
        onSubmit: (values)=>{
            console.log(values)
        }
    })

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <br />
                <input type="text" name="name" value={values.name}
                onBlur={handleBlur} onChange={handleChange}/>
                <br />
                {errors.name && <small>{errors.name}</small>}
                <br />
                <label htmlFor="email">Email</label>
                <br />
                <input type="email" name="email" value={values.email}
                 onBlur={handleBlur} onChange={handleChange} />
                <br />
                 {errors.email && <small>{errors.email}</small>}
                <br />
                <label htmlFor="passwor">Password</label>
                <br />
                <input type="password" name="password" value={values.password}
                 onBlur={handleBlur} onChange={handleChange}/>
                <br />
                 {errors.password && <small>{errors.password}</small>}
                <br />
                <label htmlFor="cpasswor">Confirm Password</label>
                <br />
                <input type="password" name="cpassword" value={values.cpassword}
                 onBlur={handleBlur} onChange={handleChange}/>
                <br />
                 {errors.cpassword && <small>{errors.cpassword}</small>}
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default Login