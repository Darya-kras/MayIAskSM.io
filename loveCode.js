
//const nelov = document.getElementById("Nelove").addEventListener("mouseenter", run);
// function run() {
//     var btn = document.getElementById("Nelove");
//     if (!btn.style.left) {
//         // Default to 500 to start
//         btn.style.left = "500px";
//     } else {
//         var posLeft = parseInt(btn.style.left); // parseInt ignores the px on the end
//         if (posLeft >= 800) {
//             btn.style.left = "200px";
//         } else if (posLeft > 450) {
//             posLeft += 150;
//             btn.style.left = (posLeft + 150) + "px";
//         }
//     }
// } неважно



const lov = document.getElementById("love");
lov.onclick = function() {
    window.location.href='function-heart.html';
 }
 

const nelov = document.getElementById("Nelove");
nelov.onclick = function() {
  window.location.href='net.mp4';
  //window.open(URL,'https://mem-hub.ru/web/loads/video/net-poshol-nahui-rycarya-zaderzhal.mp4');
 }

 const lovRect = lov.getBoundingClientRect()
 const X = lovRect.left + 545;
 console.log(lovRect.left);
 nelov.style.left = `${X}px`;
 console.log(X);


 document.addEventListener("DOMContentLoaded", () => {
  const btnRect = nelov.getBoundingClientRect()

  nelov.style.position = 'fixed' //я ебала в от эту фигню она сбила мне первоначальный диайн кнопок а без неё кнопка улетает в казахстан
  function getMouseCoords(event, btnRect) {
    return {
      x: event.clientX - (btnRect.left + window.scrollX + btnRect.width / 2),
      y: event.clientY - (btnRect.top + window.scrollY + btnRect.height / 2),
    };
  }
  function calculateNewPosition(deltaX, deltaY, btnRect) {
    let newX = btnRect.left + deltaX+50;
    let newY = btnRect.top + deltaY+50;

    newX = Math.max(0, Math.min(newX, window.innerWidth - btnRect.width));
    newY = Math.max(0, Math.min(newY, window.innerHeight - btnRect.height));

    return { newX, newY };
  }

  nelov.addEventListener("mousemove", (event) => {
    const btnRect = nelov.getBoundingClientRect();
    const maxDistance = 150;
    const mousePos = getMouseCoords(event, btnRect);

    const deltaX = mousePos.x > 0 ? -maxDistance : maxDistance;
    const deltaY = mousePos.y > 0 ? -maxDistance : maxDistance;

    const { newX, newY } = calculateNewPosition(deltaX, deltaY, btnRect);
    nelov.style.left = `${newX}px`;
    nelov.style.top = `${newY}px`;
  });

});