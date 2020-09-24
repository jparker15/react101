import React /*,{useState,useEffect}*/ from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./Components/AppRouter";
import {ThemeProvider} from "./hooks/ThemeContext"

function App() {

  // const [theme, setTheme] = useState(true)
  // //console.log(theme)
  // //runs everytime it renders instead of once when it mounts
  // useEffect(() =>{
  //   console.log(theme)
  // }, [theme]) 

  return (
    <BrowserRouter>
    {/* <button
    onClick={()=>{
      setTheme(prevTheme =>{return !prevTheme} )
    }}
    >
      Change Me
    </button> */}
      <ThemeProvider>
        <AppRouter/>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
