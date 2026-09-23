const video = document.getElementById("camara");
const mensaje = document.getElementById("mensaje");

async function iniciarCamara() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            video: {
                facingMode: "user"
            },
            audio: false
        });

        video.srcObject = stream;

        video.onloadedmetadata = () => {
            video.play();
            mensaje.textContent = "📷 Cámara activada";
        };

    } catch (error) {
        console.error("Error de cámara:", error);

        mensaje.textContent =
            "❌ No se pudo acceder a la cámara";

        alert("Error al abrir la cámara: " + error.message);
    }
}

iniciarCamara();