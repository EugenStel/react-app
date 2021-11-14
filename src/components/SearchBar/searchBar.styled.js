import styled from 'styled-components'

export const Components = {
    Wrapper: styled.div`
        width: 80%;
        margin: 30px auto;
        box-shadow: 3px 3px 4px 2px rgba(0,0,0,.2);
        padding: 20px;
        text-align: center;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    `,
    Input: styled.input`
        font-size: 20px;
        margin-right: 10px;
        padding: 10px;
        outline: none;
        ${({value}) => value.length > 5 
        ? 'border: 2px solid red;'
        : 'border: 2px solid black;'}

        
    `,
    // ${(props) => console.log(props)}
    Button: styled.button`
        margin: 15px 0;
        transition: all 0.2s ease;
        cursor: pointer;
        padding: 10px;
        background: #2f2f2f;
        color: white;
        font-size: 20px;
        border-radius: 6px;
        border: none;
        box-shadow: 2px 2px 2px rgba(0,0,0,.5);

        &:hover {
            background: black;
        }
        &:active {
            box-shadow: none;
        }

        @media screen and (max-width: 500px) {
            background: green;
        }
    `
}