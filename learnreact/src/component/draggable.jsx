
import { useState } from "react"
import "../component/draggable.css"
export default function DraggableBox() {
    const [left, setLeft] = useState("")
    const [top, setTop] = useState("")
    function handleDrag(e) {
        let x = e.clientX;
        let y = e.clientY;
        console.log(x)
        console.log(y)
        setLeft(x)
        setTop(y)
    }

    return (
        <div className="drag-box" onMouseMove={handleDrag} >
            <div className="dragbox" style={{ left: { left }, top: { top } }}></div>

        </div>
    )
}