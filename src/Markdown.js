import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

let marked = require('marked');

marked.setOptions({
  breaks: true,
  gfm: true
})

const placeholder =
`## We could preview some markdown here. That could be cool.

_WOW AHMAZING_

# This is an h1
## This is an h2
[Not Zelda](#)

\`code\`

\`\`\`
const wow = 'heh';
\`\`\`

- This is a list item
- So is this
- One more for posterity

>  *Everything* is going according to **plan**.

![Github Markdown Cheat Sheet](https://farm6.staticflickr.com/5599/15576500626_b56732d883_b.jpg)

**bold text here**

carriage returns  
whoo    
`

class Markdown extends Component {
  state = {
    markdown: placeholder,
    theme: 'regular'
  }

  updateMarkdown(markdown) {
    this.setState({markdown})
  }

  changeTheme(theme) {
    console.log(theme)
    this.setState({theme})
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
              <DropdownButton
                id='dropdown-basic-button'
                title={this.state.theme}
                onChange={this.changeTheme.bind(this)}
              >
                <Dropdown.Item 
                  className={this.state.theme === 'regular' ? 'active' : ''}
                >
                  Regular
                </Dropdown.Item>
                <Dropdown.Item 
                  className={this.state.theme === 'dark' ? 'active' : ''}
                >
                  Dark
                </Dropdown.Item>
              </DropdownButton>
            </Dropdown>
          </h1>
          <FormGroup>
            <FormControl
              as='textarea'
              id='editor'
              onChange={
                event => (this.updateMarkdown(event.target.value))
              }
              rows='30'
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