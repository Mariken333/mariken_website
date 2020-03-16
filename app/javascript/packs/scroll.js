const arrow = document.getElementById("scroll-arrow");

const scroll = () => {
  arrow.addEventListener("click", (event) => {
        event.window.scrollBy(0, 250);
  });
 };

export { scroll };
