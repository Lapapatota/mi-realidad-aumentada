const video = document.getElementById("camara");
const boton = document.getElementById("boton");

boton.addEventListener("click", async () => {

    try {

        const stream = await navigator.mediaDevices.getUserMedia({
            video: {
                facingMode: {
                    ideal: "environment"
                }
            },
            audio: false
        });

        video.srcObject = stream;

        await video.play();

        boton.style.display = "none";

    } catch (error) {

        alert("No se pudo iniciar la cámara: " + error.message);

        console.error(error);
    }

});