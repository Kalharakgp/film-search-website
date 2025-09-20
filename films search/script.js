async function searchMovie() {
  const movieName = document.getElementById("movieInput").value;
  const resultDiv = document.getElementById("result");

  if (movieName === "") {
    resultDiv.innerHTML = "<p>Please enter a movie title.</p>";
    return;
  }

  const apiKey = "14c9a340"; // Replace with your OMDb API key
  const url = `https://www.omdbapi.com/?t=${encodeURIComponent(movieName)}&plot=full&apikey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.Response === "True") {
      resultDiv.innerHTML = `
        <div class="movie-card">
          <img src="${data.Poster !== "N/A" ? data.Poster : "https://via.placeholder.com/300x450?text=No+Image"}" alt="Poster">
          <h2>${data.Title} (${data.Year})</h2>
          <p><strong>Rated:</strong> ${data.Rated}</p>
          <p><strong>Released:</strong> ${data.Released}</p>
          <p><strong>Runtime:</strong> ${data.Runtime}</p>
          <p><strong>Genre:</strong> ${data.Genre}</p>
          <p><strong>Director:</strong> ${data.Director}</p>
          <p><strong>Writer:</strong> ${data.Writer}</p>
          <p><strong>Actors:</strong> ${data.Actors}</p>
          <p><strong>Plot:</strong> ${data.Plot}</p>
          <p><strong>Language:</strong> ${data.Language}</p>
          <p><strong>Country:</strong> ${data.Country}</p>
          <p><strong>Awards:</strong> 🏆 ${data.Awards}</p>
          <p><strong>Box Office:</strong> 💰 ${data.BoxOffice ? data.BoxOffice : "N/A"}</p>
          <p><strong>IMDb Rating:</strong> ⭐ ${data.imdbRating} / 10</p>
          <p><strong>Metascore:</strong> 🎯 ${data.Metascore}</p>
          <p><strong>Production:</strong> ${data.Production}</p>
          <p><strong>Website:</strong> <a href="${data.Website}" target="_blank">${data.Website}</a></p>
        </div>
      `;
    } else {
      resultDiv.innerHTML = `<p>❌ Movie not found. Try another title.</p>`;
    }
  } catch (error) {
    resultDiv.innerHTML = `<p>⚠️ Error fetching data. Please try again later.</p>`;
  }
}
