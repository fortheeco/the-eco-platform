// Function to show the error modal with a custom message and automatically dismiss after a duration
function showErrorModal(errorMessage, duration) {
  const modal = document.querySelector("#errorModal");
  const modalBody = document.querySelector(".modal-body");
  modalBody.textContent = errorMessage;
  modal.classList.add("d-show");

  setTimeout(function () {
    modal.classList.remove("d-show");
  }, duration);
}

// Example usage
const errorMessage = "An error occurred while processing your request.";
const displayDuration = 5000; // 2 seconds
showErrorModal(errorMessage, displayDuration);
