import React, { Component } from 'react';
import africastalking from 'africastalking';
import axios from 'axios';

// APIKE2: a1269ce5868a22fe671b7b517e7f10fcb6a6dd14761c5149d349be9e5b4550c0

 


class ContactForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            color: 'grey',
            options : {
                apiKey: 'a1269ce5868a22fe671b7b517e7f10fcb6a6dd14761c5149d349be9e5b4550c0',
                username: 'steveochieng'
            },
            info: {
            to: '+25473367564',
            message: "I'm a lumberjack and its ok, I sleep all night and I work all day",
            from: 'steven'}
        }
        
    };

     sendMessage = () => {
        //Initialize the SDK
      const AfricasTalking = africastalking(this.state.options);
  
     //Get the SMS service
      const sms = AfricasTalking.SMS;
          sms.send(this.state.info)
          .then((response) => {
              console.log(response);
          })
          .catch((error) => {
              console.log(error);
          });
      };

      componentDidMount(){
          fetch('version1/messaging');
      }


    render(){
        return(
            <div>
                <form style={{margin:"40px auto", width:"50%"}}>
                    <div className="form-group row">
                        <label htmlFor="name" className="col-sm-2 col-form-label">Name:</label>
                        <div className="col-sm-10">
                        <input type="text" className="form-control" id="name" placeholder="Enter First Name" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="phone" className="col-sm-2 col-form-label">Phone</label>
                        <div className="col-sm-10">
                        <input type="text" className="form-control" id="phone" placeholder="Enter phone" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="comment" className="col-sm-2 col-form-label">comment</label>
                        <div className="col-sm-10">
                        <input type="text" className="form-control" id="comment" placeholder="Write message"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-10">
                        <button type="submit" className="btn btn-primary">Sign in</button>
                        </div>
                    </div>
                </form>
                <div>{this.sendMessage()}</div>
            </div>
        )
    }
}
export default ContactForm;