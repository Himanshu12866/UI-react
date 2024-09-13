export default function CustomList(props) {
    return (
        <div className={` ${props.theme}`}>
            <ol className={`d-flex p-2 justify-content-between list-unstyled ${props.listTheme}`}>
                {
                    props.items.map((item, index) =>
                        <li key={index} className="nav-item">
                            <a className="fs-4 text-light" style={{color:`${props.linkColor}!important`}}>{item}</a>
                        </li>
                    )
                }
            </ol>
        </div>

    )
}