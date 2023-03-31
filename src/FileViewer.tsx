import React, { useEffect, useState } from "react";
import { fromFetch } from "rxjs/fetch";
import FileList from "./FileList";

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
      <pre>{JSON.stringify(fileContent, null, "\t")}</pre>
    </div>
  );
};

export default FileViewer;
