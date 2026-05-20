// 🔑 YOUR SUPABASE CONFIG
const SUPABASE_URL = "https://zzgqpgdfanyviabhzypk.supabase.co";
const SUPABASE_KEY = "sb_publishable_R_qrpmmg_Sww2MT1fE4TLw_Hoksy20R";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

let root, current;
let historyStack = [];
let currentPDF = "";

// 🚀 LOAD DATA FROM SUPABASE
async function loadFiles() {
  const { data, error } = await supabaseClient.from("files").select("*");

  if (error) {
    console.error(error);
    alert("Error loading data");
    return;
  }

  root = buildTree(data);
  current = root;
  render();
}

loadFiles();

// 🌳 BUILD TREE
function buildTree(data) {
  let map = {};
  data.forEach(i => map[i.id] = {...i, children: []});

  let root = { name: "MAIN", children: [] };

  data.forEach(i => {
    if (i.parent) {
      map[i.parent].children.push(map[i.id]);
    } else {
      root.children.push(map[i.id]);
    }
  });

  return root;
}

// 🎨 RENDER UI
function render(list = current.children) {
  document.getElementById("path").innerText = getPath();
  const content = document.getElementById("content");
  content.innerHTML = "";

  list.forEach(item => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <h3>${item.type==="folder"?"📁":"📄"}</h3>
      <p>${item.name}</p>
    `;

    div.onclick = () => openItem(item);
    content.appendChild(div);
  });
}

// 📂 NAVIGATION
function getPath() {
  return historyStack.map(f => f.name).join(" / ") + " / " + current.name;
}

function openItem(item) {
  if (item.type==="folder") {
    historyStack.push(current);
    current=item;
    render();
  } else {
    openPDF(item.url);
  }
}

function goBack(){
  if(historyStack.length){
    current=historyStack.pop();
    render();
  }
}

function goHome(){
  current=root;
  historyStack=[];
  render();
}

// ➕ ADD FOLDER
async function addFolder() {
  const name = prompt("Enter folder name:");
  if (!name) return;

  const { error } = await supabaseClient.from("files").insert([
    { name: name, type: "folder", parent: current.id || null }
  ]);

  if (error) {
    alert("Error adding folder");
    return;
  }

  loadFiles();
}

// 📤 UPLOAD PDF
async function uploadPDF(e) {
  const file = e.target.files[0];
  if (!file) return;

  const fileName = Date.now() + "_" + file.name;

  const { error: uploadError } = await supabaseClient.storage
    .from("pdf")
    .upload(fileName, file);

  if (uploadError) {
    alert("Upload failed");
    console.error(uploadError);
    return;
  }

  const url = `${SUPABASE_URL}/storage/v1/object/public/pdf/${fileName}`;

  const { error: dbError } = await supabaseClient.from("files").insert([
    {
      name: file.name,
      type: "file",
      url: url,
      parent: current.id || null
    }
  ]);

  if (dbError) {
    alert("Database error");
    return;
  }

  loadFiles();
}

// 📄 PDF VIEW
function openPDF(url){
  currentPDF = url;
  document.getElementById("pdfModal").style.display="block";
  document.getElementById("pdfFrame").src=url;
}

function closeModal(){
  document.getElementById("pdfModal").style.display="none";
}

function downloadPDF(){
  window.open(currentPDF);
}

function sharePDF(){
  navigator.clipboard.writeText(currentPDF);
  alert("Link copied!");
}

// 🔍 SEARCH
function searchFiles(){
  const q=document.getElementById("search").value.toLowerCase();
  let results=[];

  function scan(n){
    if(n.type==="file" && n.name.toLowerCase().includes(q)) results.push(n);
    if(n.children) n.children.forEach(scan);
  }

  scan(root);
  render(results);
}
