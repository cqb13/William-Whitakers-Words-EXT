const buttonLTE = document.getElementById("LTE");
const buttonETL = document.getElementById("ETL");
const viewMode = document.getElementById("view-mode");
const word = document.getElementById("word");
var lightMode = false;

// errors
const error = {
  type: "basic",
  iconUrl: "/images/icon128.png",
  title: "error",
  message: "text not found | enter a word",
};

const tooMany = {
  type: "basic",
  iconUrl: "/images/icon128.png",
  title: "error",
  message: "can only searches one word",
};

// Latin to English
buttonLTE.addEventListener("click", function () {
  if (word.value == "") {
    chrome.notifications.create(error);
  } else {
    chrome.tabs.create({
      url: "http://www.archives.nd.edu/cgi-bin/wordz.pl?keyword=" + word.value,
    });
  }
});

// English to Latin
buttonETL.addEventListener("click", function () {
  if (word.value == "") {
    chrome.notifications.create(error);
  } else {
    if (word.value.indexOf(" ") >= 0) {
      chrome.notifications.create(tooMany);
    }
    chrome.tabs.create({
      url: "https://archives.nd.edu/cgi-bin/wordz.pl?english=" + word.value,
    });
  }
});

// Light / Dark mode
viewMode.addEventListener("click", function () {
  if (lightMode == false) {
    lightMode = true;
    viewMode.value = "Dark Mode";
  } else {
    lightMode = false;
    viewMode.value = "Light Mode";
  }
  toggleViewMode();
});

function toggleViewMode() {
  document.getElementsByTagName("body")[0].classList.toggle("light-mode");
  buttonETL.classList.toggle("light-mode-border");
  buttonLTE.classList.toggle("light-mode-border");
  viewMode.classList.toggle("light-mode-border");
  word.classList.toggle("light-mode-border");
}
