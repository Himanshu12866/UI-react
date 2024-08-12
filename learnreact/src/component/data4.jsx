import { useEffect, useState } from "react";


export default function LoadData1(){
const [product ,setProduct] = useState({});
function GetData(){
    fetch("data.json")
    .then(response => 
    response.json()
    )
    .then(product => {
        setProduct(product);
    })
}
useEffect(() => {
    GetData();
})
return(
    <div className="row">
        <div className="col-3">
            <img alt="name" src={product.image}/>
        </div>
        <div className="col-9">
            <h1>{product.title}</h1>
            
            
               <p className="badge bg-primary"><span className="bi bi-star-fill">{product.rating.rate}</span></p>
            
      
        </div>
    </div>
)
}