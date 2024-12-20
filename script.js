const text = document.querySelector(".sec-text");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "PROGRAMMER";
  }, 0);
  setTimeout(() => {
    text.textContent = "DESIGNER";
  }, 4000);
  setTimeout(() => {
    text.textContent = "DEVELOPER";
  }, 8000);
};

textLoad();

setInterval(textLoad, 12000);

const dropdown = document.body.querySelector(".dropdown");
const hamburg = () => {
    document.body.querySelector(".hamburg").classList.toggle("hamburg-opacity");
    document.body.querySelector(".hamburg").classList.toggle("hamburg-opacity0");
  };
