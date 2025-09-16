import { Link } from "react-router"
export default function Users() {
    const userData =[
        {id:1, name:"Alice", age:25},
        {id:2, name:"Bob", age:30},
        {id:3, name:"Charlie", age:35},
        {id:4, name:"David", age:28},
        {id:5, name:"Eve", age:22},
        {id:6, name:"Frank", age:33},
        {id:7, name:"Grace", age:27},
        {id:8, name:"Hannah", age:29},
        {id:9, name:"Ian", age:31},
        {id:10, name:"Jack", age:26}
    ]
  return (
    <>
    <h1>User Data list </h1>
   {
    userData.map((user)=>(
        <div >
              <h3>
                <Link to={"/users/"+user.id}>{user.name}</Link>
              </h3>
        </div>
    ) )
   }
    </>
    
  )
}