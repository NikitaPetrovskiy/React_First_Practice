import React from "react";
import Users from "./Users"
import { connect } from "react-redux";
import {followAC, setCurrentPageAC, setUsersAC, unFollowAC, setTotalUsersCountAC} from "../../redux/usersReducer";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID));
        },
        unfollow: (userID) => {
            dispatch(unFollowAC(userID));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
           dispatch(setTotalUsersCountAC(totalCount))
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users);