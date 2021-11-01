// Code EyesOnMe Component Here
import React, { Component } from 'react';

export default class EyesOnMe extends Component {

focusLog() {
    console.log('Good!')
}

blurLog() {
    console.log('Hey! Eyes on me!')
}

    render() {
    return (
        <button
        onFocus={this.focusLog}
        onBlur={this.blurLog}>
        </button>
    )
}
}