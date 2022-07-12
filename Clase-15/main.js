const lista = document.querySelector("#listado");
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((post) => {
      const li = document.createElement("li");
      li.innerHTML = `<h4>${post.title}</h4>
                      <p>${post.body}</p>`;
      lista.append(li);
    });
  });
