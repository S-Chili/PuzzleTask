import { useState } from 'react'
import { UploadFile } from "./components/UploadFile";
import { parseFile } from "./utils/parseFile";
import { buildGraph } from "./utils/buildGraph";
import { findBestPath } from "./utils/findLongestPath";
import { buildResultString } from "./utils/buildResultString";
import { PuzzleBoard } from "./components/PuzzleBoard";
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
  <main className="container">
    <header className="app-header">
      <h1 className="app-title">Digital Puzzle Solver</h1>
      <p className="app-subtitle">
        Upload a file with numeric fragments and find the longest valid sequence.
      </p>
    </header>

    <section className="panel">
      <div className="upload-row">
        <UploadFile onFileLoad={handleFileLoad} />
      </div>

      <button onClick={handleFindSequence}>Find sequence</button>

      <p className="stats">Fragments loaded: {fragments.length}</p>
      {error && <p className="error">{error}</p>}
    </section>

    {bestPath.length > 0 && (
        <section className="panel">
          <h2 className="section-title">Result</h2>
          <p className="result-box">{buildResultString(bestPath)}</p>
           <p className="stats">Fragments in path: {bestPath.length}</p>
        <h2 className="section-title">Best path</h2>

        <PuzzleBoard fragments={bestPath} />

       

        
      </section>
    )}
  </main>
);
}

export default App
