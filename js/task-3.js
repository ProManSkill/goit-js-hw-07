const userName = document.querySelector("#name-input")

const nameOutput = document.querySelector("#name-output")

let anonymName = nameOutput.textContent

userName.addEventListener("input", handleInput)

function handleInput(event) {
    const name = event.currentTarget.value.trim()
    nameOutput.textContent = name.trim() === "" ? anonymName : name;
}