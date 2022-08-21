var buttonLTE = document.getElementById("LTE");
var buttonETL = document.getElementById("ETL");
var word = document.getElementById("word");

// errors
const error = {
    type: "basic",
    iconUrl: "/images/icon128.png",
    title: "error",
    message: "text not found | enter a word",
}

const tooMany = {
    type: "basic",
    iconUrl: "/images/icon128.png",
    title: "error",
    message: "can only searches one word",
}

// Latin to English
buttonLTE.addEventListener("click", function(){
    if (word.value == ""){
        chrome.notifications.create(error);
    } else { 
        chrome.tabs.create({url:"http://www.archives.nd.edu/cgi-bin/wordz.pl?keyword=" + word.value});
    }
});

// English to Latin
buttonETL.addEventListener("click", function(){
    if (word.value == ""){
        chrome.notifications.create(error); 
    } else {
        if ((word.value).indexOf(' ') >= 0) {
            chrome.notifications.create(tooMany);
        }
        chrome.tabs.create({url:"https://archives.nd.edu/cgi-bin/wordz.pl?english=" + word.value});
    }
});
