document.getElementById('loadData').addEventListener('click', fetchData);

function fetchData() {
    fetch('https://randomuser.me/api/?results=5') 
        .then(response => response.json())
        .then(data => {
            displayUsers(data.results);
            document.getElementById('statusMessage').style.display = 'block'; 
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('statusMessage').innerText = 'Failed to load data';
            document.getElementById('statusMessage').style.display = 'block';
        });
}

function displayUsers(users) {
    const userContainer = document.getElementById('userContainer');
    userContainer.innerHTML = ''; 
    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.classList.add('userCard');
        userCard.innerHTML = `
            <img src="${user.picture.large}" alt="User Picture">
            <p>Gender: ${user.gender}</p>
            <p>Name: ${user.name.first} ${user.name.last}</p>
            <p class="email">E-mail: ${user.email}</p>
            <p>Address: ${user.location.state}, ${user.location.city}</p>
            <p>Age: ${user.dob.age}</p>
            <p>Phone: ${user.phone}</p>
        `;
        userContainer.appendChild(userCard);
    });
}