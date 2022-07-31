<template>
  <div class="tag">
    <h1>Posts with the selected tag</h1>
    <div v-if="error">{{ error }}</div>
    <!-- .layout code is reused from HomeView since scoped is not used -->
    <div v-if="currentTag.length" class="layout">
      <PostList :posts="currentTag" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import getPosts from "../composables/getPosts";
import PostList from "../components/PostList.vue";
import Spinner from "../components/Spinner.vue";
import TagCloud from "../components/TagCloud.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";

export default {
  components: {
    PostList,
    Spinner,
    TagCloud,
  },
  setup() {
    const route = useRoute();

    const { posts, error, loadData } = getPosts();

    loadData();

    const currentTag = computed(() => {
      return posts.value.filter((p) => p.tags.includes(route.params.tag));
    });

    return { error, posts, currentTag };
  },
};
</script>

<style>
.tag {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>