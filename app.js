let root, current;
let historyStack = [];
let starred = JSON.parse(localStorage.getItem("starred")) || [];
let currentPDF = "";

fetch("files.json")
.then(res => res.json())
.then(data => {
  root = data;
  current = data;
  render();
});

function render(list = current.children) {
  document.getElementById("path").innerText = getPath();
  const content = document.getElementById("content");
  content.innerHTML = "";

  list.forEach(item => {
    const div = document.createElement("div");
    div.className = "card";

    const isStarred = starred.find(s => s.name === item.name);

    const star = document.createElement("div");
    star.className = "star";
    star.innerText = isStarred ? "⭐" : "☆";
    star.onclick = (e) => toggleStar(e, item);

    div.innerHTML = `
      <h3>${item.type==="folder"?"📁":"📄"}</h3>
      <p>${item.name}</p>
    `;

    div.appendChild(star);
    div.onclick = () => openItem(item);

    content.appendChild(div);
  });
}

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

function searchFiles(){
  const q=document.getElementById("search").value.toLowerCase();
  let results=[];

  function scan(n){
    if(n.type==="file"){
      if(
        n.name.toLowerCase().includes(q) ||
        (n.tags && n.tags.join(" ").includes(q))
      ){
        results.push(n);
      }
    }
    if(n.children) n.children.forEach(scan);
  }

  scan(root);

  const suggestions = document.getElementById("suggestions");
  suggestions.innerHTML = results.slice(0,5).map(r =>
    `<div onclick="openPDF('${r.url}')">${r.name}</div>`
  ).join("");

  render(results.length ? results : current.children);
}

function toggleStar(e,item){
  e.stopPropagation();

  const index = starred.findIndex(s => s.name === item.name);

  if(index>-1){
    starred.splice(index,1);
  } else {
    starred.push(item);
  }

  localStorage.setItem("starred",JSON.stringify(starred));
  render();
}

function showStarred(){
  render(starred);
}

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

/* Chatbot */
function handleChat(e){
  if(e.key==="Enter"){
    const input=e.target.value.toLowerCase();

    addMessage("You: " + input);

    let results=[];

    function scan(n){
      if(n.type==="file"){
        if(
          n.name.toLowerCase().includes(input) ||
          (n.tags && n.tags.join(" ").includes(input))
        ){
          results.push(n);
        }
      }
      if(n.children) n.children.forEach(scan);
    }

    scan(root);

    if(results.length){
      addMessage("Bot: Found " + results.length + " files");
      render(results);
    } else {
      addMessage("Bot: No results found");
    }

    e.target.value="";
  }
}

function addMessage(msg){
  const box=document.getElementById("chatMessages");
  box.innerHTML += `<div>${msg}</div>`;
  box.scrollTop = box.scrollHeight;
}
