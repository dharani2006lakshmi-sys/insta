// 📚 StudyVault - Application Logic (Complete)

// ── STATE ──────────────────────────────────────────
let currentPath = ["MAIN"];
let viewMode = "list";
let currentSort = "name";
let searchQuery = "";

// ── DOM REFS ───────────────────────────────────────
const backBtn       = document.getElementById("backBtn");
const breadcrumb    = document.getElementById("breadcrumb");
const searchInput   = document.getElementById("searchInput");
const listViewBtn   = document.getElementById("listViewBtn");
const gridViewBtn   = document.getElementById("gridViewBtn");
const sortSelect    = document.getElementById("sortSelect");
const content       = document.getElementById("content");
const loader        = document.getElementById("loader");
const folderTitle   = document.getElementById("folderTitle");
const itemCount     = document.getElementById("itemCount");
const tableHeader   = document.getElementById("tableHeader");
const pdfOverlay    = document.getElementById("pdfOverlay");
const pdfIframe     = document.getElementById("pdfIframe");
const pdfTitle      = document.getElementById("pdfTitle");
const pdfSubtitle   = document.getElementById("pdfSubtitle");
const closePdfBtn   = document.getElementById("closePdfBtn");
const pdfDownloadBtn= document.getElementById("pdfDownloadBtn");

// ── INIT ───────────────────────────────────────────
function init() {
    computeStats();
    buildSidebarSems();
    render();
    attachListeners();
}

// ── STATS ──────────────────────────────────────────
function computeStats() {
    let folders = 0, pdfs = 0, sems = 0;
    let totalMB = 0;

    function walk(node) {
        for (const [key, val] of Object.entries(node)) {
            if (val.type === "folder") {
                folders++;
                if (currentPath.length === 1 && key.startsWith("SEM")) sems++;
                if (val.children) walk(val.children);
            } else if (val.type === "pdf") {
                pdfs++;
                const sz = parseFloat(val.size) || 0;
                totalMB += sz;
            }
        }
    }

    const root = fileStructure["MAIN"]?.children || fileStructure;
    for (const key of Object.keys(root)) {
        if (key.toUpperCase().startsWith("SEM")) sems++;
    }
    walk(root);

    document.getElementById("statFolders").textContent = folders;
    document.getElementById("statPdfs").textContent = pdfs;
    document.getElementById("statSems").textContent = sems;
    document.getElementById("statSize").textContent = totalMB > 1024
        ? (totalMB/1024).toFixed(1) + " GB"
        : totalMB.toFixed(1) + " MB";
    document.getElementById("sidebarTotalCount").textContent = folders + pdfs;
}

function buildSidebarSems() {
    const container = document.getElementById("sidebarSemList");
    const root = fileStructure["MAIN"]?.children || fileStructure;
    const semEntries = Object.entries(root).filter(([k]) => k.toUpperCase().startsWith("SEM"));

    semEntries.forEach(([name]) => {
        const el = document.createElement("div");
        el.className = "nav-item";
        el.innerHTML = `<span class="nav-icon">📂</span> ${name}`;
        el.onclick = () => {
            currentPath = ["MAIN", name];
            render();
        };
        container.appendChild(el);
    });
}

// ── NAVIGATION ─────────────────────────────────────
function navigateHome() {
    currentPath = ["MAIN"];
    render();
}

