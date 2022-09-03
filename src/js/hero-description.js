(() => {
  const menuBtnRef = document.querySelector("[data-description-button]");
  const mobileMenuRef = document.querySelector("[data-description]");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
        // document.body.classList.toggle("header-menu-open");
  });
})();
