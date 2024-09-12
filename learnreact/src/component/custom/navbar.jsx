

export default function NavBar(props) {
    return (
        <nav className={`navbar navbar-expand-sm  ${props.theme}`} >
            <a className="navbar-brand">{props.brand}</a>
            <button className="navbar-toggler" data-bs-target="#list" data-bs-toggle="collapse"><span className="bi bi-list"></span></button>
            <div className="navbar-collapse collapse" id="list">
                <ol className="navbar-nav">
                    {
                        props.links.map((link, index) =>
                            <li className="nav-item" key={index}>
                                <a className="nav-link" href="#">{link}</a>
                            </li>)

                    }
                </ol>
            </div>
        </nav>
    )
}