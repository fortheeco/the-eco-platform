<script>
    $(document).ready(function () {
        $(".like-btn").click(function () {
            var problemId = $(this).data("problem-id");
            $.post("/like/", { problem_id: problemId }, function (data) {
                if (data.mode === "success") {
                    // Update the like count in the DOM
                    $(".upvote__count").html(data.likes);
                }
            });
        });

        $(".dislike-btn").click(function () {
            var problemId = $(this).data("problem-id");
            $.post("/dislike/", { problem_id: problemId }, function (data) {
                if (data.mode === "success") {
                    // Update the dislike count in the DOM
                    $(".downvote__count").html(data.dislikes);
                }
            });
        });
    });
</script>