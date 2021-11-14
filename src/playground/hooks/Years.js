// import React, {useState} from "react"
import { useCounter } from "./useCounter";


export const Years = () => {

    const {count, dec, inc} = useCounter(2021, 1);

    return (
        <>
            <h1>Years count: {count}</h1>
            <br />
            <button onClick={inc} >Plus</button>
            <button onClick={dec}>Minus</button>
        
        </>
    )
}