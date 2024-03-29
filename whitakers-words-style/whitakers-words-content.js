const main = document.getElementsByTagName("body")[0];
const head = document.getElementsByTagName("head")[0];
const title = document.getElementsByTagName("a")[0];

// errors
function noText() {
  var notification = new Notification("error", {
    icon: "https://github.com/cqb13/William-Whitakers-Words-EXT/blob/main/images/icon128.png?raw=true",
    body: "text not found | enter a word",
  });
  notification.onclick = function () {
    notification.close();
  };
}

function tooMany() {
  var notification = new Notification("error", {
    icon: "https://github.com/cqb13/William-Whitakers-Words-EXT/blob/main/images/icon128.png?raw=true",
    body: "only one word can be translated",
  });
  notification.onclick = function () {
    notification.close();
  };
}

chrome.storage.sync.get("mode", function (data) {
  if (data.mode == true) {
    main.classList.toggle("light-mode");
  }
});

function openTab(url) {
  if (word.value == "") {
    noText();
  } else {
    window.location.replace(url);
  }
}

head.insertAdjacentHTML(
  "afterbegin",
  `
    <link rel="icon" href="https://raw.githubusercontent.com/cqb13/William-Whitakers-Words-EXT/main/images/icon.png" />
  `
);

main.insertAdjacentHTML(
  "afterbegin",
  `
      <h1 align="center">
          <a href="https://github.com/cqb13/William-Whitakers-Words-EXT">${title.innerHTML}</a>
      </h1>
      <div class="search">
        <input id="word" type="entry" placeholder="Enter a word" />
      </div>
      <div class="options">
        <input id="LTE-W" type="button" value="Latin to English" />
        <input id="ETL-W" type="button" value="English to Latin" />
      </div>
      `
);

main.insertAdjacentHTML(
  "afterend",
  `
    <div class="footer" id="bottom">
        <div class="footerInfo">
            <span>William Whitakers Words | Edited By: cqb13</span>
        </div>
        <div class="footerLinks">
            <a class="footerLink" href="https://github.com/cqb13" alt="Vist my github"><svg class="footerIcon" alt="GitHub" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg></a>
        </div>
    </div>
    `
);

// needs to be here, or it wont work
const buttonLTE = document.getElementById("LTE-W");
const buttonETL = document.getElementById("ETL-W");

// Latin to English
buttonLTE.addEventListener("click", function () {
  url = "http://www.archives.nd.edu/cgi-bin/wordz.pl?keyword=" + word.value;
  openTab(url);
});

// English to Latin
buttonETL.addEventListener("click", function () {
  url = "https://archives.nd.edu/cgi-bin/wordz.pl?english=" + word.value;
  if (word.value.indexOf(" ") >= 0) {
    tooMany();
  }
  openTab(url);
});
