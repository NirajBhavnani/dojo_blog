<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
import { ref } from "@vue/reactivity";
export default {
  // Using CompositionAPI: setup function
  // This function will run before any other lifecycle hooks

  name: "HomeView",
  components: {
    PostList,
  },
  setup() {
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

    loadData();

    return { posts, error };
  },
};
</script>
