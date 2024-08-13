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
        <div className='d-flex flex-wrap m-1 p-2'>{
            data.map((item,index) => 
        
            <div className='card' key={index}>
                <img alt='name' className='card-img-top' src={item.image}></img>
                <div className='card-header'>
                    <h1>{data.name}</h1>
                </div>
                <div className='card-body'>
                    <p><span className='bi bi-star-fill'></span>{data.rating}</p>
                    <p>{data.sir}</p>
                </div>
            </div>
        
            )
        }
        
           
        </div>
    )
}