// Using jQuery and ajax make a get request to your express server
// Display the retrieved data on the html page
$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();

        let userInput = ($('input[name="user-inp"]').val()).toLowerCase();

        $('div').empty();

        $.ajax({
            method: 'POST',
            url: '/form',
            data: {
                userInput
            }
        })
        .done(function(msg) {
            if (msg.serverResponse === undefined) {
                const {
                    name,
                    sprites,
                    id,
                } = msg;
                let pokeTemplate = `
                    <h2>${id}. ${name}</h2>
                    <img src="${sprites.front_default}">
                `;
                $('div').append(pokeTemplate);
            } else {
                alert(msg.serverResponse);
            }
         });
    });
});
