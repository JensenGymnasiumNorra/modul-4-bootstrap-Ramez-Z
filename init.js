 // Extrauppgift: Fixa så att headern och footern laddas in i varje sida från denna fil
let header = document.getElementsByTagName("header")[0].innerHTML = `
<nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm">
        <div class="container">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul class="navbar-nav row">
              <li class="nav-item col-6 col-lg-auto flex-fill">
                <a class="nav-link" href="index.html"><i class="fa-solid fa-home text"></i> Home</a>
              </li>
              <li class="nav-item col-6 col-lg-auto flex-fill">
                <a class="nav-link" href="movies.html"><i class="fa-solid fa-film"></i> Movies</a>
              </li>
              <li class="nav-item col-6 col-lg-auto flex-fill">
                <a class="nav-link" href="music.html"><i class="fa-solid fa-music"></i> Music</a>
              </li>
              <li class="nav-item col-6 col-lg-auto flex-fill">
                <a class="nav-link" href="series.html"><i class="fa-solid fa-tv"></i> Series</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>`

const currentPage = window.location.pathname.split("/").pop();

const links = document.querySelectorAll(".nav-link");

links.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active", "fw-bold");

    const icon = link.querySelector("i");
    if (icon) {
      icon.classList.add("text-primary");
    }
  }
});
