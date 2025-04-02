import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function SpeechCraftingTool() {
  const [text, setText] = useState('');

  return (
    <section id="speech-crafting">
      <h2>Speech Crafting Tool</h2>
      <ReactQuill
        theme="snow"
        value={text}
        onChange={setText}
        placeholder="Start crafting your speech here..."
      />
    </section>
  );
}

export default SpeechCraftingTool;