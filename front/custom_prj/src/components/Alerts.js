import * as React from 'react';
import Alert from 'react-bootstrap/Alert';


function Alerts(props){
    let children = props.children
    console.log(React.Children.count(props.children), React.Children)
    return(
        <>
            <Alert  variant={'danger'}>
                {props.children}
                <span>   {React.Children.count(props.children)}</span>
            </Alert>
        </>
    )
}
// вызов переданного контента props.children
// React.Children доступ к чилдрен, { React.Children.map(children, child => { … }) }
export default Alerts;