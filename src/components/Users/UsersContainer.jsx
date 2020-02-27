import {connect} from 'react-redux';
import {
    follow, requestUsers,
    setPage, toggleFollowingProgress,
    unfollow
} from '../../redux/users-reducer';
import '../../App.css';
import React from 'react';
import Users from './Users';
import Preloader from "../common/preloader/Preloader.jsx";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgres,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers
} from "../../redux/users-selectors";


class UsersContainer extends React.Component {

    componentDidMount(): void {
        const {currentPage, pageSize} = this.props;
        this.props.requestUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props;
        this.props.requestUsers(pageNumber, pageSize);
    };

    render() {

        return <>
            {this.props.isFetching ?
                <Preloader/> : null}
            <Users totalItemsCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgres(state)
    };
};

export default compose(
        connect(mapStateToProps, {follow, unfollow, setPage, toggleFollowingProgress, requestUsers})
)(UsersContainer);