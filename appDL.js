// split url
let urlParams = new URLSearchParams(window.location.search);
let urlParam_file;
let urlParam_version;
if (urlParams.get("file") != null) {urlParam_file = urlParams.get("file");}
if (urlParams.get("version") != null) {urlParam_version = urlParams.get("version");}

// addEventListener
document.addEventListener("DOMContentLoaded",domContentLoaded);

// let
let myJsonFiles = [];

function domContentLoaded() {
  myJsonFiles = jsonAndOnload("./file-data.json",myJsonFiles);
}
function jsonAndOnload(requestFile,myJsonFiles) {
  // json and onload
  let request = new XMLHttpRequest();
  request.open('GET', requestFile);
  request.responseType = 'json';
  request.send();
  let myJsonData;
  let files;
  request.onload = function() {
    myJsonData = request.response;
    files = myJsonData['files'];
    downloadURL = myJsonData['downloadURL'];
    for (var i = 0; i < files.length; i++) {
      myJsonFiles.unshift(files[i]);
    }
  }
  return myJsonFiles;
}
