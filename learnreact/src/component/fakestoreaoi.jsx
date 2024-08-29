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
    const [arr, setArr] = useState([])
    const [category, categories] = useState([])
    const [total, setTotal] = useState(0)

    function LoadProducts() {
        axios.get("https://fakestoreapi.com/products")
            .then(repsonse => {
                setProducts(repsonse.data)
            })
    }
    function FilterLinks() {
        axios.get("https://fakestoreapi.com/products")
            .then(repsonse => {
                setProducts(repsonse.data)
            })
    }
    function LoadCategory() {
        category.unshift("all")
        axios.get("https://fakestoreapi.com/products/categories")
            .then(response => {
                categories(response.data)
            })
    }
    function FilterLink(e) {
        let links = e.target.name;
        axios.get(`https://fakestoreapi.com/products/category/${links}`)
            .then(response => {
                setProducts(response.data)
            })
    }
    function handleCart(item) {
        alert("Your Item has been added to the cart")
        setArr(prev => [...prev, item])
    }
    function handelDelete(e) {
        setArr(prev => prev.filter(item => item.id !== e.target.id))
        let deleteItem = e.target.name;
        arr.pop(deleteItem)
        alert("Item Removed from the cart")
        SetTotal()
    }
    function SetTotal(){
        arr.map(inr => {
            let subTotal = inr.price
            setTotal(subTotal)
        })    
    }
    useEffect(() => {
        LoadCategory()
        LoadProducts()
        SetTotal()
    }, [])
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
                        <li className="nav-item">
                            <a className="nav-link" onClick={FilterLinks}>All</a>
                        </li>
                        {
                            category.map((list, index) =>
                                <li className="nav-item" key={index}>
                                    <a className="nav-link" onClick={FilterLink} key={index}>{list.toUpperCase()}</a>
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
                                <button className="btn btn-dark ms-4 position-relative" data-bs-target="#modalBox" data-bs-toggle="modal">
                                    <span className="badge badge-dark rounded rounded-2 fs-4 position-absolute text-light" style={{ bottom: "0px", right: "15px", marginBottom: "30px" }}>{arr.length}</span>
                                    <span className="bi bi-cart3 text-light"></span>
                                </button>
                            </div>

                        </div>
                    </ol>

                </div>
            </nav>
            <div className="d-flex flex-wrap">
                {
                    products.map((product, index) =>

                        <div className="card text-center" style={{ width: "300px", height: "480px", margin: "10px" }} key={index}>
                            <img src={product.image} style={{ width: "250px", height: "200px" }} className="card-img-top text-center"></img>
                            <div className="card-header" style={{ height: "100px" }}>
                                <p style={{ textOverflow: "ellipsis", fontSize: "12px" }}>{product.title}</p>
                            </div>
                            <div className="card-body">
                                <p className="fs-4"> <b>{product.price.toLocaleString('en-in', { style: "currency", currency: "INR" })}</b></p>
                                <p><span className="bi bi-star-fill text-primary">{product.rating.rate}</span> Rating <i className="text-danger">{product.rating.count}</i> Reviews</p>

                            </div>
                            <div className="card-footer">
                                <button className="btn btn-dark" onClick={() => handleCart(product)} style={{ width: "100%" }}><span className="bi bi-cart3 text-light mx-2"></span>Add to Cart</button>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className="modal fade" id="modalBox">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1>Your Cart</h1>
                            <button className="btn btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>S.No</th>
                                        <th>Name</th>
                                        <th>Preview</th>
                                        <th>Price</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        arr.map((data, index) =>
                                            <tr key={index} style={{ height: "30px" }}>
                                                <td>{data.id}</td>
                                                <td style={{fontSize:"12px"}}>{data.title}</td>
                                                <td><img style={{ width: "50px", height: "50px", marginTop: "-5px", padding: "0" }} src={data.image}></img></td>
                                                <td><b>{data.price.toLocaleString('en-in', { style: "currency", currency: "INR" })}</b></td>
                                                <td><button className=" btn btn-danger bi bi-trash-fill" name={index} onClick={handelDelete}></button></td>

                                            </tr>
                                        )
                                    }
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th colSpan={"2"} style={{textAlign:"center"}}>Total</th>
                                        <th colSpan={"2"} style={{textAlign:"center"}}>{total.toLocaleString("en-in", {style:"currency", currency:"INR"})}</th>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}