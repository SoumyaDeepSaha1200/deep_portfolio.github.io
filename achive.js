 // Script to open modal and display clicked image
 $(document).ready(function () {
    $('.achievement-img').click(function () {
        var imgSrc = $(this).attr('src');
        $('#modalImage').attr('src', imgSrc);
        $('#imageModal').modal('show');
    });
});