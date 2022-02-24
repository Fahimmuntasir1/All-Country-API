const kanyeQuotes = () => {
  fetch("https://api.kanye.rest/")
    .then((response) => response.json())
    .then((data) => displayQuotes(data));
};

const displayQuotes = (data) => {
  const showCode = document.getElementById("quotes");
  showCode.innerHTML = `"${data.quote}"`;
};
