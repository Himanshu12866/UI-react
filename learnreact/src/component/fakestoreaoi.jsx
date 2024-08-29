import axios from "axios"
import { useEffect, useState } from "react"

export default function FakeStoreApi() {
    // const [products, setProducts] = useState([{
    //     id: 0,
    //     title: "",
    //     price: 0,
    //     rating: {
    //         rate: 0,
    //         ratings: 0,
    //         reviews: 0
    //     },
    //     descr: "",
    //     img_src: ""
    // }])
    const [category, categories] = useState([])

    // function LoadProducts() {
    //     axios.get("https://fakestoreapi.com/products")
    //         .then(repsonse => {
    //             setProducts(repsonse.data)
    //         })
    // }
    function LoadCategory() {
        axios.get("https://fakestoreapi.com/products/categories")
            .then(response => {
                categories(response.data)
            })
    }
    useEffect(() => {
        // LoadProducts()
        LoadCategory()
    })
    return (

        <div className="box">
            <nav className="navbar navbar-expand-sm bg-dark">
                <a className="navbar-brand text-danger">
                    Shopper.
                </a>
                <button className="navbar-toggler" data-bs-target="#list" data-bs-toggle="collapse">
                    <span className="bi bi-list"> </span>
                </button>
                <div className="navbar-collapse collapse" id="list">
                    <ol className="navbar-nav">
                      {
                        category.map((list,index) => 
                        <li className="nav-item" key={index}>
                            <a className="nav-link" key={index}>{list}</a>
                        </li>
                        )
                      }
                    </ol>
                </div>
            </nav>
        </div>


         
    )
}