const container = document.querySelector(".container");
const text = document.querySelector(".text");
const audio = document.getElementById("audioPlayer");
const clickMe = document.getElementById("click-me");
const wish = document.getElementById("wish");
const image = document.getElementById("image");

// text content
const content = [
  "Hallo Banh 👋",
  " ...",
  "apa yah? 🤔",
  "gak tau, bingung mau ketik apa 🗿 😂",
  "BTW ... 👇",
];

// text
text.textContent = content[0];

for (let i = 1; i < content.length; i++) {
  setTimeout(() => {
    text.textContent = content[i];
  }, i * 3000);
}

// show button clickMe
setTimeout(() => {
  clickMe.style.display = "block";
}, content.length * 3000);

// list image

const images = [
  "img/1.png",
  "img/2.png",
  "img/3.png",
  "img/4.png",
  "img/5.jpg",
  "img/6.png",
  "img/7.png",
];

// show Image
image.setAttribute("src", images[0]);

function ShowImage() {
  const image = document.getElementById("image");
  let index = 0;

  const intervalId = setInterval(() => {
    image.setAttribute("src", images[index]);
    index++;
    if (index >= images.length) {
      index = 0;
      // clearInterval(intervalId); // Stop the interval when all images have been shown
    }
  }, 3000); // Change image every 3 seconds
}

// handleAudio
function handleAudio() {
    audio.currentTime = 0;
    if (audio) {
        audio.play().catch((error) => {
          console.error("Error playing audio:", error);
        });
      } else {
        console.warn("Audio element not found");
      }

    }

    audio.addEventListener("ended", handleAudio)

// button event listener click
clickMe.addEventListener("click", (e) => {
  clickMe.style.display = "none";
  text.style.display = "none";
  wish.style.display = "flex";

  ShowImage();

  //   play song
  handleAudio();

  //   confetti
  party.confetti(document.body, {
    particleCount: 100, // Number of confetti particles
    spread: 70, // Spread angle
    size: party.variation.range(1, 3),
    origin: { y: 0.6 }, // Vertical position (0 is the top)
  });

  party.sparkles(image, {
    // Specify further (optional) configuration here.
    count: party.variation.range(10, 60),
    speed: party.variation.range(50, 300),
  });
});

// button doa
const fakeWish = document.getElementById("fake-wish");
const realWish = document.getElementById("real-wish");
const realButtonWish = document.getElementById("real-wish-button");
const fakeButtonWish = document.getElementById("fake-wish-button");

realButtonWish.addEventListener("click", () => {
  realWish.style.display = "block";
  fakeWish.style.display = "none";
});

fakeButtonWish.addEventListener("click", () => {
  fakeWish.style.display = "block";
  realWish.style.display = "none";
});
