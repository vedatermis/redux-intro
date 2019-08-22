import React, { Component } from 'react'
import { increaseByTwocreaseCounter } from "../redux/actions/counterActions";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';


class IncreaseByTwoCounter extends Component {
    render() {
        return (
            <div>
                <button onClick = {
                    e => {
                        this.props.dispatch(increaseByTwocreaseCounter());
                    }
                }>2 Arttır</button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(increaseByTwocreaseCounter, dispatch)
    }
}

export default connect(mapDispatchToProps)(IncreaseByTwoCounter);