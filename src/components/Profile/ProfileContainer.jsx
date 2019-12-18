import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";

class ProfileContainer extends React.Component {

    componentDidMount(): void {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 5397;
        }
        this.props.getUserProfile(userId);
    }

    render = () => {



        return (
                <div>
                    <Profile {...this.props} profile={this.props.profile}/>
                </div>
        )
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
});
AuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent);


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});


let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);