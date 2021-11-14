import React, {useState} from "react"


export const Counter = () => {

    const [count,setCount] = useState(0);
    const [text,setText] = useState('');
    const [isDisable,setisDisable] = useState(true);

    const dec = () => {
        if (count === 0) {
            return
        }
        setCount(count - 1)
    }

    const inc = () => {
        setTimeout(() => {
            setCount((prevCount) => prevCount + 1)
        }, 100);
        setisDisable(false)
    }

    const clear = () => {
        setCount(0);
        setisDisable(true)
    }

    const inputChange = ({target: {value}}) => {
        setText(value)
    }

    const setCounterFromInput = () => {
        setCount(+text)
    }

    return (
        <>
            <h1>Текущее значение счетчика: {count}</h1>
            <input 
            type='text' 
            onChange={inputChange} 
            value={text}/>
            <button onClick={setCounterFromInput}>Set counter</button>
            <br />
            <button onClick={inc} >Увеличить</button>
            <button onClick={dec}>Уменьшить</button>
            <button onClick={clear} disabled={isDisable}>Заказать</button>
        </>
    )
}