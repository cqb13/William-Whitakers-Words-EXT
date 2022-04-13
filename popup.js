var buttonLTE = document.getElementById("LTE");
var buttonETL = document.getElementById("ETL");
const checkBox = document.querySelector('#box');
var word = document.getElementById("entry");

buttonLTE.addEventListener("click", function(){
    if (checkBox.checked == false) {
        chrome.tabs.create({url:"http://www.archives.nd.edu/cgi-bin/wordz.pl?keyword=" + word.value});
    } else {
        console.log('google translate word')
    }
});

buttonETL.addEventListener("click", function(){
    if (checkBox.checked == false) {
        chrome.tabs.create({url:"https://archives.nd.edu/cgi-bin/wordz.pl?english=" + word.value});
    } else{
        console.log('google translate word')
    }
});
