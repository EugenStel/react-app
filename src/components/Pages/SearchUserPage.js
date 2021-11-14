import React from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { UserList } from "../UserList/UserList";
import { delay } from "../../utils/delay";
import { Link } from "react-router-dom"



export default class SearchUserPage extends React.Component {


    state = {
        users: null,
        filteredUsers: null
    }

    componentDidMount() {
        delay(1200).then(() => {
            return fetch('https://reqres.in/api/users?page=1')
        })
            .then((response) => response.json())
            .then(({ data }) => this.setState({ users: data, filteredUsers: data }))

    }

    handleClick = (searchName) => {
        const filteredUsers = this.state.users.filter(
            ({ last_name, first_name }) =>
                last_name.toLowerCase().includes(searchName)
                || first_name.toLowerCase().includes(searchName)
        );
        // console.log(filteredUsers)
        this.setState({filteredUsers: filteredUsers})
        // если поля совпадают по названию, можно написать его 1 раз
        // this.setState({filteredUsers})
    }

    render() {
        // console.log('App render')
        return (
            <>
                <SearchBar whenClick={this.handleClick} />
                <Link to="/">Go to main page</Link>
                {/* <UserList users={this.state.filteredUsers ? this.state.filteredUsers : this.state.users} /> */}
                <UserList users={this.state.filteredUsers} />
            </>
        )
    }
}