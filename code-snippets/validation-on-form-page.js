import React, { Component } from "react";
import * as messagesService from "../../services/messages.service";
import { onChange, showFormErrors } from "../../helpers/validation.helper";


class MessagesDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        //removing for brevity
      },
      errors: {}
    };
    //removing for brevity
  }

  componentDidMount() {
    if (this.props.match.params.id) {
      messagesService.readById(this.props.match.params.id)
        .then(data => {
          this.setState({ formData: data.item });
        });
    }
  }

  onCancel(e) {
    this.props.history.goBack();
  }

  submitHandler(e) {
    //removing for brevity
  }

  onSave(event) {

    if (!showFormErrors.call(this)) {
      return;
    }

    let item = {
      senderId: this.state.formData.senderId,
      recipientId: this.state.formData.recipientId,
      message: this.state.formData.message
    }
    if (this.state.formData._id) {
      item._id = this.state.formData._id;
      messagesService
        .update(this.props.match.params.id, item)
        .then(data => {
          this.props.history.goBack();
        })
        .catch(error => console.log(error));
    } else {
      messagesService
        .create(item)
        .then(data => {
          this.props.history.goBack();
        })
        .catch(error => console.log(error));
    }
  }
  //removing for brevity

  render() {
    return (
      <React.Fragment>

       

        <div id="senderId" className={"form-group " + (this.state.errors.senderId ? "has-error" : '')}>
          <label id="senderIdLabel"
            className="col-sm-3 control-label" htmlFor="senderId">Sender's Id:</label>
          <div className="col-sm-9 col-lg-7">
            <input
              type="text"
              name="senderId"
              ref="senderId"
              id="senderId"
              className="form-control"
              placeholder="Needs 24 Digit Sender's Id"
              value={this.state.formData.senderId}
              onChange={this.submitHandler}
              required
              minLength="24"
            />
          </div>
          {this.state.errors && <div className="asterisk">{this.state.errors.senderId}</div>}
        </div>
        <div id="recipientId" className={"form-group " + (this.state.errors.recipientId ? "has-error" : '')}>
          <label id="recipientIdLabel" className="col-sm-3 control-label" htmlFor="recipientId">Recipient's Id:</label>
          <div className="col-sm-9 col-lg-7">
            <input
              type="text"
              name="recipientId"
              ref="recipientId"
              id="recipientId"
              className="form-control"
              placeholder="Needs 24 Digit Recipient's Id"
              value={this.state.formData.recipientId}
              onChange={this.submitHandler}
              required
              minLength="24"
            />
          </div>
          {this.state.errors && <div className="asterisk">{this.state.errors.recipientId}</div>}
        </div>
        <div id="message" className={"form-group " + (this.state.errors.message ? "has-error" : '')}>
          <label id="messageLabel" className="col-sm-3 control-label" htmlFor="message">Message:</label>
          <div className="col-sm-9 col-lg-7">
            <input
              type="text"
              name="message"
              ref="message"
              id="message"
              className="form-control"
              placeholder="Enter Message"
              value={this.state.formData.message}
              onChange={this.submitHandler}
              required
            />
          </div>
          {this.state.errors && <div className="asterisk">{this.state.errors.message}</div>}
        </div>
        {/* removing for brevity */}
      </React.Fragment>
    );
  }
}
export default MessagesDetail;
