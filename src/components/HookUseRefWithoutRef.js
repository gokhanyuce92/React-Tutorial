import React, { useState } from 'react';

function HookUseRefWithoutRef() {
  const [text, setText] = useState('');
  const onClickHandler = () => {
    setText('The quick brown fox jumps over the lazy dog');
    document.getElementById('focusTextarea').focus();
  };

  return (
    <div>
      <button onClick={onClickHandler}>ACTION</button>
      <label>Click on the action button to focus and populate the text.</label>
      <br />
      <textarea
        id="focusTextarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

export default HookUseRefWithoutRef;
