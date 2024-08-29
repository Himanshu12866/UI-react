import axios from "axios"
import { useEffect, useState } from "react"

export default function FakeStoreApi() {
    const [products, setProducts] = useState([{
        id: 0,
        title: "",
        price: 0,
        rating: {
            rate: 0,
            ratings: 0,
            reviews: 0
        },
        descr: "",
        img_src: ""
    }])
    const [category, categories] = useState([])

    function LoadProducts() {
        axios.get("https://fakestoreapi.com/products")
            .then(repsonse => {
                setProducts(repsonse.data)
            })
    }
    function LoadCategory() {
        axios.get("https://fakestoreapi.com/products/categories")
            .then(response => {
                categories(response.data)
            })
    }
    useEffect(() => {
        LoadProducts()
        LoadCategory()
    })
    return (

        <div className="box1">
            <nav className="navbar navbar-expand-sm">
                <a className="navbar-brand text-danger">
                    Shopper.
                </a>
                <button className="navbar-toggler" data-bs-target="#list" data-bs-toggle="collapse">
                    <span className="bi bi-list"> </span>
                </button>
                <div className="navbar-collapse collapse " id="list">
                    <ol className="navbar-nav d-flex justify-content-between align-items-center">
                        {
                            category.map((list, index) =>
                                <li className="nav-item" key={index}>
                                    <a className="nav-link" key={index}>{list.toUpperCase()}</a>
                                </li>
                            )
                        }

                        <div className="list-items">
                            <div className="d-inline">
                                <span className="bi bi-person"></span>
                            </div>
                            <div className="d-inline">
                                <span className="bi bi-heart"></span>
                            </div>
                            <div className="d-inline">
                                <button className="btn btn-dark ms-4 position-relative">
                                    <span className="badge badge-dark rounded rounded-2 fs-4 position-absolute text-light" style={{ bottom: "0px", right: "15px", marginBottom: "30px" }}>0</span>
                                    <span className="bi bi-cart3 text-light"></span>
                                </button>
                            </div>

                        </div>
                    </ol>

                </div>
            </nav>

            <div className="d-flex flex-wrap">
            {
                products.map((product,index) => 

                <div className="card text-center" style={{width:"300px", height:"480px" , margin:"10px"}} key={index}>
                    <img src={product.image} style={{width:"250px",height:"200px"}} className="card-img-top text-center"></img>
                    <div className="card-header" style={{height:"100px"}}>
                        <p style={{textOverflow:"ellipsis",fontSize:"12px"}}>{product.title}</p>
                    </div>
                    <div className="card-body">
                        <p className="fs-4"> <b>{product.price.toLocaleString('en-in', {style:"currency",currency:"INR"})}</b></p>
                        <p><span className="bi bi-star-fill text-primary">{product.rating.rate}</span> Rating <i className="text-danger">{product.rating.count}</i> Reviews</p>
                        
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-dark" style={{width:"100%"}}><span className="bi bi-cart3 text-light mx-2"></span>Add to Cart</button>
                    </div>
                </div>
                )
            }

            </div>
        </div>



    )
}