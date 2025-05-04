import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MarkdownRenderer1 from './MarkdownRenderer1';
import gfm from 'remark-gfm'; // Örnek bir plugin

function ChatAPI() {
  const [formData, setFormData] = useState('');
  const [responseData, setResponseData] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseData({});
    setLoading(true);

    let requestData = {
      chat: formData,
    };

    try {
      const response = await axios.post(
        'http://localhost:9000/chat',
        requestData
      );
      setResponseData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Chat API</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={formData}
          onChange={(e) => setFormData(e.target.value)}
          placeholder="Enter your message here..."
          rows="4"
          cols="50"
        />
        <br />
        <button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send'}
        </button>
      </form>
      <div style={{ marginTop: '20px' }}>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <MarkdownRenderer1
            markdown={responseData.text}
            remarkPlugins={[gfm]}
          />
        )}
      </div>
    </div>
  );
}

export default ChatAPI;
