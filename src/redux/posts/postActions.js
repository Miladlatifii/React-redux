import axios from "axios";
import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_SUCCESS,
} from "./postTypes";

// action creator:

export function fetchPostsRequest(id) {
  return {
    type: FETCH_POSTS_REQUEST,
    payload: id,
  };
}

export function fetchPostsFailure(error) {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: error,
  };
}

export function fetchPostsSuccess(post) {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: post,
  };
}

// export const fetchPosts = () => {
//   return function (dispatch) {
//     dispatch(fetchPostsRequest());
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((res) => {
//         const posts = res.data;
//         dispatch(fetchPostsSuccess(posts));
//       })
//       .catch((error) => {
//         dispatch(fetchPostsFailure(error.message));
//       });
//   };
// };
