// Создаем компонент контейнер, которая будет оберткой для нашей презентационной компоненты, контейнерная компонента будет иметь доступ к store, а презентационная нет. Здесь мы создаем функции из данных store которые нужны презентационной компоненте. 
import React from 'react';
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setUsersTotalCountAC, toggleIsFetchingAC } from '../../redux/users-reducer';
import Users from './Users';
import { connect } from 'react-redux';
import axios from 'axios';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(res => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(res.data.items);
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(res => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(res.data.items);
        })
    }

    render() {
        return <Users 
                    totalUsersCount = {this.props.totalUsersCount}
                    pageSize = {this.props.pageSize}
                    onPageChanged = {this.onPageChanged}
                    users = {this.props.users}
                    follow = {this.props.follow}
                    unfollow = {this.props.unfollow}
                    currentPage = {this.props.currentPage}
                    isFetching = {this.props.isFetching}
                />
    }
}

const mapStateToProps = (state) => { // Функция которая передает state в качестве параметра в функцию контейнер
    return {
        users: state.pageUsers.users,
        pageSize: state.pageUsers.pageSize,
        totalUsersCount: state.pageUsers.totalUsersCount,
        currentPage: state.pageUsers.currentPage,
        isFetching: state.pageUsers.isFetching
    }
}
const mapDispatchToProps = (dispatch) => { // Функция которая передает в dispatch функции
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPageAC(page));
        },
        setUsersTotalCount: (count) => {
            dispatch(setUsersTotalCountAC(count));
        },
        toggleIsFetching: (bool) => {
            dispatch(toggleIsFetchingAC(bool));
        }
    }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainer); // Создаем контейнерную компоненту с помощью функции коннект,она внутри создает презентационную компоненту и передаем в нее в качестве props параметры. 

export default ProfileContainer;