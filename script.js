const treeDiv = document.getElementById("tree");
const result = document.getElementById("result");
const sizeDiv = document.getElementById("sizes");

function renderTree(node, parent) {
    const item = document.createElement("div");
    item.textContent = (node.type === "folder" ? "📁 " : "📄 ") + node.name;
    item.className = node.type;

    parent.appendChild(item);

    if (node.type === "folder") {
        const childrenDiv = document.createElement("div");
        childrenDiv.className = "children";
        parent.appendChild(childrenDiv);

        item.onclick = () => {
            childrenDiv.style.display =
                childrenDiv.style.display === "none" ? "block" : "none";
        };

        node.children.forEach(child => renderTree(child, childrenDiv));
    }
}

renderTree(fileSystem, treeDiv);

// ---------------- DFS ANIMATION ----------------
async function dfsSearchStart() {
    clearUI();
    const target = searchInput.value;
    const found = await dfsAnimated(fileSystem, target);
    result.textContent = found ? "✅ Found using DFS" : "❌ Not Found (DFS)";
}

async function dfsAnimated(node, target) {
    highlightTemp(node.name);
    await delay(600);

    if (node.name === target) {
        highlightFinal(node.name);
        return true;
    }

    if (node.children) {
        for (let child of node.children) {
            if (await dfsAnimated(child, target)) return true;
        }
    }
    return false;
}

// ---------------- BFS ANIMATION ----------------
async function bfsSearchStart() {
    clearUI();
    const target = searchInput.value;
    const queue = [fileSystem];

    while (queue.length) {
        const node = queue.shift();
        highlightTemp(node.name);
        await delay(600);

        if (node.name === target) {
            highlightFinal(node.name);
            result.textContent = "✅ Found using BFS";
            return;
        }

        if (node.children) queue.push(...node.children);
    }
    result.textContent = "❌ Not Found (BFS)";
}

// ---------------- UTILITIES ----------------
function highlightTemp(name) {
    document.querySelectorAll(".file, .folder").forEach(el => {
        if (el.textContent.includes(name)) {
            el.classList.add("searching");
        }
    });
}

function highlightFinal(name) {
    document.querySelectorAll(".searching").forEach(e => e.classList.remove("searching"));
    document.querySelectorAll(".file, .folder").forEach(el => {
        if (el.textContent.includes(name)) {
            el.classList.add("highlight");
        }
    });
}

function clearUI() {
    document.querySelectorAll(".highlight,.searching").forEach(e => {
        e.classList.remove("highlight", "searching");
    });
    result.textContent = "";
}

function delay(ms) {
    return new Promise(res => setTimeout(res, ms));
}

// ---------------- SIZE & LARGEST FILE ----------------
function calculate() {
    sizeDiv.innerHTML = "Total Size: " + calculateSize(fileSystem) + " KB";
}

function calculateSize(node) {
    if (node.type === "file") return node.size;
    return node.children.reduce((sum, c) => sum + calculateSize(c), 0);
}

function largestFile() {
    let max = { size: 0 };
    findLargest(fileSystem, max);
    sizeDiv.innerHTML = `Largest File: ${max.name} (${max.size} KB)`;
}

function findLargest(node, max) {
    if (node.type === "file" && node.size > max.size) {
        max.name = node.name;
        max.size = node.size;
    }
    if (node.children) node.children.forEach(c => findLargest(c, max));
}
