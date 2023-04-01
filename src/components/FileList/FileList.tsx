import React, { useEffect, useState } from "react";
import { fromFetch } from "rxjs/fetch";

interface Props {
  onFileSelect: (file: string) => void;
}

const FileList: React.FC<Props> = ({ onFileSelect }) => {
  const [files, setFiles] = useState<string[]>([]);
  const [selectedFile] = useState<string>("");

  useEffect(() => {
    const subscription = fromFetch("/api/files").subscribe((response) =>
      response.json().then((data) => setFiles(data))
    );

    return () => subscription.unsubscribe();
  }, []);

  const handleFileSelect = ({
    target,
  }: React.ChangeEvent<HTMLSelectElement>) => {
    onFileSelect(target.value);
  };

  return (
    <div>
      <label htmlFor="file-select">Select a file:</label>
      <select id="file-select" onChange={handleFileSelect} value={selectedFile}>
        {files.map((file) => (
          <option key={file} value={file}>
            {file}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FileList;
