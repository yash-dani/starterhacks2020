document.getElementById("Scotiabank").onclick = function () {
    //location.href = "https://www.scotiabank.com/ca/en/personal.html";
    window.open(
      'https://www.scotiabank.com/ca/en/personal.html',
      '_blank'
    )
};

chrome.browserAction.setIcon({
              path : "/UI/Icons/default_icon.png"
            });
          