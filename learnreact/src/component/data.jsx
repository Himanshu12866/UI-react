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
           <ol>
            {
                categories.map(category => <a href="{`${category}`}" key={category}>{category}</a>)
            }
           </ol>

        </div>
    )
}