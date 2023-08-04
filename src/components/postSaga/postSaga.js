import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsRequest } from "../../redux/posts/postActions";

const PostSaga = () => {
  const [postId, setPostId] = useState("");
  const { loading, error, data } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Redux-Saga middleware</h1>
      <input
        type="text"
        value={postId}
        onChange={(e) => setPostId(e.target.value)}
      />
      <button onClick={() => dispatch(fetchPostsRequest(postId || 1))}>
        get posts
      </button>
      {loading ? (
        <p>loading ....</p>
      ) : error ? (
        <p>{error}</p>
      ) : data.title ? (
        <div>
          <p>post title : {data.title}</p>
          <p>post body : {data.body}</p>
        </div>
      ) : (
        <p>fetch some post</p>
      )}
    </>
  );
};

export default PostSaga;
