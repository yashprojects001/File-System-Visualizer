# 📂 File System Visualizer

A **visual simulation of an operating system’s file system**, built using **pure HTML, CSS, and JavaScript**.  
This project demonstrates how files and folders are stored internally using **tree data structures** and how common operations like **file searching** and **disk usage calculation** work.

---

## 🎯 Objective

The main objective of this project is to **visualize core OS and Data Structure concepts** instead of treating files as plain lists.

It helps in understanding:
- How directories form a tree structure
- How file search works internally
- How disk space is calculated recursively

---

## ✨ Features

- 📁 **Directory Tree Visualization**
  - Displays folders and files in a hierarchical structure
  - Mimics a real operating system file explorer

- 🔽 **Expand / Collapse Folders**
  - Click on a folder to expand or collapse its contents

- 🔍 **File Search (DFS Based)**
  - Search for files by name
  - Uses **Depth First Search (DFS)**
  - Highlights the searched file visually

- 📊 **Disk Usage Calculation**
  - Calculates total disk usage
  - Uses recursive traversal of the tree

- 🏆 **Largest File Finder**
  - Finds and displays the largest file in the system

---

## 🧠 Concepts Demonstrated

| Concept | Description |
|------|------------|
Tree Data Structure | Folder hierarchy |
Recursion | Traversing directories |
Depth First Search (DFS) | File search logic |
Stacks (conceptual) | Path traversal |
Disk usage logic | Size aggregation |

---

## 🛠 Technologies Used

- HTML  
- CSS  
- JavaScript (Vanilla)

No frameworks, no libraries — everything is implemented from scratch.

---

## 📁 Project Structure

file-system-visualizer/
│
├── index.html
├── style.css
├── data.js
└── script.js

---

## 📄 File Description

### `index.html`
- Defines the structure of the application
- Contains containers for directory tree, search, and analytics

### `style.css`
- Handles layout and styling
- Folder, file, and highlight styles

### `data.js`
- Stores a **virtual file system**
- Represents folders and files using a tree object

### `script.js`
- Renders the directory tree
- Implements DFS search
- Calculates disk usage recursively
- Handles folder expand/collapse logic

---
