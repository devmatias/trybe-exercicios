import "./style.css";

import {
  fillUsersSelect,
  fillPosts,
  fillFeaturedPostComments,
  clearPageData,
  fillErrorMessage,
} from "./utils/updateUI";

const usersSelect = document.querySelector("#users-select");

const USERS_API = "https://dummyjson.com/users";

const POSTS_API = "https://dummyjson.com/posts";
// faça a lógica para pegar as informações das pessoas usuárias e preencher o select aqui.
fetch(USERS_API)
  .then((response) => response.json())
  .then((data) => {
    console.log(data.users);
    return fillUsersSelect(data.users);
  })
  .catch((error) => console.log(error));

usersSelect.addEventListener("change", (e) => {
  clearPageData();

  // faça a lógica para pegar as informações dos posts da pessoa selecionada e dos comentários do post destacado aqui.
  fetch(`${POSTS_API}/user/${e.target.value}`)
    .then((response) => response.json())
    .then((data) => {
      const { posts } = data;
      fillPosts(posts);
      const [featuredPost] = posts;
      return fetch(`${POSTS_API}/${featuredPost.id}/comments`);
    })
    .then((response) => response.json())
    .then((data) => fillFeaturedPostComments(data.comments))
    .catch((error) => fillErrorMessage(error));
});
