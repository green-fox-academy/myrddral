const genreList = document.getElementById("genre-list");
const movieList = document.getElementById("movie-list");

genreList.addEventListener("change", selectGenre);
movieList.addEventListener("change", selectMovie);

function selectGenre() {
    // set movie visibility based on genre
  movieList.value = "default";
  for (let i = 1; i < movieList.length; i++) {
    switch (genreList.value) {
      case "sci-fi":
        genreList.value === "sci-fi" && movieList[i].className.includes("sci-fi")
          ? movieList[i].classList.remove("hidden")
          : movieList[i].classList.add("hidden");
        break;
      case "comedy":
        genreList.value === "comedy" && movieList[i].className.includes("comedy")
          ? movieList[i].classList.remove("hidden")
          : movieList[i].classList.add("hidden");
        break;
      case "drama":
        genreList.value === "drama" && movieList[i].className.includes("drama")
          ? movieList[i].classList.remove("hidden")
          : movieList[i].classList.add("hidden");
        break;
      default:
        movieList[i].classList.add("hidden");
    }
  }
  //reset selected movie text
  document.getElementById("movieChosen").innerHTML = " -"
}

function selectMovie() {
    const movieList = document.getElementById("movie-list");
    document.getElementById("movieChosen").innerHTML = " " + movieList.value;
}