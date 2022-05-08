import "./style.css";

// selectors
// ----------------------------------------
const todayDate = document.querySelector(".today-date");
// ----------------------------------------

// helper functions
// ----------------------------------------
function getTodayDateFormatted() {
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();

  return dd + "/" + mm + "/" + yyyy;
}
// ----------------------------------------

todayDate.textContent += getTodayDateFormatted()();
