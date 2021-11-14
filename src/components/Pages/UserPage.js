import React from "react";
import { useParams } from "react-router";
import { useMatch } from "react-router";
import { useEffect } from "react";
import { Link } from "react-router-dom"

export const UserPage = (props) => {

    // console.log(props)
    // let math = useMatch();
    // console.log(math)
    
    // console.log(window.location.pathname)

    // const params = useParams();
    // console.log(params)


    const {userId} = useParams();

    useEffect(() => {
        fetch(`https://reqres.in/api/users/${userId}`)
        .then((res) => {
            if (res.status === 404) {
                throw new Error ('Person not found!')
            }
            return res.json()})
        .then((res) => {console.log(res)})
        .catch(() => {})
    }, []);


    return (
        <>
        <h1>User page: {userId}</h1>
        <Link to="/">Go to main page</Link>
        </>
    )
}