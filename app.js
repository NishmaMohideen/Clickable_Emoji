const firstEmoji = document.querySelector(".first");
const secondEmoji = document.querySelector(".second");
const thirdEmoji = document.querySelector(".third");
const fourthEmoji = document.querySelector(".fourth");

// Add Event Listener
// JavaScript First Emoji
firstEmoji.addEventListener("click", () => {
  if (secondEmoji.classList.contains("second")) {
    secondEmoji.classList.add("active");
    firstEmoji.classList.remove("active");
  }
});

// JavaScript Second Emoji
secondEmoji.addEventListener("click", () => {
  if (firstEmoji.classList.contains("first")) {
    thirdEmoji.classList.add("active");
    secondEmoji.classList.remove("active");
  }
});

// JavaScript Third Emoji
thirdEmoji.addEventListener("click", () => {
  if (secondEmoji.classList.contains("second")) {
    fourthEmoji.classList.add("active");
    thirdEmoji.classList.remove("active");
  }
});

// JavaScript Fourth Emoji
fourthEmoji.addEventListener("click", () => {
  if (thirdEmoji.classList.contains("third")) {
    firstEmoji.classList.add("active");
    fourthEmoji.classList.remove("active");
  }
});
