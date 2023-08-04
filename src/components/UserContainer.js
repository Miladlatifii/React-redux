import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/user/userActions";

const UserContainer = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);
  const { users, error, loading } = userData;

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const renderUser = () => {
    if (loading) return <p>loading...</p>;
    if (!loading && error) return <p>{error}</p>;
    if (!loading && !error && userData && users.length)
      return (
        <div>
          <h2>user list</h2>
          {users.map((user) => (
            <p key={user.id}>{user.name}</p>
          ))}
        </div>
      );
  };

  return <div>{renderUser()}</div>;
};

export default UserContainer;

// {loading ? (
//     <p>loading...</p>
//   ) : error ? (
//     <p>{error}</p>
//   ) : (
//     userData &&
//     users &&
//     users.length && (
//       <div>
//         <h2>user list</h2>
//         {users.map((user) => (
//           <p key={user.id}>{user.name}</p>
//         ))}
//       </div>
//     )
//   )}
