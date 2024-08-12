import { useEffect, useState } from "react";


export default function LoadData1() {
    const [product, setProduct] = useState({
        title: "",
        price: 0,
        image: "",
        offers: [],
        rating: {
            rate: 0,
            ratings: 0,
            reviews: 0
        }
    })
    function FetchData() {
        fetch("data.json")
            .then(response => response.json())
            .then(product => setProduct(product))
    }
    useEffect(() => {
        FetchData();

    }, [])
    return (
        <div className="row">
            <div className="row-3">
                <img src={product.image}></img>
            </div>
            <div className="col-9" style={{ textAlign: "left" }}>
                <h1>{product.title}</h1>
                <p>{
                    product.price.toLocaleString('en-in', { style: "currency", currency: "INR" })
                }</p>
                <p>
                    <span className="bi bi-star-fill">{product.rating.rate} Ratings </span>
                    <span>{product.rating.ratings}</span><span>{product.rating.reviews}</span>
                </p>
                <div>
                    {
                        product.offers.map((item, index) =>
                            <p style={{ textAlign: "left" }} key={index}><span className="bi bi-tag-fill"></span>{item}</p>

                        )
                    }
                </div>
            </div>
        </div>
    )
}