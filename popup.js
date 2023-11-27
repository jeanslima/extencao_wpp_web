const modifyBackgroundColor = () => {
  const elementsWithClass = document.querySelectorAll(".piscar");

  elementsWithClass.forEach(function (element) {
    element.style.color = "#e68619";
    element.style.fontSize = "28px";
    element.style.marginTop = "5px";
    element.style.marginRight = "10px";
  });
};

window.addEventListener("load", async (event) => {
  event.preventDefault();

  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: modifyBackgroundColor,
  });
});
