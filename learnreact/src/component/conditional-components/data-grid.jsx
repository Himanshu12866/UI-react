import { useEffect, useState } from "react"

export default function DataGrid({data,fields,layout}) {

    const [product, setProduct] = useState([])

    useEffect(() => {
        console.log(data)
        setProduct(data)
    }, [data])

    if (layout == "grid") {
        return (
            <div>
                <h1>Grid Layout</h1>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            {
                                fields.map(key => <th key={key}>{key}</th>)
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            product.map(item =>
                                <tr key={item}>

                                    {
                                        Object.keys(item).map(key => <td key={item}> {item[key]}</td>)
                                    }
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
    else if (layout == "card") {
        return (
            <div className="d-flex flex-wrap">
                {
                    product.map((item,index) =>
                        <div style={{ width: "200px", height: "250px" }} className="card m-2" key={index}>

                            <div className="card-header">
                                {
                                    item[Object.keys(item)[0]]
                                }
                            </div>
                            <div className="card-body">
                                <dl>
                                    <td>{Object.keys(item)[1]}</td>
                                    <td>{item[Object.keys(item)[1]]}</td>
                                </dl>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-dark w-100">Buy Now</button>

                            </div>
                        </div>


                    )
                }
            </div>
        )
    }
    else {
        return (
            <div>
                <h2>Please Select a Layout</h2>
            </div>
        )
    }


}