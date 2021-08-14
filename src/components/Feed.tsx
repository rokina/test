import { auth } from "../firebase";

const Feed: React.FC = () => {
  return (
    <div>
      Feed
      <button onClick={() => auth.signOut()}>Logout</button>
    </div>
  );
};

export default Feed;
