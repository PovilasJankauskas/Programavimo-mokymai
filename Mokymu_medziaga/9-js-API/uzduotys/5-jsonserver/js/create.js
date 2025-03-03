const form = document.querySelector('form')
const successMessage = document.querySelector(".success");

const createPost = async (e) => {
    e.preventDefault()

    const doc = {
        title: form.title.value,
        body: form.body.value,
        likes: 0
    }

    const response = await fetch('http://localhost:3000/posts', {
        method: 'POST',
        body: JSON.stringify(doc),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.status === 201) {
        successMessage.style.display = "block";
        form.style.display = "none";
    }

};
form.addEventListener('submit', createPost)