function navigateTo(name) {
    currentPath.push(name);
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function navigateBack() {
    if (currentPath.length > 1) {
        currentPath.pop();
        render();
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
}

function navigateToBreadcrumb(index) {
    currentPath = currentPath.slice(0, index + 1);
    render();
}

// ── GET CURRENT NODE ───────────────────────────────
function getCurrentNode() {
    let node = fileStructure;
    for (const seg of currentPath) {
        if (!node[seg]) return null;
        const item = node[seg];
        if (item.type === "folder") {
            node = item.children || {};
        } else {
            node = item;
        }
    }
    return node;
}

// ── RENDER ─────────────────────────────────────────
function render() {
    // Breadcrumb
    renderBreadcrumb();

    // Back button
    backBtn.disabled = currentPath.length <= 1;

    // Folder title
    folderTitle.textContent = currentPath[currentPath.length - 1];

    // Get items
    const node = getCurrentNode();

    if (!node || typeof node !== "object") {
        content.innerHTML = `<div class="empty-state">
            <div class="empty-icon">⚠️</div>
            <div class="empty-title">Navigation error</div>
            <div class="empty-sub">Could not load this folder.</div>
        </div>`;
        return;
    }

    let items = Object.entries(node).map(([name, data]) => ({ name, ...data }));

    // Search filter
    if (searchQuery) {
        items = items.filter(i => i.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    // Sort
    items = sortItems(items);

    // Count
    itemCount.textContent = `${items.length} ${items.length === 1 ? "item" : "items"}`;

    // Table header visibility
    tableHeader.style.display = viewMode === "list" ? "grid" : "none";

    if (items.length === 0) {
        content.innerHTML = `<div class="empty-state">
            <div class="empty-icon">📂</div>
            <div class="empty-title">${searchQuery ? "No results found" : "Empty folder"}</div>
            <div class="empty-sub">${searchQuery ? `Nothing matches "${searchQuery}"` : "No files have been added yet."}</div>
        </div>`;
        return;
    }

    if (viewMode === "list") {
        renderList(items);
    } else {
        renderGrid(items);
    }
}

function renderBreadcrumb() {
    breadcrumb.innerHTML = "";
    currentPath.forEach((seg, i) => {
        const isLast = i === currentPath.length - 1;
        if (i > 0) {
            const sep = document.createElement("span");
            sep.className = "breadcrumb-sep";
            sep.textContent = "/";
            breadcrumb.appendChild(sep);
        }
        const item = document.createElement("span");
        item.className = "breadcrumb-item" + (isLast ? " current" : "");
        item.textContent = seg;
        if (!isLast) item.onclick = () => navigateToBreadcrumb(i);
        breadcrumb.appendChild(item);
    });
}

// ── LIST RENDER ────────────────────────────────────
function renderList(items) {
    const wrap = document.createElement("div");
    wrap.className = "items-list-view";

    items.forEach(item => {
        const el = document.createElement("div");
        el.className = `file-item ${item.type === "folder" ? "folder-item" : ""}`;

        const childCount = item.children ? Object.keys(item.children).length : null;

        el.innerHTML = `
            <div class="file-name-cell">
                <div class="file-type-icon ${item.type === "folder" ? "folder" : "pdf"}">
                    ${item.type === "folder" ? "📁" : "📄"}
                </div>
                <span class="file-name" title="${item.name}">${item.name}</span>
                ${item.type === "folder" ? `<span class="file-tag">${childCount ?? 0}</span>` : ""}
            </div>
            <div class="file-size">${item.size || (item.type === "folder" ? "—" : "—")}</div>
            <div class="file-date">${item.modified || "—"}</div>
            <div class="file-actions">
                ${item.type === "pdf" ? `<button class="file-action-btn download-btn" title="Download">⬇</button>` : ""}
                <button class="file-action-btn info-btn" title="Info">ℹ</button>
            </div>
        `;

        // Click to open
        el.addEventListener("click", (e) => {
            if (e.target.closest(".file-action-btn")) return;
            if (item.type === "folder") navigateTo(item.name);
            else openPDF(item);
        });

        // Download
        const dlBtn = el.querySelector(".download-btn");
        if (dlBtn) dlBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            triggerDownload(item.path, item.name);
        });

        wrap.appendChild(el);
    });

    content.innerHTML = "";
    content.appendChild(wrap);
}

// ── GRID RENDER ────────────────────────────────────
function renderGrid(items) {
    const wrap = document.createElement("div");
    wrap.className = "items-grid-view";

    items.forEach(item => {
        const el = document.createElement("div");
        el.className = "file-item-grid";

        el.innerHTML = `
            <div class="file-type-icon ${item.type === "folder" ? "folder" : "pdf"}">
                ${item.type === "folder" ? "📁" : "📄"}
            </div>
            <div class="file-name">${item.name}</div>
            <div class="file-meta">${item.size || (item.type === "folder" ? (item.children ? Object.keys(item.children).length + " items" : "—") : "—")}</div>
            ${item.type === "pdf" ? `<button class="grid-download-btn">⬇ Download</button>` : ""}
        `;

        el.addEventListener("click", (e) => {
            if (e.target.closest(".grid-download-btn")) return;
            if (item.type === "folder") navigateTo(item.name);
            else openPDF(item);
        });

        const dlBtn = el.querySelector(".grid-download-btn");
        if (dlBtn) dlBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            triggerDownload(item.path, item.name);
        });

        wrap.appendChild(el);
    });

    content.innerHTML = "";
    content.appendChild(wrap);
}

// ── SORT ───────────────────────────────────────────
function sortItems(items) {
    const folders = items.filter(i => i.type === "folder");
    const files = items.filter(i => i.type !== "folder");

    const cmp = (a, b) => {
        if (currentSort === "name") return a.name.localeCompare(b.name);
        if (currentSort === "date") return new Date(b.modified || 0) - new Date(a.modified || 0);
        return 0;
    };

    return [...folders.sort(cmp), ...files.sort(cmp)];
}

// ── PDF VIEWER ─────────────────────────────────────
function openPDF(item) {
    pdfTitle.textContent = item.name;
    pdfSubtitle.textContent = `${item.size || "PDF"} • Modified ${item.modified || "Unknown"}`;
    pdfIframe.src = item.path || "";
    pdfOverlay.classList.add("active");
    document.body.style.overflow = "hidden";

    pdfDownloadBtn.onclick = () => triggerDownload(item.path, item.name);
}

function closePDF() {
    pdfOverlay.classList.remove("active");
    pdfIframe.src = "";
    document.body.style.overflow = "";
}

// ── DOWNLOAD ───────────────────────────────────────
function triggerDownload(path, name) {
    if (!path) return;
    const a = document.createElement("a");
    a.href = path;
    a.download = name.endsWith(".pdf") ? name : name + ".pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// ── EVENT LISTENERS ────────────────────────────────
function attachListeners() {
    backBtn.addEventListener("click", navigateBack);

    searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value.trim();
        render();
    });

    listViewBtn.addEventListener("click", () => {
        viewMode = "list";
        listViewBtn.classList.add("active");
        gridViewBtn.classList.remove("active");
        render();
    });

    gridViewBtn.addEventListener("click", () => {
        viewMode = "grid";
        gridViewBtn.classList.add("active");
        listViewBtn.classList.remove("active");
        render();
    });

    sortSelect.addEventListener("change", (e) => {
        currentSort = e.target.value;
        render();
    });

    closePdfBtn.addEventListener("click", closePDF);

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closePDF();
    });
}

// ── START ──────────────────────────────────────────
window.navigateHome = navigateHome;
init();
