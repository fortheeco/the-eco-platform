const upvote = document.querySelectorAll(".like-btn");
let likes_count = document.querySelectorAll(".upvote__count");

const downvote = document.querySelectorAll(".dislike-btn");
let dislikes_count = document.querySelectorAll(".downvote__count");


let response = await fetch(`like/?id=${button.dataset.problem_id}`, {
    method: "GET",
});

if (!response.ok) {
    console.error('Error:', response.statusText);
} else {
    let data;
    try {
        data = await response.json();
        updateCounts(data, button.dataset.problem_id, true);
    } catch (error) {
        console.error('JSON Parse Error:', error);
        console.log('Response Text:', await response.text());
    }
}


upvote.forEach((item) => {
  item.addEventListener("click", async () => {
    // tempted to use a query parameter here lol,
    // used query parameters here to evade csrf wahala hahahahahahahahahah
    let res = await fetch(`like/?id=${item.dataset.problem_id}`, {
      method: "GET",
    });
    let data = await res.json();
    likes_count.forEach((counts) => {

      if (counts.id == item.dataset.problem_id) {
        counts.textContent = data.likes;
      }
    });

    dislikes_count.forEach((counts) => {
      if (counts.id == item.dataset.problem_id) {
        counts.textContent = data.dislikes;
      }
    });

  });
});

// Dislike operation

downvote.forEach((item) => {
  item.addEventListener("click", async () => {
    // tempted to use a query parameter here lol,
    // used query parameters here to evade csrf wahala hahahahahahahahahah
    let res = await fetch(`dislike/?id=${item.dataset.problem_id}`, {
      method: "GET",
    });
    let data = await res.json();
    likes_count.forEach((counts) => {
      if (counts.id == item.dataset.problem_id) {
        counts.textContent = data.likes;
      }
    });

    dislikes_count.forEach((counts) => {
      if (counts.id == item.dataset.problem_id) {
        counts.textContent = data.dislikes;
      }
    });
  });
});