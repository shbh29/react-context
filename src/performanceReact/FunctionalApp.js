import React,{ useCallback, useRef, useState } from "react";

function App() {
    const [messages, setMessages] = useState([]);

    const handleChange = (e) => {
        const {target: {value}} = e;
        setMessages([...messages, value]);
    }
  return (
    <>
      <h1>Functional Component</h1>
      <input type="text" onChange={handleChange}/>
      <MessageList messages={messages}/>
    </>
  );
}

function MessageList({messages}) {
    const onClick = useRef(() => {});
    return (
        <>
            <ul>
                {messages?.map(e => {
                    return <Message message={e} onClick={onClick}/>
                })}
            </ul>
        </>
    )
}
let count  = 1;
const Message  = React.memo(function Message({message}) {
    console.log(`message - ${message} ${count++}`);
    return (
        <li>{message}</li>
    )
});

export default App;