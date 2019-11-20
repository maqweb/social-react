import React from "react";
import FriendsBlock from "./FriendsBlock";
import {connect} from "react-redux";

// const FriendsBlockContainer = () => {
//
//     return <StoreContext.Consumer>
//         {
//             (store) => {
//
//                 let state = store.getState();
//                 return <FriendsBlock state={state.navBar}/>
//             }
//         }
//     </StoreContext.Consumer>
// };

let mapStateToProps = (state) => {
    return (
        state: state.navBar
    );
};

const FriendsBlockContainer = connect(mapStateToProps)(FriendsBlock);

export default FriendsBlockContainer;