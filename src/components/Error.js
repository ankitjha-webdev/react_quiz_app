import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';
const Error = () => {

    return (
        <>
        <div className="component text-center has-text-white">
            <h1 className="title is-1">Oops page not found!</h1>
            <br />
            <h3 className="title is-3">404 Error :(</h3>
            <br />

            <h5 className="title is-5">
                <Link to="/"> Go back to Home Page</Link>
            </h5>
            </div>
        </>
    )
}
export default Error