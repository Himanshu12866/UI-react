import { useEffect, useState } from "react"




export default function DataJSON(){
    const [product, setProduct] = new useState({
        title: "",
        price: 0,
        rating: {
            rate: 0,
            ratings: 0,
            reviews: 0
        },
        image:"",
        offers:[]
    })
function LoadData(){
    var http = new XMLHttpRequest();
    http.open("GET", "data.json", true);
    http.send();
    http.onreadystatechange = function(){
        if(http.readyState == 4){
            setProduct(JSON.parse(http.responseText))
        }
    }
}
useEffect(() => {
    LoadData();
})
return(
    <div className="row">
        <div className="col-3">
            <img alt="name" src={product.image}></img>
        </div>
        <div className="col-9">
            <h1>{product.title}</h1>
            <div>
                <span className="bi bi-star-fill text-primary">{product.rating.rate} </span>
                <span>{product.rating.ratings}</span>
                <span>{product.rating.reviews}</span>
            </div>
            <div>
                {
                    product.offers.map((item, index) => 
                        <p className="bi bi-tag-fill text-primary" style={{textAlign:"left"}} key={index}>{item}</p>
                    )
                }
            </div>
        </div>
    </div>
)
  
}