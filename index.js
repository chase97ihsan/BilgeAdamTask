import cities from "./data.js";

const searchInput = document.getElementById("search-input");
const suggestionsList = document.getElementById("suggestions");

function updateSuggestions() {
  const inputValue = searchInput.value.toLocaleUpperCase("tr-TR");
  const filteredSuggestions = cities.filter((suggestion) =>
    suggestion.toLocaleUpperCase("tr-TR").startsWith(inputValue)
  );

  suggestionsList.innerHTML = "";

  const numSuggestions = filteredSuggestions.length;
  const suggestionWidth = numSuggestions * 142;
  suggestions.style.width = suggestionWidth + "px";

  filteredSuggestions.forEach((suggestion) => {
    const li = document.createElement("li");
    li.textContent = suggestion;
    suggestionsList.appendChild(li);
  });
}

searchInput.addEventListener("input", updateSuggestions);

suggestionsList.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    searchInput.value = event.target.textContent;
    suggestionsList.innerHTML = "";
  }
});
searchInput.addEventListener("blur", () => {
  if (searchInput.value.trim() === "") {
    suggestionsList.innerHTML = "";
  }
});
