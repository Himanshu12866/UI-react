import { useEffect, useState } from "react";

import axios from "axios";
export default function AxiosData(){
    const [data, setData] = useState( {
        title:"",
        price:0,
        image:"",
        rating: {
            rate:0,
            ratigns:0,
            reviews:0
        },
        offers: []

    })
    function AxiosFecth(){
        axios.get("data.json")
        .then(response => response.data)
        .then(data => setData(data))
        
    }
    useEffect(() => {
        AxiosFecth();
    }, [])
    return (
        <div className="row">
            <div className="col-3">
                <img src={data.image}></img>
            </div>
            <div className="col-9" style={{textAlign:"left",
            marginLeft:"10px"}}>
                <h1>{data.title}</h1>
                <p>{
                data.price.toLocaleString('en-in', {style:"currency" , currency:"INR"})
                }</p>
                <div>
                   <span className="badge bg-primary rounded rounded-1" style={{color:"white"}}> <span style={{color:"white"}} className="bi bi-star-fill">{data.rating.rate}</span></span>
                   <span>{data.rating.ratings} Ratings</span><span>{data.rating.reviews} Reviews</span>
                </div>
                <div>
                    {
                        data.offers.map((offer,index) => 
                        <p key={index}> <span style={{color:"blue"}} className="bi bi-tag-fill"></span>{offer}</p>
                        )
                    }
                </div>
            </div>
        </div>
    )
}