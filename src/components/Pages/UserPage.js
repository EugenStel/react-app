import React, { useState } from "react";
import { useParams } from "react-router";
import { useMatch } from "react-router";
import { useEffect } from "react";
import { Link } from "react-router-dom"
import preloadersrc from '../../images/preloader.gif'
import { User } from "../User/User";
import { withError } from "../../hoc/withError";



const HandledUser = withError(User);


export const UserPage = (props) => {

    // console.log(props)
    // let math = useMatch();
    // console.log(math)
    
    // console.log(window.location.pathname)

    // const params = useParams();
    // console.log(params)


    const {userId} = useParams();
    const [userData, setUserData] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        setIsLoading(true);
        fetch(`https://reqres.in/api/users/${userId}`)
        .then((res) => {
            if (res.status >= 400 && res.status < 600) {
                throw new Error ('Failed fetching data')
            }
            return res.json()})
        .then(({data}) => setUserData(data))
        .catch(({message}) => setErrorMessage(message))
        .finally(() => setIsLoading(false))
    }, []);



    return (
        <>
        {!isLoading 
        ? <HandledUser {...userData} errorMsg={errorMessage}/>
        : <img src={preloadersrc}/> }
        
        <Link to="/">Go to main page</Link>
        </>
    )
}