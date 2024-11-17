function toggleRows() {
  document.querySelectorAll('.row[data-hidden="true"]').forEach((element) => {
    element.classList.toggle("hidden"); 
  });

  const button = document.querySelector(".rightexpand");
  button.textContent = button.textContent === "More" ? "Less" : "More";
}

function toggleRow() {
  document.querySelectorAll('li[data-hidden="true"]').forEach((element) => {
    element.classList.toggle("hidden"); 
  });

  const p = document.querySelector(".leftexpand");

  p.textContent = p.textContent.trim() === "+3 more" ? "Show less" : "+3 more";
  var x = document.getElementsByClassName("leftexpand");
  x.style.textdecoration = underline;
}

function toggleMode() {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
}

window.onload = () => {
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
  }
};



