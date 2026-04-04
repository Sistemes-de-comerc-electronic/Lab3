$(document).ready(function () {
    $("#important").hover(
        function () {
            $(this).css("text-decoration", "underline");
        },
        function () {
            $(this).css("text-decoration", "none");
        }
    );
});
