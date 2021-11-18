import { useState, useCallback, memo, useMemo } from "react"


const Item = memo(({itemData: {id, name}, clickHandler}) => {
    console.log(`${id} item RENDERS`)
    const [counter, setCounter] = useState(0)
    return (
        <>
            <div 
            onClick={() => {clickHandler(id)}}
            >
            {name}
            </div>
        </>
    )
}) ;


export const Example = () => {

    const [someState, setSomeState] = useState();
    const [message, setMessage] = useState('')



    const items = useMemo(() => {
        return [
            {
                id: 1,
                name: 'First'
            },
            {
                id: 2,
                name: 'Second'
            },
            {
                id: 3,
                name: 'Third'
            }
        ];
    }, []);

    // const handleClick = () => {
    //     setSomeState({})
    //     console.log('button was clicked!')
    // }

    // const handleClick = useCallback(() => {
    //     console.log(`New message income ${message}`)
    // }, [message])

    const handleMessage = () => {
        setMessage(Math.random().toFixed(2));
    }


    console.log('render')


    const handleClickItem = useCallback ((id) => {
        console.log(`${id} item was clicked!`)
    }, []);

    return (
        <>
            <h1>useCallback Example</h1>
            <div>{message}</div>
            {/* <button onClick={handleClick}>Click</button> */}
            <button onClick={handleMessage}>New message</button>
            {
            items.map((item) => 
            (<Item 
                key={item.id} 
                itemData={item} 
                clickHandler={handleClickItem}/>)
            )
            }
        </>
        
    )
}


// useCallback, useMemo - для оптимизации
// применять когда монго детей у родителя, и есть ссылка на функцию в пропсах
// memo = should compomemt update.. сравнивание пропсов, это hoc
// useCallback - для функций
// useMemo - для чего угодно