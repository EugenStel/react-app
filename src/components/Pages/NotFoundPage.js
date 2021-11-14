import { Link } from "react-router-dom"

export const NotFoundPage = () => {
    return (
        <>
        <div style={{textAlign:'center'}}>
            <h1>Page not found</h1>
            <Link to="/">Go to main page</Link>
        </div>
        </>
    )
}