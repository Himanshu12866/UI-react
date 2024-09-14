import { Button } from "bootstrap/dist/js/bootstrap.bundle";
import { createContext, useContext, useState } from "react"

const ThemeContext = createContext(null);
const CurrentUserContext = createContext(null);


function Welcome({ children }) {
    const [setCurrentUser] = useContext(CurrentUserContext);
    return (
        <Panel title="Welcome">
            {currentUser !== null ? <Greeting /> : <Login />}

        </Panel>
    )
}

function Greeting() {
    const { currentUser } = useContext(CurrentUserContext)
    return (
        <p>
            You logged in as {currentUser.name}
        </p>
    )
}

function Login() {
    const [setCurrentUser] = useContext(CurrentUserContext);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const canLogin = firstName.trim() !== "" && lastName.trim() !== "";
    return (
        <>
            Firstname {" : "} <input required type="text" value={firstName} onChange={(e) => {
                setFirstName(e.target.value)
            }}></input>
            Lastname {":"} <input required type="text" value={lastName} onChange={(e) => {
                setLastName(e.target.value)
            }}></input>
            <Button disabled = {!canLogin} onClick = {() => {
                setCurrentUser({
                    name: firstName + " " + lastName
                })
            }}>

            </Button>
        </>
    )
}
function Panel({title,children}){
    const theme = useContext(ThemeContext)
    const className = 'panel ' + theme
    return (
        <section className={className}>
        <h1>
            {title}
        </h1>
        <p>{children}</p>

        </section>
    )
}
function Button({children,disabled,onClick}){
    const theme = useContext(ThemeContext)
    const className = "Buttom " + theme;
    return (
        <button className={className} disabled={disabled} onClick={onClick}>{children}
        
        </button>
    )
}
export default function myApp1() {
    const [theme, setTheme] = useState("light");
    const [currentUser, setCurrentUser] = useState()

    return (

        <ThemeContext.Provider value={theme}>
            <CurrentUserContext.Provider>
                <label>Switch To Dark</label>
                <input type="checkbox" checked={theme === "dark"} onChange={(e) => {
                    setTheme(e.target.checked ? "dark" : "light")
                }}
        </CurrentUserContext.Provider>

        </ThemeContext.Provider>
    )
}