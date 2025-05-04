import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownRenderer1 = ({ markdown, remarkPlugins = [] }) => {
  const [error, setError] = useState(null);
  const [renderedMarkdown, setRenderedMarkdown] = useState(null);

  useEffect(() => {
    try {
      setRenderedMarkdown(
        <ReactMarkdown remarkPlugins={remarkPlugins}>{markdown}</ReactMarkdown>
      );
    } catch (err) {
      setError(err);
    }
  }, [markdown, remarkPlugins]);

  if (error) {
    return <div>Markdown rendering error: {error.message}</div>;
  }

  return <div>{renderedMarkdown}</div>;
};

export default MarkdownRenderer1;
