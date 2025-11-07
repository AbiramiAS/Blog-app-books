import { addUsers } from "../../slice/UsersSlice";
import { useSelector, useDispatch } from "react-redux";
import { selectAllUsers } from "../../slice/UsersSlice";
import type { AppDispatch } from "../../store/store";

const AddNewAuthor = () => {
  const users = useSelector(selectAllUsers);
  const dispatch = useDispatch<AppDispatch>();
  const addUserNew = () => {
    const authorName = prompt("Enter the author's name:");
    if (!authorName) return;

    const newUserId = users.length > 0 ? Math.max(...users.map((u) => u.id)) + 1 : 1;
    const newUser = { id: newUserId, name: authorName };
    dispatch(addUsers(newUser)).unwrap();
  }
  return (
    <>
      <div>
        <button className="bg-blue-400 text-white text-md rounded p-1 mt-3"
          type="button"
          onClick={addUserNew}
        >
          Add New Author
        </button>
      </div>
    </>
  );
};

export default AddNewAuthor;
