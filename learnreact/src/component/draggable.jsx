
import { useState, useEffect } from 'react';
function DraggableBox() {

    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
        const onMouseMove = (event) => {
            if (isDragging) {
                setPosition((prevPos) => ({
                    x: prevPos.x + event.movementX,
                    y: prevPos.y + event.movementY,
                }));
            }
        };

        const onMouseUp = () => {
            setIsDragging(false);
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };
    }, [isDragging]);

    const handleMouseDown = () => {
        setIsDragging(true);
    };

    return (
        <div>
            <div
                onMouseDown={handleMouseDown}
                style={{

                    position: 'absolute',
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    width: '100px',  // Adjust as needed
                    height: '100px', // Adjust as needed
                    backgroundColor: 'lightblue',
                    cursor: 'grab',
                }}
            >
                Drag Me
            </div>
            <div
                onMouseDown={handleMouseDown}
                style={{

                    position: 'absolute',
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    width: '100px',  // Adjust as needed
                    height: '100px', // Adjust as needed
                    backgroundColor: 'lightblue',
                    cursor: 'grab',
                }}
            >
                Drag Me
            </div>
            <div
                onMouseDown={handleMouseDown}
                style={{

                    position: 'absolute',
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    width: '100px',  // Adjust as needed
                    height: '100px', // Adjust as needed
                    backgroundColor: 'lightblue',
                    cursor: 'grab',
                }}
            >
                Drag Me
            </div>
        </div>)
}

export default DraggableBox;
