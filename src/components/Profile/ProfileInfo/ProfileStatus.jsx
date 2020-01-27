import React from "react";
import './../../../App.css'

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
        console.log('componentDidUpdate')
    }



    activateEditMode = () => {
        this.setState({editMode: true});
    };

    deactivateEditMode = () => {
        this.setState({editMode: false});
        this.props.updateStatus(this.state.status)
    };

    onStatusChange = (e) => {
        this.setState({status: e.currentTarget.value})
    };

    render() {
        return (
                <div className="styleStatus"><span>status:</span>
                    {!this.state.editMode
                            ? <div>
                                <span onDoubleClick={this.activateEditMode}> {this.props.status || '----'}</span>
                            </div>
                            : <div>
                                <input autoFocus={true}
                                       onChange={this.onStatusChange}
                                       onBlur={this.deactivateEditMode}
                                       value={this.state.status}/>
                            </div>
                    }

                </div>
        )
    }
}

export default ProfileStatus;