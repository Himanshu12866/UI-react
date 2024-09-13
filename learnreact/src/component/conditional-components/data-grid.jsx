export default function DataGrid(props) {
    if (props.layout === "grid") {
        return (
            <div>
                <h1>Grid Layout</h1>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            {
                                props.fields.map(key => <th key={key}>{key}</th>)
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.data.map(item =>
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
    else if (props.layout === "card") {
        return (
            <div className="d-flex flex-wrap">
                {
                    props.data.map(item =>
                        <div style={{ width: "200px", height: "250px" }} className="card" key={item}>

                            <div className="card-header">
                                {
                                    item[Object.keys(item)[0]]
                                }
                            </div>
                            <div className="card-body">
                                <dl>
                                    <td>{Object.keys(item)[1]}</td>
                                    <td>{Object.keys(item)[1]}</td>
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
    else{
        return(
            <div> 
            <h2>Please Select a Layout</h2>
            </div>
        )
    }


}