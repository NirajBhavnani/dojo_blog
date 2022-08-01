import { firestore } from "@/firebase/config";
import { ref } from "vue";

const getSinglePost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const loadData = async () => {
    try {
      // Here, id is fetched from address bar which is equal to firestore collection id
      // doc(id) is used to grab one single document
      let res = await firestore.collection("posts").doc(id).get();

      // exists is a property inside res(Firestore) object
      if (!res.exists) {
        throw Error("Post does not exists");
      }

      post.value = { ...res.data(), id: res.id };
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { post, error, loadData };
};

export default getSinglePost;
