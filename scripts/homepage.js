document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".branch");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const branchCode = button.getAttribute("data-branch");
      if (branchCode === "OTHERS") {
        window.location.href = "other.html";
      } else {
        window.location.href = `calculator.html?branch=${branchCode}`;
      }
    });
  });
});
