import { useReducer } from "react";

let initialState = { wishList: 0 }
function reducer(state, action) {
    switch (action.type) {
        case 'addToCart':
            return { wishList: state.wishList + 1 };
        case 'removeFromCart':
            return { wishList: state.wishList - 1 };
    }
}

export default function ReducerDemo() {

    const [state, dispatch] = useReducer(reducer, initialState);
    function handleWishList() {
        dispatch({ type: 'addToCart' });
    }
    function handleRemove() {
        dispatch({ type: 'removeFromCart' });
    }
    return (
        <div className="flexBx w-100 d-flex justify-content-center">
            <div className="card m-2 p-2" style={{ width: "220px", height: "400px" }}>
                <img src="../images/aws.png" style={{ width: "200px", height: "200px" }}></img>
                <div className="card-header">
                    <h5>Shopping App</h5>
                </div>
                <div className="card-footer">
                    <button onClick={handleWishList} className="btn btn-dark bi bi-plus fs-4"></button>
                    <button className=" btn btn-danger bi bi-cart mx-2 fs-4 position-relative"><span className="badge rounded rounded-pill  position-absolute bg-dark" style={{ top: "5px", left: "25px", fontSize: "10px" }}>{state.wishList}</span></button>
                    <button onClick={handleRemove} className="btn btn-warning bi bi-dash fs-4"></button>
                </div>
            </div>

        </div>
    )
}