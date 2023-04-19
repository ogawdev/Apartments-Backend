$(function() {
    $(this).on('click', '#add-product-image', function() {
        var form = '<div class="form-group"><div class="Image-upload"><span class="image-option-close btn btn-danger btn-sm">&times;</span><br><img src="" class="image" style="width: 200px;height: 200px;" alt=""><input class="form-control" type="file" id="product_images[]" accept="image/*" name="product_images[]" onchange="readURL(this);"></div></div>';
        $('.product-image').append(form)
    });w

    $(this).on('click', '.image-option-close', function() {
        var target_input = $(this).parent();
        target_input.remove();
    })
});

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $(input).prev('img.image').attr('src', e.target.result)
        };
        reader.readAsDataURL(input.files[0]);
    }
}