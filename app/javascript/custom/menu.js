// Menu manipulation

// Add toggle listeners to listne for clicks.
document.addEventListener("turbo:load", function() {
  let account = document.querySelector.querySelector("#account");
  account.addEvemntListener("click", function(event) {
    event.preventDefault();
    let menu = document.querySelector("#dropdown-menu");
    menu.classList.toggle("active");
  });
});