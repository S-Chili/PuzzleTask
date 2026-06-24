import { useState } from 'react'
import { UploadFile } from "./components/UploadFile";
import { parseFile } from "./utils/parseFile";
import { buildGraph } from "./utils/buildGraph";
import { findBestPath } from "./utils/findLongestPath";
import { buildResultString } from "./utils/buildResultString";
import './App.css'

function App() {
  const [fragments, setFragments] = useState([]);
const [bestPath, setBestPath] = useState([]);
  const [error, setError] = useState("");
  
  const handleFileLoad = (text) => {
  const parsedLines = parseFile(text);

  setFragments(parsedLines);
  setBestPath([]);
  setError("");
  };
  
  const handleFindSequence = () => {
  if (fragments.length === 0) {
    setError("Please upload a file first.");
    return;
  }

  setError("Calculating...");

  setTimeout(() => {
    const graph = buildGraph(fragments);
    const path = findBestPath(graph);

    setBestPath(path);
    setError("");
  }, 0);
};


  return (
    <>
      <UploadFile onFileLoad={handleFileLoad} />

<button onClick={handleFindSequence}>
  Find sequence
</button>

<p>Fragments loaded: {fragments.length}</p>

{error && <p>{error}</p>}

{bestPath.length > 0 && (
  <div>
    <h2>Best path</h2>
    <p>{bestPath.join(" → ")}</p>

    <h2>Result</h2>
    <p>{buildResultString(bestPath)}</p>
  </div>
      )}
      </>
  )
}

export default App
