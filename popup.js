const buttonLTE = document.getElementById("LTE");
const buttonETL = document.getElementById("ETL");
const word = document.getElementById("word");
var search = "";

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
    search = word.value
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
    search = word.value;
    chrome.tabs.create({
      url: "https://archives.nd.edu/cgi-bin/wordz.pl?english=" + word.value,
    });
  }
});
