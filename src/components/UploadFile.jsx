export function UploadFile({ onFileLoad }) {
  const handleChange = async (event) => {
    const file = event.target.files[0];

    if (!file) return;

    const text = await file.text();

    onFileLoad(text);
  };

  return (
    <div>
      <label>
        Upload puzzle file:
        <input type="file" accept=".txt" onChange={handleChange} />
      </label>
    </div>
  );
}