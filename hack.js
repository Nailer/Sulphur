var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar")
// import { Livepeer } from "livepeer";
var contents = document.querySelector(".container")
var tus = require('tus-js-client')
var player = videojs('livepeer-sample-videojs-player');
player.play();

menuIcon.onclick = function () {
    sidebar.classList.toggle("small-sidebar")
    contents.classList.toggle("checker")
}

const input = document.getElementById('fileInput');

const file = input.files[0];

const upload = new tus.Upload(file, {
  endpoint: tusEndpoint,
  metadata: {
    filename,
    filetype: 'video/mp4',
  },
  uploadSize: file.size,
  onError(err) {
    console.error('Error uploading file:', err);
  },
  onProgress(bytesUploaded, bytesTotal) {
    const percentage = ((bytesUploaded / bytesTotal) * 100).toFixed(2);
    console.log('Uploaded ' + percentage + '%');
  },
  onSuccess() {
    console.log('Upload finished:', upload.url);
  },
});

const previousUploads = await upload.findPreviousUploads();

if (previousUploads.length > 0) {
  upload.resumeFromPreviousUpload(previousUploads[0]);
}

upload.start();