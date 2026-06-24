import { useState } from "react";

export function UploadFile({ onFileLoad }) {
  const [fileName, setFileName] = useState("");

  const handleChange = async (event) => {
    const file = event.target.files[0];

    if (!file) return;

    setFileName(file.name);

    const text = await file.text();
    onFileLoad(text);
  };

  return (
    <div className="upload-file">
      <label className="upload-label">
        <span className="upload-title">Upload puzzle file</span>
        <span className="upload-button">Choose .txt file</span>
        <input
          className="upload-input"
          type="file"
          accept=".txt"
          onChange={handleChange}
        />
      </label>

      <p className="upload-name">
        {fileName || "No file selected"}
      </p>
    </div>
  );
}