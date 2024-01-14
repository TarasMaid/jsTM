const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('id');

// Використовуємо ID для отримання всіх постів користувача
fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
    .then(response => response.json())
    .then(posts => {
        const userPostsContainer = document.getElementById('userPostsContainer');


        userPostsContainer.innerHTML += '<h2>User Posts</h2>';

        posts.forEach(post => {
            const postBlock = document.createElement('div');
            postBlock.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;

            userPostsContainer.appendChild(postBlock);
        });
    })
    .catch(error => {
        console.error('Помилка отримання даних:', error);
    });

// Додаємо обробник події для кнопки "Back to User Details"
document.querySelector('.details-button').addEventListener('click', () => {
    // Переадресовуємо на сторінку "user-details.html" з параметрами ID користувача
    window.location.href = `user-details.html?id=${userId}`;
});