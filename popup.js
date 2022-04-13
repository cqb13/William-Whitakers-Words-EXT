var buttonLTE = document.getElementById("LTE");
var buttonETL = document.getElementById("ETL");
var word = document.getElementById("entry");

buttonLTE.addEventListener("click", function(){
    chrome.tabs.create({url:"http://www.archives.nd.edu/cgi-bin/wordz.pl?keyword=" + word.value});
});

buttonETL.addEventListener("click", function(){
    chrome.tabs.create({url:"https://archives.nd.edu/cgi-bin/wordz.pl?english=" + word.value});
});
