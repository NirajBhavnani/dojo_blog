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
import getPosts from "../composables/getPosts";

export default {
  // Using CompositionAPI: setup function
  // This function will run before any other lifecycle hooks

  name: "HomeView",
  components: {
    PostList,
  },
  setup() {
    const { posts, error, loadData } = getPosts(); //object destructuring

    loadData();

    return { posts, error };
  },
};
</script>
