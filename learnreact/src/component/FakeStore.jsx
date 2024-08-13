import { useEffect, useState } from "react";
import axios  from "axios";

export default function FakeStore(){
    const [data,setData] = useState([{
        id:"",
        title:"",
        price:0,
        image:"",
        description:"",
        category:"",
        rating:{
            rate:0,
            count:0
        }
    }])
    function LoadAPI(){
        axios.get("https://fakestoreapi.com/products")
        .then(response => response.data)
        .then(data => setData(data))
    }
    useEffect(() => {
        LoadAPI();
    })

    return(
        <div className="d-flex justify-content-center flex-wrap">
            {
                data.map((product,index) => 
                
                <div key={index} style={{width:"250px", height:"auto"}} className="card m-2 ">
                    <img style={{width:"100%",height:"250px"}} src={product.image}></img>
                    <div className="card-header">
                        <p style={{fontSize:"12px"}}>{product.title}</p>
                    </div>
                    <div className="card-body">
                        <p className="fw-bold">{product.price.toLocaleString('en-in' , {style:"currency", currency:"INR"})}</p>
                        <p>{product.category}</p>
                        <p>
                        <span className="bi bi-star-fill">{product.rating.rate} Ratings ,  {product.rating.count} Reviews</span>
                        </p>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-dark w-100">Add To Cart</button>
                    </div>
                </div>
                )
            }
        </div>
    )
}