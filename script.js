let fullText = "";

fetch("./docs/week7-13-steps.txt")
  .then(res => res.text())
  .then(data => {
    fullText = data;
    document.getElementById("content").textContent = data;
  });

function copyText() {
  navigator.clipboard.writeText(fullText)
    .then(() => {
      alert("Copied entire document ✅");
    });
}