import React from "react";
import "./file-upload.css";

const FileUpload = () => {
  const [text, setText] = React.useState("");
  const [files, setFiles] = React.useState([]);
  const fileInputRef = React.useRef(null);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleFilesChange = (e) => {
    setFiles([...e.target.files]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = [...e.dataTransfer.files];
    setFiles(droppedFiles);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleFileUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="container" onDrop={handleDrop} onDragOver={handleDragOver}>
      <h3>Upload File(s) or Enter Text</h3>
      <textarea
        className="textarea"
        placeholder="Enter text here..."
        value={text}
        onChange={handleTextChange}
      />
      <input
        type="file"
        multiple
        ref={fileInputRef}
        onChange={handleFilesChange}
        className="input"
        style={{ display: "none" }}
      />
      <button type="button" onClick={handleFileUploadClick}>
        Upload File(s)
      </button>
      {files.length > 0 && (
        <div>
          <h4>Files to be uploaded:</h4>
          <ul>
            {files.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
