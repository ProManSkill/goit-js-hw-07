function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const clickBtn = document.querySelector(".change-color")
const bgColor = document.querySelector(".widget")
const colorValue = document.querySelector(".color")


clickBtn.addEventListener("click", handleClick);
function handleClick() {
  colorValue.textContent = bgColor.parentElement.style.backgroundColor = `${getRandomHexColor()}`
  
}