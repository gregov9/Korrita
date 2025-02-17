document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yesBtn")
  const noBtn = document.getElementById("noBtn")
  const bear = document.getElementById("bear")
  const alternativeOptions = document.getElementById("alternativeOptions")
  const noMessage = document.getElementById("noMessage")
  let noBtnClicks = 0

  const noMessages = [
    "¿En serio no me perdonarás Korrita?",
    "Vamos, dame otra oportunidad Korra",
    "¿Ni siquiera lo considerarás un poca Korra?",
    "Prometo que no volverá a pasar esto Korra",
    "¿Qué puedo hacer para que me perdones Korra?",
    "Nuestra amistad me importa mucho Korra",
    "Por favor, reconsidéralo Korra",
    "Te extraño, ¿no me perdonarás ;(?",
    "Haré lo que sea necesario",
    "¿De verdad quieres terminar así Korra?",
  ]

  yesBtn.addEventListener("click", () => {
    document.body.innerHTML = `
           <div style="text-align: center; padding: 2rem; background-color: #f9f0ff; border-radius: 15px; max-width: 500px; margin: auto; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);">
          <h1 style="color: #8a2be2; font-size: 1.8rem; margin-bottom: 0.5rem;">¡Korrita, gracias por perdonarme! 💙</h1>
          <img src="https://media1.tenor.com/m/Bw2OqaP5dHUAAAAC/peachcat-and-goma-peachcat.gif" alt="Gracias por perdonarme" style="width: 100%; max-width: 300px; border-radius: 10px; margin: 1rem 0;">
          <p style="color: #4b0082; font-size: 1.1rem; line-height: 1.5; padding: 0 1rem;">  
              Eres la mejor, Korrita. No sabes cuánto valoro nuestra amistad y cuánto significa para mí tu perdón.  
              Prometo cuidar siempre este vínculo tan especial que tenemos. ¡Gracias por ser increíble! 💙  
          </p>
      </div>
        `
  })

  noBtn.addEventListener("click", () => {
    noBtnClicks++
    bear.classList.add("shake")
    setTimeout(() => bear.classList.remove("shake"), 500)

    if (noBtnClicks <= noMessages.length) {
      alternativeOptions.classList.remove("hidden")
      noMessage.textContent = noMessages[noBtnClicks - 1]
    } else {
      noBtn.style.display = "none"
      noMessage.textContent = "Anda Korrita perdoname Shi"
    }

    // Hacer que el botón "Sí" se agrande con cada clic en "No"
    const currentScale = 1 + noBtnClicks * 0.1
    yesBtn.style.transform = `scale(${currentScale})`
  })

  // Restablecer el tamaño del botón "Sí" cuando el mouse sale de él
  yesBtn.addEventListener("mouseout", () => {
    const currentScale = 1 + noBtnClicks * 0.1
    yesBtn.style.transform = `scale(${currentScale})`
  })
})