import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const {Wrapper, CustomLink, UserWrapper, UserInput, UserHeader} = {
    Wrapper: styled.div`
        margin: 100px auto;
        width: 80%;
        border: 2px solid rgba(0,0,0,.2);
        box-shadow: 4px 4px 6px rgba(0,0,0,.3);
        text-align: center;
        padding: 20px;
    `,
    CustomLink: styled(Link)`
        color: white;
        text-transform: uppercase;
        display: block;
        padding: 10px;
        text-decoration: none;
        font-weight: 400;
        font-size: 22px;
        border: 1px solid #2f2f2f;
        transition: all .3 ease;
        width: 220px;
        margin: 20px auto;
        text-align: center;
        background: #2f2f2f;

        &:hover {
            background: #fff;
            border: 1px solid #2f2f2f;
            color: black;
        }
    `,
    UserWrapper: styled.div`
        border: 1px solid salmon;
        padding: 10px;
        width: 90%;
        margin: 20px auto;
    `,
    UserInput: styled.input`
        display: block;
        outline: none;
        border: 1px solid #2f2f2f;
        font-size: 20px;
        margin: 10px auto;
        padding: 10px;
    `,
    UserHeader: styled.h2`
        font-size: 30px;
        font-weight: bold;
        text-align: center;
    `
}

export class MainPage extends React.Component {
    state = {
        userId: ''
    }


    changeHandler = ({target: {value}}) => {
        this.setState(() => ({userId: value}))
    }
    
    render () {
        return (
            <Wrapper>
                <h1>Main page</h1>
                <CustomLink to="/search">Search user</CustomLink>
                <UserWrapper>
                    <UserHeader>Enter user ID</UserHeader>
                    <UserInput 
                    placeholder="Enter user id" 
                    value={this.state.userId}
                    onChange={this.changeHandler}></UserInput>
                    <CustomLink to={`/user/${this.state.userId}`}>Go to user</CustomLink>
                </UserWrapper>
            </Wrapper>
        )
    }
    
}