import React, { Component } from 'react'
import 'react-quill/dist/quill.snow.css'


class React_Quill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value) {
    this.setState({
      text: value
    })
  }

  modules = {
    toolbar: [
      // [{'sticky_toolbar': true}]
      [ { 'header': [ 1, 2, 3, 4, 5, 6, false ] } ],
      [ 'bold', 'italic', 'underline' ],
      [ { 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' } ],
      [ { 'color': [] }, { 'background': [] } ],
      [ 'link' ], [ 'emoji' ], [ 'code-block' ]
    ],
  }

  formats = [
    'header',
    'bold', 'italic', 'underline',
    'list', 'bullet', 'indent',
    'color', 'size', 'link', 'code-block'
  ]



  render() {
    return (
      <div className='editor'>
        <p>Hello World</p>
        <p>some initial <strong>bold</strong> text</p>
        <p><br></br></p>
        <ReactQuill
          theme="snow"
          value={ this.state.text }
          onChange={ this.handleChange }
          modules={ this.modules }
          formats={ this.formats }
        />
      </div>
    );
  }
}

export default React_Quill;
