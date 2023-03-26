let generateBtn = document.querySelector(".generate-btn");
let copyBtn = document.querySelector(".copy-btn");
let paragraph = document.querySelector(".paragraph");
let apiKey = "VTOMZO2EHgXCKNUu6C5G4Q==3HksQbohiVTSTlnX";
let options = {
    method: "GET",
    headers: {
        'X-Api-Key': apiKey,
        'content-type': 'application/json'
    }
};
let url = "https://api.api-ninjas.com/v1/loremipsum?paragraphs=";

let generate = () => {
    let number = document.querySelector(".counter input").value;
    let finalUrl = url + number;
    fetch(finalUrl, options)
        .then(Response => Response.json())
        .then(data => {
            paragraph.innerText = data.text;
            generated();
        }
        );
};


generateBtn.addEventListener("click", generate);
window.addEventListener("load", generate);
copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(paragraph.innerText);
    copyBtn.textContent = "copied!";
    setInterval(() => {
        copyBtn.textContent = "copy";
    }, 3000);
});

function generated() {
    generateBtn.textContent = "Generated!";
    setInterval(() => {
        generateBtn.textContent = "Generate Lorem";
    }, 3000);

}
