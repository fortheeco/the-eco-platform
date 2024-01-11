// Function to update upvote/downvote counts
function updateCounts(data, problemId) {
  const upvoteCounts = document.querySelector(`.upvote__count[data-problem_id="${problemId}"]`);
  const downvoteCounts = document.querySelector(`.downvote__count[data-problem_id="${problemId}"]`);

  if (upvoteCounts) {
      upvoteCounts.textContent = data.likes;
  }

  if (downvoteCounts) {
      downvoteCounts.textContent = data.dislikes;
  }
}

// Upvote and Downvote operations
const voteButtons = document.querySelectorAll(".like-btn, .dislike-btn");

voteButtons.forEach((button) => {
  button.addEventListener("click", async () => {
      const action = button.dataset.action;
      const problemId = button.dataset.problem_id;

      try {
          const response = await fetch(`accounts/user/problem-details/${problemId}/?action=${action}`, {
              method: "GET",
          });

          if (!response.ok) {
              console.error('Error:', response.statusText);
          } else {
              const data = await response.json();
              updateCounts(data, problemId);
          }
      } catch (error) {
          console.error('Error:', error);
      }
  });
});
