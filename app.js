fetch("https:jsonplaceholder.typicode.com/posts")
  .then(function (response) {
    return response.json();
  })
  .then(function (posts) {
    posts.forEach((post) => {
      let postdiv = document.createElement("div");
      postdiv.classList.add("posts");
      let title = document.createElement("h2");
      title.classList.add("title");
      let body = document.createElement("p");
      body.classList.add("body");

      title.innerText = post.title;
      body.innerHTML = post.body;

      postdiv.appendChild(title);
      postdiv.appendChild(body);

      console.log(postdiv);

      document.body.appendChild(postdiv);
    });
  });
