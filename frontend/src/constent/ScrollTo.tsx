import { useEffect } from "react";
import { useLocation } from "react-router";



const GetScrollTop = () => {
    const pathneme = useLocation().pathname

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathneme]);
    return (
        <>
            <button
                onClick={() => { window.scrollTo(0, 0) }}
                className={`icon-up `} type="button">
                <i className="fas fa-arrow-up"></i>
            </button >
        </>
    )
}
export default GetScrollTop