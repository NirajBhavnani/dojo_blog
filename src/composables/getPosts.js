// composable or composition function is used for code reusability
import { ref } from "@vue/reactivity";
const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const loadData = async () => {
    try {
      let data = await fetch("http://localhost:3000/posts");

      if (!data.ok) {
        throw Error("No data available");
      }

      posts.value = await data.json(); //parsing the json data into js
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { posts, error, loadData };
};

export default getPosts;
