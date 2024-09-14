import { createContext, useState } from "react"

const ThemeContext = createContext(null);
const CurrentUserContext = createContext(null)

export default function myApp1(){
    const [theme,setTheme] = useState("light");
    const [ currentUser, setCurrentUser] = useState()

    return(
        
        <ThemeContext.Provider value={theme}>
        <CurrentUserContext.Provider>
            <label>Switch To Dark</label>
            <input type="checkbox" checked={theme ==="dark"} onChange={(e) => {
                setTheme(e.target.checked ? "dark" : "light")
            }}
        </CurrentUserContext.Provider>
            
        </ThemeContext.Provider>
    )
}