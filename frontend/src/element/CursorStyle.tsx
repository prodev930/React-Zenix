import { useState } from "react"

const CursorStyle = () => {

    const [directio, setDirection] = useState({ x: 0, y: 0 });

    window.onmousemove = function (e) {
        setDirection({
            x: e.pageX,
            y: e.pageY
        });

    }

    return (
        <>
            <div id="AnimateCursor" style={{
                left: `${directio.x}px`,
                top: `${directio.y}px`,
            }}>
            </div>
        </>
    )
}

export default CursorStyle