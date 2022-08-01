// composable or composition function is used for code reusability
import { ref } from "@vue/reactivity";
import { firestore } from "@/firebase/config";
const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const loadData = async () => {
    try {
      // it creates a reference to that collection
      // collection() connects us to a specific collection in our db
      // get() is used to grab the data and returns it to us, also it's asynchronous
      // orderBy() is used to order the data
      const res = await firestore
        .collection("posts")
        .orderBy("createdAt", "desc")
        .get();

      posts.value = res.docs.map((doc) => {
        // we have to return doc id as well
        // the id is ON the document in Firestore not IN the document
        return { ...doc.data(), id: doc.id };
      });
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { posts, error, loadData };
};

export default getPosts;
