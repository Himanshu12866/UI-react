import NavBar from "./navbar";
import Table from "./table";



export default function NavComponent() {
    let employeeData =[
            { "Name": "Himanshu Mishra", "Position": "Developer" , Sallery:"500000"}, 
            { "Name": "Kritika Mishra", "Position": "Founder",Sallery: "100000" },
            { "Name": "Rahul Mishra", "Position": "Developer",Sallery:"150k" , Role:"Team Leader"}
        ]
    return (
        <div>
            <NavBar brand="Shopper." theme="bg-warning p-3 text-light" links={["Home", "About", "Docs", "Help", "Contact"]} />
            <NavBar brand="Shopper." theme="bg-info p-3 m-1" links={["Home", "About", "Docs", "Help", "Contact", "Learn", "Shop"]} />
            <Table headItems={["Name", "Position", "Sallery" , "Role"]} data={employeeData} />
        </div>)
}