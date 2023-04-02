import { EditorState } from "draft-js";
import { Component } from "react";
import "./TemplateEditor.scss";

class TemplateEditor extends Component {
  state = { editorState: EditorState.createEmpty() };
  onChange = (editorState: EditorState) => this.setState({ editorState });

  render() {
    return (
      <div className="TemplateEditor">
        <textarea className="TemplateEditor-textarea" title="code"></textarea>
        <button title="Parse" type="button">
          Parse
        </button>
      </div>
    );
  }
}

export default TemplateEditor;
