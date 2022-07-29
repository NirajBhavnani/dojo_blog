import { ref } from "vue";

const getSinglePost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const loadData = async () => {
    try {
      // simulate delay
      await new Promise((resolve) => {
        setTimeout(resolve, 2000);
      });

      let data = await fetch("http://localhost:3000/posts/" + id);

      if (!data.ok) {
        throw Error("Post does not exists");
      }

      post.value = await data.json(); //parsing the json data into js
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { post, error, loadData };
};

export default getSinglePost;
