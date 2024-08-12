import { useEffect, useState } from "react";


export default function LoadData1() {
    const [product, setProduct] = useState({
        title:"",
        price:0,
        rating: {
            rate:0,
            ratings:0,
            reviews:0

        },
        image:"",
        offers: []


    });
    function GetData() {
        fetch("data.json")
            .then(response =>
                response.json()
            )
            .then(product => {
                setProduct(product);
            })
    }

    useEffect(()=>{
        GetData();
    },[])

    return (
        <div className="row">
            <div className="col-3">
                <img alt="name" src={product.image} />
            </div>
            <div className="col-9" style={{textAlign:"left"}}>
                <h1>{product.title}</h1>
                
                <span className="bi bi-star-fill badge rounded bg-dark" >{product.rating.rate}</span>
                <span>{product.rating.ratings} Ratings</span><span>{product.rating.reviews} Reviews</span>
            <div>
                {
                    product.offers.map((item,index) => 
                        <p style={{textAlign:"left"}} className="text-dark" key={index}><span className="bi bi-tag-fill" style={{color:"blue"}}></span>{item}</p>
                    )
                }
            </div>
            </div>
        </div>
    )
}