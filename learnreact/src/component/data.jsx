import { useState } from "react";


export default function DataBinding() {
    const [categories] = useState([
        "All",
        "Mens Fashion",
        "Womens Fashion",
        "Kids Fashion"
    ])
    return (
        <div><h2>Category</h2>
           <nav>
            {
                categories.map((category,index) => <a href="{`${index}`}" key={index}>{category}</a>)
            }
           </nav>

        </div>
    )
}