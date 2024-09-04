import { useEffect, useState } from "react";
import axios from 'axios';


export default function ShopperApp() {

    // const [products, setProducts] = useState([{
    //     id: 0,
    //     title: "",
    //     price: 0,
    //     image: "",
    //     rating: {
    //         rate: 0,
    //         count: 0
    //     }
    // }])
    const[category , categories] = useState([]);

category.unshift("all")
function LoadCategory(){
   
    axios.get("https://fakestoreapi.com/products/categories")
    .then( category => {
        categories(category.data);
    })
    
}
    
useEffect(() => {
    
    LoadCategory();
})
    return (
        <div>
            <nav className="navbar navbar-expand-sm">
                <a className="navbar-brand fw-bold fs-3">Shopper.</a>
                <button className="navbar-toggler" data-bs-target="#lists" data-bs-toggle="collapse">
                    <span className="bi bi-list"></span>
                </button>
                <div className="navbar-collapse collapse" id="lists">
                    <ol className="navbar-nav">
                        {
                            category.map((items, index) => 
                            <li className="nav-item" key={index}>
                                <a className="nav-link text-dark">{items.toUpperCase()}</a>
                            </li>
                            )

                        }
                    </ol>
                </div>

            </nav>

        </div>
    )
}