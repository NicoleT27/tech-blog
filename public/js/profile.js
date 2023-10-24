// const newFormHandler = async (event) => {
//   event.preventDefault();

//   const post_name = document.querySelector("#blog-name").value.trim();
//   const post_desc = document.querySelector("#blog-desc").value.trim();
 

//   if (post_name && post_desc) {
//     const response = await fetch(`/api/users/blogs`, {
//       method: 'POST',
//       body: JSON.stringify({ post_name, post_desc}),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert('Failed to create post');
//     }
//   }
// };
// ///////////////////////////////////////////
// const delButtonHandler = async (event) => {
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     const response = await fetch(`/api/projects/${id}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert('Failed to delete project');
//     }
//   }
// };

// document
//   .querySelector('.new-blog-form')
//   .addEventListener('submit', newFormHandler);
// /////////////////////////////////////////////////////////
// document
//   .querySelector('.project-list')
//   .addEventListener('click', delButtonHandler);
// /////////////////////////////////////////////////////////
const newFormHandler = async (event) => {
  event.preventDefault();

  const post_name = document.querySelector("#blog-name").value.trim();
  const post_desc = document.querySelector("#blog-desc").value.trim();

  if (post_name && post_desc) {
    try {
    const response = await fetch("/api/users/blogs", {
      method: "POST",
      body: JSON.stringify({ post_name, post_desc }),
      headers: {
        "Content-Type": "application/json",
      },
    });
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create post');
      }
    } catch (error) {
      console.error(error);
      alert('Failed to create post');
    }
  }
};

const formElement = document.querySelector('.new-blog-form');
if (formElement) {
  formElement.addEventListener('submit', newFormHandler);
}