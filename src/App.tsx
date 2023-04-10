import { Component } from "react";
import "./App.scss";
import FileViewer from "./components/FileViewer";
import TemplateEditor from "./components/TemplateEditor";

interface Props {}

type State = {
  json: string;
  template: string;
};

class App extends Component<Props, State> {
  state: Readonly<State> = {
    json: "",
    template: "",
  };
  submit = (text: string) => {
    this.setState({ template: text });
  };
  render() {
    return (
      <div className="App">
        <FileViewer />
        <TemplateEditor onSubmit={this.submit} />
      </div>
    );
  }
}

export default App;
