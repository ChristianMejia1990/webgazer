// Espera a que webgazer esté disponible antes de usarlo
function esperaWebgazer(maxTries = 50, delay = 100) {
  return new Promise((resolve, reject) => {
    let tries = 0;
    const interval = setInterval(() => {
      if (window.webgazer) {
        clearInterval(interval);
        resolve();
      } else if (tries >= maxTries) {
        clearInterval(interval);
        reject(new Error("webgazer no cargó después de esperar"));
      }
      tries++;
    }, delay);
  });
}

async function iniciarWebgazer() {
  try {
    await esperaWebgazer();

    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    stream.getTracks().forEach(track => track.stop());

    await webgazer
      .setGazeListener(data => {
        if (data) {
          // Aquí puedes procesar data.x y data.y
        }
      })
      .begin();

    webgazer.showVideo(true).showPredictionPoints(true);
  } catch (error) {
    // Error silencioso o manejo que prefieras
  }
}

window.addEventListener("load", () => {
  iniciarWebgazer();

  const btnDetener = document.getElementById("detener");
  if (btnDetener) {
    btnDetener.addEventListener("click", () => {
      if (window.webgazer) {
        webgazer.pause();
        webgazer.clearGazeListener();
      }
    });
  }
});

window.addEventListener("beforeunload", () => {
  if (window.webgazer) {
    webgazer.end();
  }
});
