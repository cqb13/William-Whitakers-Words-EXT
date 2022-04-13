var buttonLTE = document.getElementById("LTE");
var buttonETL = document.getElementById("ETL");
const checkBox = document.querySelector('#box');
var word = document.getElementById("entry");

buttonLTE.addEventListener("click", function(){
    if (checkBox.checked == false) {
        chrome.tabs.create({url:"http://www.archives.nd.edu/cgi-bin/wordz.pl?keyword=" + word.value});
    } else {
        chrome.tabs.create({url:"https://translate.google.com/?sla=l&tl=en&text="+word.value+"&op=translate"});
    }
});

buttonETL.addEventListener("click", function(){
    if (checkBox.checked == false) {
        chrome.tabs.create({url:"https://archives.nd.edu/cgi-bin/wordz.pl?english=" + word.value});
    } else{
        chrome.tabs.create({url:"https://translate.google.com/?sl=en&tl=la&text="+word.value+"&op=translate"});
    }
});
