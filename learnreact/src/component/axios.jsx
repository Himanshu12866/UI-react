import { useEffect, useState } from "react";
import axios from "axios"

export default function AxiosData() {
    const [data, setData] = useState({
        title: "",
        price: 0,
        rating: {
            rate: 0,
            ratings: 0,
            reviews: 0
        },
        image: "",
        offers: []
    })
    function FetchAxios() {
        axios.get("data.json")
            .then(response => response.data)
            .then(data => setData(data))
    }
    useEffect(() => {
        FetchAxios();
    }, [])
    return (
        <div className="row">
            <div className="col-9">
                <img src={data.image}></img>
            </div>
            <div className="col-9">
                <h1>{data.title}</h1>
                <p>{
                    data.price.toLocaleString('en-in', { style: "currency", currency: "INR" })
                }</p>
                <div>
                    <i className="badge bg-primary rounded rounded-1"><span style={{ color: "white" }} className="bi bi-star-fill"></span><span style={{ color: "white" }}>{data.rating.rate}</span></i><span>{data.rating.ratings} Ratings</span><span>{data.rating.reviews}</span>
                </div>
                <div>
                    {
                        data.offers.map((item,index) => 
                        <p key={index}><span style={{color:"blue"}} className="bi bi-tag-fill"></span>{item}</p>
                        )
                    }
                </div>
            </div>
        </div>
    )
}