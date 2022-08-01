<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
    <button @click="handleDelete" class="delete">Delete post</button>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import getSinglePost from "../composables/getSinglePost";
import Spinner from "../components/Spinner.vue";
import { useRoute, useRouter } from "vue-router"; //useRoute contains the information of current route
import { firestore } from "@/firebase/config";

export default {
  // props: ["id"], no need for accepting props, since id is fetched from route object

  components: { Spinner },

  setup() {
    const route = useRoute();
    const router = useRouter();

    const { post, error, loadData } = getSinglePost(route.params.id); //advantage: id can be fetched using useRoute without props

    loadData();

    const handleDelete = async () => {
      // delete() is used to delete a doc from firestore
      await firestore.collection("posts").doc(route.params.id).delete();
      router.push({ name: "home" });
    };

    return { post, error, handleDelete };
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
button.delete {
  margin: 10px auto;
}
</style>