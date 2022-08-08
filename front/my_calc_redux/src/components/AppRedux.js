import React from "react";
import { connect } from "react-redux";

class ReduxApp extends React.Component{
    addLibrary(){
        console.log('Oops', this.inputValue.value)
        this.props.addElement(this.inputValue.value)
        this.inputValue.value = '' // очистить поле ввода инпута
    }
    render(){
        console.log(this.props)
        return(
            <div>
                
                <input  type="text" ref={(input) => {this.inputValue = input}} />
                <button onClick={this.addLibrary.bind(this)}>Click me</button>
                <ul>
                    {this.props.libraries.map(item => <li key={item}>{item}</li>)}
                </ul>

            </div>
        )
    }
}

export default connect(
    // mapStateToProps
    state => ({
        libraries: state.changeLibrary,
        frameworks: state.changeFrameworks
    }),
    // mapDispatchToProps
    dispatch => ({
        addElement: (elem) => {
            dispatch({type:'ADD_LIBRARY', payload:elem});
        }
    })
)(ReduxApp) ;
// ref={(input) => {this.inputValue = input}} создать переменную и передать туда инпут