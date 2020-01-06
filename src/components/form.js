import React, { Component } from 'react';


class ContactForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            color: 'red'
        }
    }

    render(){
        return(
            <div style={{backgroundColor:this.state.color, width: '100px', height: '100px'}}>
                <p>My Element</p>
            </div>
        )
    }
}
export default ContactForm;