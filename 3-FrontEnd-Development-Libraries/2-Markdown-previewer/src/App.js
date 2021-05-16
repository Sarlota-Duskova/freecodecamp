import './App.css';
import React from "react";
import marked from 'marked';

const projectName = "markdown-previewer"
const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

//Line breaks with return button
marked.setOptions({
  breaks: true
});

//Inserts target="_blank" into href tags (It is required for codepen links)
const renderer = new marked.Renderer;
renderer.link = function(href, text) {
  return `<a target="_blank" href="${href}">${text}` + '</a>';
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: placeholder
    //  editorMaximized: false,
   //   previewMaximized: false
    }; //End of super(props)
    
    this.handleChange = this.handleChange.bind(this);
  //  this.handleEditorMaximized() = this.handleEditorMaximized.bind(this);
  //  this.handlePreviewMaximized() = this.handlePreviewMaximized.bind(this);
  } //End of constructor(props)
  
  handleChange(e)
 {
   this.setState({
     markdown: e.target.value
   });
 }
    /*
  handleEditorMaximized() {
    this.setState({
      editorMaximized: !this.state.editorMaximized
    });
  }

  handlePreviewMaximized() {
    this.setState({
      previewMaximized: !this.state.previewMaximized
    });
  }
*/
  render(){
  //  const classes = this.state.editorMaximized ? []
    return(
     // /*
      <div className="container">
        <h1 className="text-center">Convert your Markdown</h1>
        <div className="row">
          <div className="col-5">
            <textarea id="editor" value={this.state.markdown} onChange={this.handleChange} className="form-control"> 
            </textarea>
          </div>
        </div>
        <div className="row">
          <div className="col-8 preview rounded" id="preview"
            dangerouslySetInnerHTML={{
              __html: marked(this.state.markdown)
            }}
            >       
          </div>
        </div>
      </div>

    ); //End of return
  } //End of render
} //End of class App
//ReactDOM.render(<App />, document.getElementById('app'));

export default App;
