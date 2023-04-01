import React, { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { fromFetch } from "rxjs/fetch";
import FileList from "./FileList";
import "./FileViewer.scss";

const FileViewer: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<string>("");
  const [fileContent, setFileContent] = useState();

  const handleFileSelect = (file: string) => {
    setSelectedFile(file);
  };

  useEffect(() => {
    if (!selectedFile) {
      return;
    }

    const subscription = fromFetch(
      `/api/file-content/${selectedFile}`
    ).subscribe((response) => {
      return response.json().then((data) => setFileContent(data));
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [selectedFile]);

  return (
    <div>
      <FileList onFileSelect={handleFileSelect} />
      <SyntaxHighlighter class="json" language="json">
        {JSON.stringify(fileContent, null, 2)}
      </SyntaxHighlighter>
    </div>
  );
};

export default FileViewer;
