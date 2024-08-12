import axios from 'axios';
import { useEffect, useState } from 'react';
export default function Fetchjosn(){
    const [data, setData] = useState([
        {
            name:"",
            rating:0,
            time:"",
            image:"",
            sir:"",
            dur:""
        }
    ])
    function FetchAxios() {
        axios.get("cources.json")
            .then(response => response.data)
            .then(data => setData(data))
    }
    useEffect(() => {
        FetchAxios();
    }, [])
    return(
        <div className='d-flex flex-wrap'>
            <div className='card w-25' style={{height:"300px"}}>
                <img className='card-img-top' src={data.image}></img>
                <div className='card-header'>
                    <h3>{data.name}Name</h3>
                </div>
            </div>
        </div>
    )
}