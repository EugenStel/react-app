// import React, {useState} from "react"
import { useCounter } from "./useCounter";

export const Eggs = () => {

    const {count, dec, inc} = useCounter(0, 10);

    return (
        <>
            <h1>Eggs count: {count}</h1>
            <br />
            <button onClick={inc} >Увеличить</button>
            <button onClick={dec}>Уменьшить</button>
        
        </>
    )
}