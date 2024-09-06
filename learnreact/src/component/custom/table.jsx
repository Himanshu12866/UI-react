



export default function Table(props) {
    return (
        <div className="p-3">
            <table className="table table-hover table-striped">
                <thead className="thead-dark">
                    <tr>
                        {
                            props.headItems.map((item, index) =>
                                <th key={index}>{item}</th>
                            )
                        }
                    </tr>
                   
                </thead>
                <tbody>
                        {
                            props.data.map((item , index) => 
                            <tr key={index}>
                                {
                                    Object.keys(item).map((key) => <td key={key}> {item[key]} </td> )
                                }
                            </tr>
                            )
                        }
                    </tbody>
            </table>

        </div>
    )
}