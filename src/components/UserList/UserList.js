import React, {Component} from "react";
import { User } from "../User/User";
import cls from './UserList.module.css'
import loaderSrc from '../../images/preloader.gif'


export class UserList extends Component {

    render () {

        const {users} = this.props;
        return (
            users ?
            <ul className={cls.UserList}>
                {users.map(({id, ...otherProps}) => (<User key={id} {...otherProps}/>))}
                
            </ul>
            :  <img src={loaderSrc} alt='user_avatar'/>
        )
    }
}

// two way binding