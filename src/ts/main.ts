window.addEventListener("DOMContentLoaded", main);

function main() {
  const desktopShareButton = document.getElementById("desktopShareButton");
  const desktopShareWindow = document.getElementById("desktopShareWindow");
  const movilShareButton = document.getElementById("movilShareButton");
  const movilShareWindow = document.getElementById("movilShareWindow");
  if (!desktopShareButton || !movilShareButton || !desktopShareWindow || !movilShareWindow) return;

  document.addEventListener("click", (e) => {
    // @ts-ignore
    if ((desktopShareButton.contains(<HTMLElement>e.target) || desktopShareWindow.contains(<HTMLElement>e.target)) && !(e.target.nodeName == "IMG")) {
      desktopShareButton.dataset.active = "true";
    // @ts-ignore
    } else if ((movilShareButton.contains(<HTMLElement>e.target) || movilShareWindow.contains(<HTMLElement>e.target)) && !(e.target.nodeName == "IMG")) {
      movilShareButton.dataset.active = "true";
    } else {
      desktopShareButton.dataset.active = "false";
      movilShareButton.dataset.active = "false";
    }
  });
}