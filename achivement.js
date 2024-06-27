document.addEventListener('DOMContentLoaded', function () {
    fetch('fetch_achievements.php')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            if (data.error) {
                console.error('Error fetching achievements:', data.error);
                return;
            }

            const achievementsContainer = document.getElementById('achievements-container');
            data.forEach(achievement => {
                const colDiv = document.createElement('div');
                colDiv.classList.add('col-lg-3', 'col-md-4', 'col-sm-6', 'achievement-card');

                const cardDiv = document.createElement('div');
                cardDiv.classList.add('card');

                const img = document.createElement('img');
                img.src = achievement.image;
                img.classList.add('card-img-top', 'achievement-img');
                img.alt = 'Achievement Image';

                const cardBodyDiv = document.createElement('div');
                cardBodyDiv.classList.add('card-body');

                const cardTitle = document.createElement('h5');
                cardTitle.classList.add('card-title', 'fw-bold', 'text-center');
                cardTitle.textContent = achievement.title;

                const cardText = document.createElement('p');
                cardText.classList.add('card-text');
                cardText.textContent = achievement.description;

                cardBodyDiv.appendChild(cardTitle);
                cardBodyDiv.appendChild(cardText);

                cardDiv.appendChild(img);
                cardDiv.appendChild(cardBodyDiv);

                colDiv.appendChild(cardDiv);

                achievementsContainer.appendChild(colDiv);
            });
        })
        .catch(error => console.error('Error fetching achievements:', error));
});

// Script to open modal and display clicked image
$(document).ready(function () {
    $(document).on('click', '.achievement-img', function () {
        var imgSrc = $(this).attr('src');
        $('#modalImage').attr('src', imgSrc);
        $('#imageModal').modal('show');
    });
});