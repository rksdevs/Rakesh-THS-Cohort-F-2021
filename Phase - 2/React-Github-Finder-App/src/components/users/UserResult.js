import { useContext } from "react";
import Spinner from "../layout/Spinner.js";
import UserItem from "./UserItem.js";
import GithubContext from "../../context/github/GithubContext.js";

const UserResult = () => {
  const { users, loading } = useContext(GithubContext);

  if (!loading) {
    return (
      <div className="grid grid-dash-col-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-clos-2">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
};

export default UserResult;
