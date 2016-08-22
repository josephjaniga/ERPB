import React from 'react';

export default class ExampleComponent extends React.Component {
    constructor(){
        super();
    }
    render(){

        let displayBoolean = this.props.data && this.props.data.ui.showActiveCustomer ? 'block' : 'none';

        return (
            <div style={{
                top: "0px",
                right: "0px",
                bottom: "0px",
                left: "0px",
                background: "white",
                color: "black",
                display: 'block',
            }}>
                <h1>EXAMPLE-COMPONENT</h1>
            </div>
        );
    }
}