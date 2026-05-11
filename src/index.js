function displaySentence(response) {
console.log("poem generated");
new Typewriter('.joke', {
  strings: response.data.answer,
  autoStart: true,
  delay: 1,
  cursor: "",
});
}

function generateSentence(event) {
    event.preventDefault();
    handleClick();
}

let sentenceFormElement = document.querySelector(".sentence-form");
sentenceFormElement.addEventListener("submit", generateSentence);


let apiKey = "a0aca8t7806acb2cb338fb20fbc444o1";
let context = "be polite and provide a single and pertinet answer with just one funny and very smart joke";

function handleClick() {
let instructions = document.querySelector("#instructions")
let prompt = `Make a funny short sentence about ${instructions.value} as if you were a Yoga teacher saying to use that body part. Sign the joke as it was a quote with a made up name of a Yoga Teacher. Sign on a new line`;
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

axios.get(apiUrl).then(displaySentence);
console.log(`${prompt}`)

}