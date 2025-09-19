import React, {useState} from "react";
import WelcomePage from "./components/WelcomePage";
import UserForm from "./components/UserForm";



const App=()=>{
  const [showWelcome, setShowWelcome]= useState(false);

  console.log(`hello mf`)

  const handleToggle = ()=>{
    setShowWelcome(!showWelcome);
  };
  return(
    <>
      {!showWelcome ? ( 
        <UserForm onSubmit={handleToggle} />
        ) : (
        <WelcomePage onBack={handleToggle} />
      )} 
    </>
  );
};
export default App;