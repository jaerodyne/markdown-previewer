import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';
import Dropdown from 'react-bootstrap/Dropdown';

let marked = require('marked');

const placeholder =
`## We could preview some markdown here. That could be cool.

_WOW AHMAZING_

<h1>This is an h1</h1>
<h2>This is an h2</h2>
<a href='#'>Not Zelda</a>

\`code\`

\`\`\`
const wow = 'heh';
\`\`\`

- This is a list item
- So is this
- One more for posterity

>  *Everything* is going according to **plan**.

<img src='https://farm6.staticflickr.com/5599/15576500626_b56732d883_b.jpg' alt='Github Markdown Cheat Sheet'>

**bold text here**
`

class Markdown extends Component {
  state = {
    markdown: placeholder
  }

  updateMarkdown(markdown) {
    this.setState({markdown})
  }

  render() {
    let markdown = this.state.markdown;

    return (
      <Row
        style={{
          margin: '5em'
        }}
      >
        <Col sm={6}>
          <h1>
            Markdown Editor
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Theme
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Regular</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Dark</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </h1>
          <FormGroup>
            <FormControl
              as='textarea'
              id='editor'
              onChange={
                event => (this.updateMarkdown(event.target.value))
              }
              rows='20'
              value={markdown}
            >
            </FormControl>
          </FormGroup>
        </Col>
        <Col sm={6}>
          <h1>Markdown Output</h1>
          <div
            dangerouslySetInnerHTML = {{
              __html: marked(markdown)
            }}
            id='preview'
          >
          </div>
        </Col>
      </Row>
    );
  }
}

export default Markdown;