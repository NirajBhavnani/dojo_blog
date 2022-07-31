<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import getSinglePost from "../composables/getSinglePost";
import Spinner from "../components/Spinner.vue";
import { useRoute } from "vue-router"; //useRoute contains the information of current route

export default {
  // props: ["id"], no need for accepting props, since id is fetched from route object

  components: { Spinner },

  setup() {
    const route = useRoute();

    const { post, error, loadData } = getSinglePost(route.params.id); //advantage: id can be fetched using useRoute without props

    loadData();

    return { post, error };
  },
};
</script>

<style scoped>
.tags a {
  margin-right: 10px;
}
.post {
  max-width: 1200px;
  margin: 0 auto;
}
.post p {
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
}
.pre {
  white-space: pre-wrap;
}
</style>