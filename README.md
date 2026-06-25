# Digital Puzzle Solver

Digital Puzzle Solver is a React application that solves a digital puzzle by finding the longest valid sequence of numeric fragments.

The application allows users to upload a `.txt` file containing six-digit fragments, automatically builds connections between them, and generates the longest possible sequence where each fragment is used only once.

## 🚀 Live Demo

👉 [Click here to try the app](https://s-chili.github.io/PuzzleTask/)

## Features

* Upload `.txt` files with puzzle fragments
* Parse and validate input data
* Build connections between fragments
* Find the longest valid sequence
* Prevent fragment reuse and cyclic paths
* Visualize the resulting sequence as puzzle pieces
* Generate the final combined result

## Demo Workflow

1. Upload a `.txt` file containing puzzle fragments
2. Click **Find Sequence**
3. The application:

   * parses the file
   * builds a graph of possible connections
   * finds the longest valid path
   * displays the resulting sequence
   * generates the final combined string

## Technologies

* React
* Vite
* JavaScript (ES6+)
* CSS

## Algorithm

Each fragment is represented as a graph node.

A connection between two fragments exists when:

* the last two digits of the first fragment
* match the first two digits of the second fragment

The application builds a directed graph and performs recursive graph traversal to find the longest valid path.

A `visited` set is used to:

* prevent cycles
* ensure each fragment is used only once

## Installation

```bash
npm install
npm run dev
```

## Design

The user interface is inspired by modern SaaS applications and presents the resulting sequence as interconnected puzzle pieces.

## References

The project was developed using official documentation and learning resources:

* React Documentation
* MDN Web Docs
* Vite Documentation

## Notes

The solution prioritizes readability, maintainability, and explainability over aggressive optimization.

For larger datasets, sequence generation may require additional processing time.
