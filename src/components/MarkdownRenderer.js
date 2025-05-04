import React from 'react';
import ReactMarkdown from 'react-markdown';

function MarkdownRenderer({ markdown }) {
  if (!markdown) {
    return null;
  }
  return <ReactMarkdown>{markdown}</ReactMarkdown>;
}

export default MarkdownRenderer;
