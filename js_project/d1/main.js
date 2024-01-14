  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        const container = document.body;

        users.forEach(user => {
             const userBlock = document.createElement('div');
            userBlock.innerHTML = `<p>ID: ${user.id}</p><p>Name: ${user.name}</p>`;

            const detailsButton = document.createElement('button');
            detailsButton.innerText = 'Details';
            detailsButton.addEventListener('click', () => {
                window.location.href = `user-details.html?id=${user.id}`;
            });

            const postsButton = document.createElement('button');
            postsButton.innerText = 'Post of current user';
            postsButton.addEventListener('click', () => {
                window.location.href = `user-posts.html?id=${user.id}`;
            });

            userBlock.appendChild(detailsButton);
            userBlock.appendChild(postsButton);


            container.appendChild(userBlock);
        });
    })
    .catch(error => {
        console.error('Помилка отримання даних:', error);
    });

