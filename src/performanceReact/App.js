import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
    };

    this._onMessageChange = this._onMessageChange.bind(this);
    this._getLastMessage = this._getLastMessage.bind(this);
  }
  _getLastMessage() {
    return this.state.messages ? this.state.messages[this.state.messages.length - 1] : "";
  }
  _onMessageChange(event) {
    const {
      target: { value },
    } = event;
    const { messages } = this.state;
    this.setState({ messages: [...messages, value] });
  }
  render() {
    return (
      <>
        <h1> Hello Shubham Performance React</h1>
        <input type="text" value={this._getLastMessage()} onChange={this._onMessageChange} />
        <MessageList messages={this.state.messages} />
      </>
    );
  }
}

class MessageList extends React.Component {
  render() {
    // console.log(messages);
    return (
      <>
        <ul>
          {this.props.messages.map((e) => {
            return <Message key={e} message={e}></Message>;
          })}
        </ul>
      </>
    );
  }
}

let count = 0;
class Message extends React.PureComponent {
  // shouldComponentUpdate(nextProps) {
  //   const {message: newProps} = nextProps;
  //   const {message: orginalProp} = this.props;
  //   return newProps !== orginalProp;
  // }
  render() {
    const {message} = this.props;
    console.log(`update count - ${count++} - ${message}`);
    return (
      <li key={message}>{message}</li>
    )
  }
  
}
