import { useState, useEffect, useRef } from "react"
import { useCounter } from "./useCounter"

export const Test = () => {
  const {count, inc, dec} = useCounter(0,1)

  const [state, setState] = useState(null)

  const renderRef = useRef(false)

// 2 аргумент - массив зависимостей: , []
// 2 функция для очистки, отписки
  // useEffect(() => {
  //   // document.title = count;
    
  //   console.log('RERENDER')
  //   return () => {
  //     console.log('COMPONENT UNMOUNT')
  //   }
  // }, [])


// with refs... не срабатывает на mount, но работает на апдэейт
  useEffect(() => {
    // document.title = count;
    if (!renderRef.current) {
      renderRef.current = true;
      console.log('render')
    } else {
      console.log('Use effect!')
    }
  })

  console.log('RENDER!')
  
  return (
    <>
      <div>{count}</div>
      <button onClick={inc}>Rerender +</button>
      <button onClick={dec}>Rerender -</button>
    </>
  )

}



export const TestToggler = () => {

  const [shoudShow, setShoudShow] = useState(true);

  return (
    <>
      <button onClick={() => {setShoudShow((prev) => !prev)}}>Toogle</button>
      {
        shoudShow && <Test/>
      }
    </>
  );
}