import React, { Component } from 'react';

class MarkdownEditor extends Component {
  defaultMarkdown() {
    return(
      `
      <div>
        <h1>Wow</h1>
        <h2>Wow</h2>
        <a href='#'>Hee</a>
      </div>
      `
    )
  }

  render() {
    return (
      <div
        style={{
          width: '500px'
        }}
      >
        <h1>Markdown Editor</h1>
        <textarea
          id='editor'
          defaultValue={this.defaultMarkdown()}
          style={{
            height: '300px',
            width: '500px'
          }}
        >
        </textarea>
      </div>
    );
  }
}

export default MarkdownEditor;