import React from 'react';
import { useParams } from 'react-router-dom';

function HookUseParams() {
  let { id } = useParams();
  return id ? <p>Page ID: {id}</p> : <p>No Page ID provided</p>;
}

export default HookUseParams;
