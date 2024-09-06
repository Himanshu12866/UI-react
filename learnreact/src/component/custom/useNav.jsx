import NavBar from "./navbar";



export default function NavComponent(){
    return(
<div>
<NavBar brand="Shopper." theme="bg-warning p-3" links={["Home" , "About" , "Docs" , "Help" , "Contact"]}/>
<NavBar brand="Shopper." theme="bg-info p-3 m-1" links={["Home" , "About" , "Docs" , "Help" , "Contact" , "Learn" , "Shop"]}/>


</div>    )
}