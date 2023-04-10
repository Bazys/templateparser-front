import { ChangeEvent, Component } from "react";
import "./TemplateEditor.scss";

interface templateProps {
  onSubmit: (text: string) => void;
}

type templateState = {
  text: string;
};

class TemplateEditor extends Component<templateProps, templateState> {
  state: templateState = { text: "" };
  handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ text: event.target.value });
  };
  parseClick = () => {
    this.props.onSubmit(this.state.text);
  };

  render() {
    return (
      <div className="TemplateEditor">
        <textarea
          className="TemplateEditor-textarea"
          title="code"
          onChange={this.handleChange}
          value={this.state.text}
        ></textarea>
        <button title="Parse" type="button" onClick={this.parseClick}>
          Parse
        </button>
      </div>
    );
  }
}

export default TemplateEditor;
