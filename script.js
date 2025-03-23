document.addEventListener("DOMContentLoaded", () => {
  const questions = [
    {
      question: "Fråga 1",
      answer:
        "Nullam sem justo, sodales eget sagittis dignissim, pretium sed ligula. Maecenas rutrum blandit luctus. Suspendisse efficitur facilisis pretium. Donec nec ultricies eros. Nullam tincidunt turpis sodales justo placerat dictum. In porttitor tincidunt orci. Praesent sed pellentesque est.",
    },
    {
      question: "Fråga 2",
      answer:
        "Cras feugiat purus a erat porttitor eleifend sed ac odio. Pellentesque porttitor gravida luctus. Maecenas dignissim suscipit aliquam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean lorem diam, sagittis at vehicula vel, consectetur ac enim. Sed sollicitudin arcu id enim scelerisque imperdiet. Proin luctus turpis nec venenatis iaculis. Nam egestas viverra nisl sed facilisis. Pellentesque eget est eget libero fringilla facilisis.",
    },
    {
      question: "Fråga 3",
      answer:
        "Proin molestie ex velit, ac venenatis elit tincidunt in. Nunc varius nibh at odio finibus, id mattis metus posuere. Suspendisse ut ante id augue auctor iaculis eu quis nibh. Proin congue odio diam, nec malesuada urna condimentum vel. Fusce in arcu elit. Quisque sit amet elit facilisis, viverra libero quis, tempus nisl. Nam quis iaculis lectus. Proin eget purus lorem. Aliquam ullamcorper lorem massa, vel rutrum lorem finibus non. Phasellus vel ipsum arcu.",
    },
    {
      question: "Fråga 4",
      answer:
        "Nullam sem justo, sodales eget sagittis dignissim, pretium sed ligula. Maecenas rutrum blandit luctus. Suspendisse efficitur facilisis pretium. Donec nec ultricies eros. Nullam tincidunt turpis sodales justo placerat dictum. In porttitor tincidunt orci. Praesent sed pellentesque est.",
    },
  ];

  const accordion = document.getElementById("accordion");

  questions.forEach((q) => {
    const details = document.createElement("details");
    details.innerHTML = `
      <summary>${q.question}</summary>
      <div class="content">
        <p>${q.answer}</p>
      </div>
    `;
    accordion.appendChild(details);
  });

  const menuLink = [
    {
      menuLinks: "Submeny 1",
      subLinks: ["Länk 1", "Länk 2", "Länk 3", "Länk 4"],
    },
    {
      menuLinks: "Submeny 2",
      subLinks: ["Länk 1", "Länk 2", "Länk 3", "Länk 4"],
    },
    {
      menuLinks: "Submeny 3",
      subLinks: ["Länk 1", "Länk 2", "Länk 3", "Länk 4"],
    },
  ];

  const subMenu = document.getElementById("subMenu");

  menuLink.forEach((item) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <h2>${item.menuLinks}</h2>
      <ul>
        ${item.subLinks
          .map((link) => `<li><a href="#">${link}</a></li>`)
          .join("")}
      </ul>
    `;
    subMenu.appendChild(div);
  });

  const menu = document.getElementById("menu");
  const menuSummary = document.getElementById("menuLink");
  const overlay = document.getElementById("overlay");

  menuSummary.addEventListener("click", () => {
    if (menu.hasAttribute("open")) {
      overlay.style.opacity = "0";
      overlay.style.pointerEvents = "none";
      overlay.style.height = "0";
    } else {
      overlay.style.opacity = "1";
      overlay.style.pointerEvents = "all";
      overlay.style.height = "100vh";
    }
  });

  overlay.addEventListener("click", () => {
    overlay.style.opacity = "0";
    overlay.style.pointerEvents = "none";
    overlay.style.height = "0";

    menu.removeAttribute("open");
  });
});
