import {Link} from 'react-router-dom';
import { selectAllUsers } from "../../slice/UsersSlice";
import { useSelector } from "react-redux";
import AddNewAuthor from "./AddNewAuthor";
import Header from "../Header/Header";

function UserList() {
  const users = useSelector(selectAllUsers);

  return (
    <div>
      <Header />
      <div className="max-w-4xl underline mx-auto mb-4 mt-4 text-2xl font-bold">
        {users.map((user) => (
          <div className="text-xl font-medium text-gray-900" key={user.id}>
            <Link key={user.id} to={`/users/${user.id}`}>
              {user.name}
            </Link>
          </div>
        ))}
        <AddNewAuthor />
      </div>
    </div>
  );
}         

export default UserList;