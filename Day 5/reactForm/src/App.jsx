import { useState, Fragment } from "react";
import "./App.css";
import Login from "./login/login";
import Register from "./register/Register";

export default function app(){
  const [page,setPage]=useState("login");
  return(
    <>
    <div>
      {page ==="login"?(
        <Login switchPage={setPage}/>
      ):(
        <Register switchPage={setPage}/>
      )}
    </div>
    </>
  )
}
