const newFormHandler = async (event) => {
  event.preventDefault();

  const post_name = document.querySelector("#blog-name").value.trim();
  const post_desc = document.querySelector("#blog-desc").value.trim();

  if (post_name && post_desc) {
    try {
      const response = await fetch("/api/blogs/blogs", {
        method: "POST",
        body: JSON.stringify({ post_name, post_desc }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      
        console.log(post_name);
        console.log(post_desc);
        if (response.ok) {
          document.location.replace("/profile");
        } else {
          alert("Failed to create post");
        }
    } catch (error) {
      console.error(error);
      alert("Failed to create post");
    }
  }
};

const formElement = document.querySelector(".new-blog-form");
if (formElement) {
  formElement.addEventListener("submit", newFormHandler);
}


const deleteBtn = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");
    console.log(id);
    const response = await fetch(`/api/blogs/${id}`, {
      method: "Delete",
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to delete post");
    }
  }
};

const delElement = document.querySelector(".blog-list");
if (delElement) {
  delElement.addEventListener("click", deleteBtn);
}
