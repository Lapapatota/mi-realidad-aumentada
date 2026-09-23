const video = document.getElementById("camara");

navigator.mediaDevices.getUserMedia({
    video: {
        facingMode: "environment"
    },
    audio: false
})
.then(stream => {
    video.srcObject = stream;
})
.catch(error => {
    alert("Error: " + error.name + " - " + error.message);
});