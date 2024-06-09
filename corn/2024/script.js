/*var getUrlString = location.href;
var url = new URL(getUrlString);
const Outcome1=document.querySelector('#emoji');
Outcome1.innerHTML=url.searchParams.get('emoji');
const Outcome2=document.querySelector('#food');
Outcome2.innerHTML=url.searchParams.get('emoji');*/ 
function createConfetti() {
        const colors = ['#ff7f0e', '#ffbb78', '#2ca02c', '#98df8a', '#d62728', '#ff9896'];
        const numConfetti = 50;

        for (let i = 0; i < numConfetti; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * window.innerWidth-10 + 'px';
            confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
            document.body.appendChild(confetti);
        }
}
createConfetti()
document.addEventListener("DOMContentLoaded", function () {
  function handlePacmanClick() {
    pacman.classList.add("closing");
    setTimeout(() => {
      pacman.classList.remove("closing");
    }, 1000);
  }

  if (pacman) {
    pacman.addEventListener("click", handlePacmanClick);
    pacman.addEventListener("touchstart", handlePacmanClick);
  } else {
    console.error("Pacman element not found!");
  }
});

Swal.fire({
  title: "Happy Birthday🎉",
  text: "To My Dearest 🌽",
  icon: "info"
});