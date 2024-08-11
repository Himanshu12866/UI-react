import { useEffect, useState } from "react";


export default function LoadData() {
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
    function Fecth() {
        fetch("data.json")
            .then(response => response.json())
            .then(
                product => {
                    setProduct(product)
                }
            )
    }
    useEffect(() => {
        Fecth();
    })
    return (
        <div className="row">
            <div className="col-3">
                <img src={product.image} alt="image" className="img-fluid" />
            </div>
            <div className="col-9">
                <h1>{product.title}</h1>
                <div>
                    <span className="bi bi-star-fill badge rounded bg-secondary">{product.rating.rate}</span>
                    <span>{product.rating.reviews} Reviews</span>
                    <span>{product.rating.ratings}</span>
                </div>
                <div>
                    {
                        product.offers.map(
                            (item, index) =>
                                <p key={index}>{item}</p>

                        )
                    }
                </div>
            </div>

        </div>
    )
}