$(document).ready(function () {
    $('body').append('<div></div>');
    $('#btnSubmit').attr('disabled', true);
    $('#exampleText').keyup(function () {
        if ($(this).val().length !== 0) {
            $('#btnSubmit').attr('disabled', false);
        } else {
            $('#btnSubmit').attr('disabled', true);
        };
    });

    $('body').append('<ul>List of inputs:</ul>');

    $('#btnSubmit').click(function () {
        alert($('input[type="text"]').val());
        // $('div').append('<h2>' + $('input[type="text"]').val() + '</h2>');
        const newListItem = $('<li>' + $('input[type="text"]').val() + '</li>');
        $('ul').append(newListItem);

        $(newListItem).click(function() {
            const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
            const r = randomBetween(0, 255);
            const g = randomBetween(0, 255);
            const b = randomBetween(0, 255);
    
            $(newListItem).css('color', `rgb(${r}, ${g}, ${b})`);    
        });

        $(newListItem).dblclick(function() {
            $(newListItem).remove();
        });

        event.preventDefault();
    });
    
});

