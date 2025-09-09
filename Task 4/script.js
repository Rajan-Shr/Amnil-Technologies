import { getData } from './fetchData.js';

document.addEventListener('DOMContentLoaded', async () => {
  const container = document.getElementById('data-container');

  try {
    const posts = await getData();

    posts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <hr />
      `;
      container.appendChild(postElement);
    });
  } catch (error) {
    container.innerHTML = `<p>Error: ${error.message}</p>`;
  }
});
