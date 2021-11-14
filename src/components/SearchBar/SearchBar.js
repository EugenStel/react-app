import React, {Component} from "react";
import { Components } from "./searchBar.styled";
// import cls from './SearchBar.module.css'
// import styled from 'styled-components'

// console.log(styled)


// two way binding
// reconcilation

export class SearchBar extends Component {

    constructor (props) {
        super(props);
        this.state = {
            inputText: ''
        }
        this.inputRef = React.createRef();
    }

    // state = {
    //     inputText: ''
    // }


    // handleChange = ({target: {value}}) => {
    //     this.setState(
    //         () => ({inputText: value}),
    //         () => this.props.whenClick(this.state.inputText)
    //     );
    // }


    handleChange = ({target: {value}}) => {
        this.setState(() => ({inputText: value}));
        this.props.whenClick(value)
    }


    componentDidMount () {
        // console.log(this.inputRef);
        this.inputRef.current.focus()
    }

    render () {
        // console.log('Search bar render')
        return (
            // <div className={cls.SearchBar}>
            //     <h1>Search user</h1>
            //     {/* <input type="text" className={cls.searchInput} onChange={() => {console.log(1)}}/> */}
            //     {/* <input type="text" className={cls.searchInput} onChange={(e) => {console.log(e.target.value)}}/> */}
            //     <input 
            //         type="text"
            //         // two way binding
            //         value={this.state.inputText}
            //         className={cls.searchInput} 
            //         onChange={this.handleChange}
            //     />
            //     <button 
            //         className={cls.searchButton} 
            //         onClick={() => {
            //             this.props.whenClick(this.state.inputText)
            //         }}
            //     >Find user</button>
            // </div>


            <Components.Wrapper>
                <h1>Search user</h1>
                <Components.Input 
                    type="text"
                    value={this.state.inputText}
                    onChange={this.handleChange}
                    ref={this.inputRef}
                />
                <Components.Button
                    onClick={() => {
                        this.props.whenClick(this.state.inputText)
                    }}
                >Find user</Components.Button>
            </Components.Wrapper>
        )
    }
}