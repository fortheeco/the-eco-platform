// Function to update upvote/downvote counts
function updateCounts(data, problemId, isUpvote) {
    const counts = document.querySelectorAll(`.${isUpvote ? 'upvote' : 'downvote'}__count`);
    counts.forEach((count) => {
        if (count.dataset.problem_id == problemId) {
            count.textContent = isUpvote ? data.likes : data.dislikes;
        }
    });
}

// Upvote operation
const upvoteButtons = document.querySelectorAll(".like-btn");

upvoteButtons.forEach((button) => {
    button.addEventListener("click", async () => {
        try {
            let response = await fetch(`/accounts/user/like/?id=${button.dataset.problem_id}`, {
                method: "GET",
            });
            let data = await response.json();
            updateCounts(data, button.dataset.problem_id, true);
        } catch (error) {
            console.error('Error:', error);
        }
    });
});

// Downvote operation
const downvoteButtons = document.querySelectorAll(".dislike-btn");

downvoteButtons.forEach((button) => {
    button.addEventListener("click", async () => {
        try {
            let response = await fetch(`/accounts/user/dislike/?id=${button.dataset.problem_id}`, {
                method: "GET",
            });
            let data = await response.json();
            updateCounts(data, button.dataset.problem_id, false);
        } catch (error) {
            console.error('Error:', error);
        }
    });
});
