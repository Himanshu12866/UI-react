



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
                    <tbody>
                        {
                            Object.keys(items).map((item, index) =>
                                <td key={index}>{item}</td>
                            )
                        }
                    </tbody>
                </thead>
            </table>

        </div>
    )
}