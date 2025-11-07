import { Routes, Route } from "react-router-dom";
import BooksDisplay from "../components/Books/BooksDisplay";
import UserList from "../components/Users/UserList";
import UserItem from "../components/Users/UserItem";
import Login from "../components/Login/Login";
import Layout from "../components/Header/Layout";

function RouterFunction() {
  return (
    <Routes>
      <Route path="/home" element={<Layout />}>
        <Route index element={<BooksDisplay />} />
      </Route>
      <Route path="/users">
        <Route index element={<UserList />} />
        <Route path=":userId" element={<UserItem />} />
      </Route>
      <Route path="/login">
        <Route index element={<Login />} />
        <Route path="/home" element={<BooksDisplay />} />
      </Route>
    </Routes>
  );
}

export default RouterFunction;
