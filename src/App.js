import { useState } from 'react'
import marked from 'marked'
import './App.css'
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

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------ | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
`;

function APP() {
    const [ markdownText, setMarkdownText ] = useState(placeholder);
    const [ previewText, setPreviewText ] = useState(marked(markdownText));
    function handleChange(e){
      setMarkdownText(e.target.value);
      setPreviewText(marked(e.target.value));
    }
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <h1 className="text-center p-4 display-2">
              MarkDown-Previewer &nbsp;
              <span><img className="md_img align-items-center" src="https://cms-assets.tutsplus.com/uploads/users/31/posts/20764/preview_image/markdown.jpg" 
                    alt="markdown_image" /></span>
              <hr></hr>
            </h1>
            
          </div>
          
          <div className="row">
            
            <div className="col-md-6">
              <h1 className="text-center p-1">
                Editor
              </h1>
              
           <div className="mark-input">
             <textarea id="editor"
               className="input p-2" 
               style={{height:"60vh",
                 width:"100%"}}
               value={markdownText}
               onChange={handleChange}
               ></textarea>
           </div>   
              
            </div>
  
            <div className="col-md-6">
              <h1 className="text-center p-1">
                Preview
              </h1>
            <div className="mark-input  border border-dark">
             <div id="preview" className="p-2"
               style={{minHeight:"60vh",
                        height:"60vh",
                      width:"100%"}}
              dangerouslySetInnerHTML={{__html:previewText}}
               >    
             </div>
           </div>
            </div>
            
          </div>
        </div>
        
      </div>
    )
}

export default APP