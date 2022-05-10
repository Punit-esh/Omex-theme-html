const handleclick_go_to_top = () => {
  document.body.scrollIntoView({
    behavior: "smooth",
  });
};

const scroll_div = document.body;

scroll_div.innerHTML += `<div title="Go To Top" class="go_to_top" id="go_to_top">
<img class='to_top_img1' src="./images/arrowhead-up.png">
<img class='to_top_img2' src="./images/arrowhead-up.png">
</div>`;

const to_top_div = document.getElementById("go_to_top");

const handlescroll_scroll_div = () => {
  if (scroll_div.scrollTop > 100) {
    to_top_div.setAttribute("show", "yes");
  } else {
    to_top_div.setAttribute("show", "no");
  }
  if (document.getElementById("footer").getBoundingClientRect().bottom < 1100) {
    to_top_div.setAttribute("footer", "yes");
  } else {
    to_top_div.setAttribute("footer", "no");
  }
};

to_top_div.addEventListener("click", handleclick_go_to_top);
document.addEventListener("scroll", handlescroll_scroll_div);
