var buttonLTE = document.getElementById("LTE");
var buttonETL = document.getElementById("ETL");
const checkBox = document.querySelector('#box');
var word = document.getElementById("entry");

const error = {
    type: "basic",
    iconUrl: "/images/icon128.png",
    title: "error",
    message: "text not found | enter a word",
};

const translation = {
    type: "basic",
    iconUrl: "/images/icon128.png",
    title: "translation",
    message: "(translation goes here)",
    buttons: [
        { title: 'Copy' },
      ]
};

buttonLTE.addEventListener("click", function(){
    if (word.value == ""){
        chrome.notifications.create(error);
    } else if (checkBox.checked == false) {
        chrome.tabs.create({url:"http://www.archives.nd.edu/cgi-bin/wordz.pl?keyword=" + word.value});
    } else { 
        chrome.tabs.create({url:"https://translate.google.com/?sl=la&tl=en&text="+word.value+"&op=translate"});
        chrome.notifications.create(translation); 
    }
});

buttonETL.addEventListener("click", function(){
    if (word.value == ""){
        chrome.notifications.create(error); 
    } else if (checkBox.checked == false) {
        chrome.tabs.create({url:"https://archives.nd.edu/cgi-bin/wordz.pl?english=" + word.value});
    } else{
        chrome.tabs.create({url:"https://translate.google.com/?sl=en&tl=la&text="+word.value+"&op=translate"});
        chrome.notifications.create(translation); 
    }
});