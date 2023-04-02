import { FC } from "react";
import "./App.scss";
import FileViewer from "./components/FileViewer";
import TemplateEditor from "./components/TemplateEditor";

const App: FC = () => {
  return (
    <div className="App">
      <FileViewer />
      <TemplateEditor />
    </div>
  );
};

export default App;
