document.addEventListener('DOMContentLoaded', function() {
    fetch('fetch_services.php')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const servicesContainer = document.getElementById('services-container');
            data.forEach(service => {
                const colDiv = document.createElement('div');
                colDiv.classList.add('col-md-4', 'mb-4');
                
                const cardDiv = document.createElement('div');
                cardDiv.classList.add('card', 'service-card');
                
                const img = document.createElement('img');
                img.src = service.image;
                img.classList.add('card-img-top');
                img.alt = 'Service Image';
                
                const cardBodyDiv = document.createElement('div');
                cardBodyDiv.classList.add('card-body', 'service-card-body');
                
                const cardTitle = document.createElement('h5');
                cardTitle.classList.add('card-title');
                cardTitle.textContent = service.title;
                
                const cardText = document.createElement('p');
                cardText.classList.add('card-text');
                cardText.textContent = service.description;
                
                cardBodyDiv.appendChild(cardTitle);
                cardBodyDiv.appendChild(cardText);
                
                cardDiv.appendChild(img);
                cardDiv.appendChild(cardBodyDiv);
                
                colDiv.appendChild(cardDiv);
                
                servicesContainer.appendChild(colDiv);
            });
        })
        .catch(error => console.error('Error fetching services:', error));
});