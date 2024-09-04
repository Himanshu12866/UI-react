import { useEffect, useState } from "react";
import axios from 'axios';


export default function ShopperApp() {

    const [products, setProducts] = useState([{
        id: 0,
        title: "",
        price: 0,
        image: "",
        rating: {
            rate: 0,
            count: 0
        },
        category: ""

    }])
    const [category, categories] = useState([]);
    const [cardItems, setcardItems] = useState([]);

    // category.unshift("all")
    function LoadCategory() {

        axios.get("https://fakestoreapi.com/products/categories")
            .then(category => {
                categories(category.data);
            })

    }
    function LoadProducts() {
        axios.get("https://fakestoreapi.com/products")
            .then(response => {
                setProducts(response.data)
            })
    }

    function AddToCart(cartitems) {
        alert("Added To Card");
        setcardItems(prev => [...prev, cartitems])
        console.log(cardItems)

    }
    function FilterLink(e) {
        let link = e.target.id;
        axios.get(`https://fakestoreapi.com/products/category/${link}`)
            .then(response => {
                setProducts(response.data)
            })
    }

    function LoadALL() {
        LoadProducts()
    }


    function typeProduct(e) {
        let InputValue = e.target.value;
        const filteredProducts = products.filter(obj => obj.title.toLowerCase().includes(InputValue));
        setProducts(filteredProducts)
    }
    function searchProduct() {
        typeProduct()
    }
    function BackToAll() {
        LoadProducts()
    }

function RatingChange1(e){
    let rating = e.target.value;
    if(e.target.checked){
        const filterRating = products.filter(product => product.rating.rate >= rating);
        setProducts(filterRating);
    }
    else{
        LoadProducts()
    }
}
function RatingChange2(e){
    let rating = e.target.value;
    if(e.target.checked){
        const filterRating = products.filter(product => product.rating.rate <= rating);
        setProducts(filterRating);
    }
    else{
        LoadProducts()
    }

}












    useEffect(() => {

        LoadCategory();
        LoadProducts()

    }, [])

    return (
        <div>
            <nav className="navbar navbar-expand-sm">
                <a className="navbar-brand fw-bold fs-3">Shopper.</a>
                <button className="navbar-toggler" data-bs-target="#lists" data-bs-toggle="collapse">
                    <span className="bi bi-list"></span>
                </button>
                <div className="navbar-collapse collapse" id="lists">
                    <ol className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" onClick={LoadALL}>All</a>
                        </li>
                        {
                            category.map((items, index) =>
                                <li className="nav-item" key={index}  >
                                    <a className="nav-link text-dark" id={items} onClick={FilterLink}>{items.toUpperCase()}</a>
                                </li>
                            )

                        }
                        <li className="nav-item mx-2">
                            <div className="input-group">
                                <input className="form-control" type="text" onBlur={typeProduct} onChange={BackToAll}></input>
                                <button className="input-group-text text-center" onClick={searchProduct}>
                                    <span className="bi bi-search"></span>
                                </button>
                            </div>
                        </li>
                        <li className="nav-item d-lg-flex justify-content-center">
                            <input type="checkbox" value={4} onChange={RatingChange1} className="form-check-input"></input>
                            <p>
                                <span className="bi bi-star-fill"> 4 or Above</span>
                            </p>

                        </li>
                        <li className="nav-item d-lg-flex ms-2">
                            <input type="checkbox" value={3.9} onChange={RatingChange2} className="form-check-input"></input>
                            <p >
                                <span className="bi bi-star-fill"> 3.9 or Below</span>
                            </p>

                        </li>
                        <li className="nav-item ms-3">
                            <button className="btn btn-dark">
                                <span className="badge bg-danger rounded rounded-circle position-absolute" style={{ top: "10px" }}>{cardItems.length}</span>
                                <span className="bi bi-cart text-light" style={{ marginLeft: "-2px" }}></span></button>
                        </li>
                    </ol>
                </div>

            </nav>
            <main className="d-flex flex-wrap">
                {
                    products.map((product, index) =>

                        <div className="card" style={{ width: "300px", height: "550px", margin: "10px" }} key={index}>
                            <div style={{ textAlign: "center" }} >
                                <img src={product.image} style={{ width: "200px", margin: "10px", height: "200px" }} className="card-img-top" alt="..."></img>
                            </div>
                            <div className="card-header">
                                <p className="fw-bold">{product.price.toLocaleString("en-in", { style: "currency", currency: "INR" })}</p>
                                <p><span className="bi bi-tag-fill text-primary"></span> {product.category.toUpperCase()}</p>
                                <p>{product.title}</p>
                            </div>
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <p><span className="bi bi-star-fill text-primary"></span> {product.rating.rate} Rating</p>
                                    <p><span className="bi bi-person-fill text-warning"></span> {product.rating.count} Reviews</p>
                                </div>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-dark w-100 text-light" id={product.id} onClick={() => { AddToCart(product) }}><span className="bi bi-cart4 text-light"></span> Add To Cart</button>
                            </div>
                        </div>
                    )
                }
            </main>

        </div>
    )
}