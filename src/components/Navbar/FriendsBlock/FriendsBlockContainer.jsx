import FriendsBlock from "./FriendsBlock";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return (
        state: state.navBar
    );
};

const FriendsBlockContainer = connect(mapStateToProps)(FriendsBlock);

export default FriendsBlockContainer;