import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MarkdownRenderer from './MarkdownRenderer';

function ChatAPI1() {
  const [chatInput, setChatInput] = useState('');
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSendRequest = () => {
    let requestData = {
      chat: chatInput,
    };

    setLoading(true);
    axios
      .post('http://localhost:9000/chat', requestData)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  };

  return (
    <div>
      <h1>Chat API</h1>
      <input
        type="text"
        value={chatInput}
        onChange={(e) => setChatInput(e.target.value)}
      />

      <button onClick={handleSendRequest}>Send</button>
      {loading ? <p>Loading...</p> : <MarkdownRenderer markdown={data.text} />}
    </div>
  );
}

export default ChatAPI1;
