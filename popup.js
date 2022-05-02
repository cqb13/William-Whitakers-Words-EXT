var buttonLTE = document.getElementById("LTE");
var buttonETL = document.getElementById("ETL");
const checkBox = document.querySelector('#box');
var word = document.getElementById("entry");

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

const translation = {
    type: "basic",
    iconUrl: "/images/icon128.png",
    title: "translation",
    message: 'translation',
}

// Warnings
const boxCheck = {
    type: "basic",
    iconUrl: "/images/icon128.png",
    title: "warning",
    message: "this option is less acurate",
}

checkBox.addEventListener("change", function(){
    if (this.checked){
        chrome.notifications.create(boxCheck);
    }
});

// Latin to English
buttonLTE.addEventListener("click", function(){
    if (word.value == ""){
        chrome.notifications.create(error);
    } else if (checkBox.checked == false) {
        chrome.tabs.create({url:"http://www.archives.nd.edu/cgi-bin/wordz.pl?keyword=" + word.value});
    } else { 
        chrome.tabs.create({url:"https://translate.google.com/?sl=la&tl=en&text="+word.value+"&op=translate"});
    }
});

// English to Latin
buttonETL.addEventListener("click", function(){
    if (word.value == ""){
        chrome.notifications.create(error); 
    } else if (checkBox.checked == false) {
        if ((word.value).indexOf(' ') >= 0){
            chrome.notifications.create(tooMany);
        }
        chrome.tabs.create({url:"https://archives.nd.edu/cgi-bin/wordz.pl?english=" + word.value});
    } else{
        chrome.tabs.create({url:"https://translate.google.com/?sl=en&tl=la&text="+word.value+"&op=translate"});
    }
});
