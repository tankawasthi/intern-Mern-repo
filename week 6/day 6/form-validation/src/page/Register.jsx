import React from "react";
import { useForm } from "react-hook-form";

export default function Register(){
    const {register , handleSubmit, formState:{errors}}=useForm();

    const onSubmit= (data)=>console.log(data);

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input 
            {...register("firstName",{required:"first name is required"})} 
            placeholder="first Name"
            />
            {errors.firstName && <p>{errors.firstName.message}</p>}
            <input
            {...register("password",{
                required:"password is required",
                minLength:{
                    value:8,
                    message:"Password must be at least 8 characters"
                }
            })
            }
            placeholder="Password"
            />
            {errors.password && <p>{errors.password.message}</p>}
             <button type="submit">Submit</button>
        </form>
    )
}