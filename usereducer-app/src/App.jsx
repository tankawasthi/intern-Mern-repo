import { useReducer } from "react"

const emptyData={
  firstname:'',
  lastname:'',
  email:'',
  address:''
}
const reducer =(data,action)=>{
  return{
    ...data,
    [action.type]:action.val
  }

}
export default function App() {
const [state, dispatch]= useReducer(reducer, emptyData)
  return(
    <>
    <div>
      <h1>Use reducer hook</h1>
      <input type="text"onChange={(e)=>dispatch({val:e.target.value,type:'firstname'})} placeholder="enter your first name" />
      <br /><br />
      <input type="text" onChange={(e)=>dispatch({val:e.target.value,type:'lastname'})} placeholder="enter your last name" />
      <br /><br />
      <input type="text" onChange={(e)=>dispatch({val:e.target.value,type:'email'})} placeholder="enter your email" />
      <br /><br />
      <input type="text" onChange={(e)=>dispatch({val:e.target.value,type:'city'})} placeholder="enter your city" />
      <br /><br />
      <input type="text" onChange={(e)=>dispatch({val:e.target.value,type:'address'})} placeholder="enter your address" />
      <br /><br />
      <button>Add details </button>
    </div>
    <div>
      <ul>
        <li>First name:{state.firstname}</li>
        <li>Last Name:{state.lastname}</li>
        <li>Email:{state.email}</li>
        <li>City:{state.city}</li>
        <li>Address:{state.address}</li>
      </ul>

    </div>
    </>
  )
}