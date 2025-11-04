import { Routes, Route } from "react-router-dom";
import BooksDisplay from "../components/Books/BooksDisplay";
import UserList from "../components/Users/UserList";
import UserItem from "../components/Users/UserItem";
// @ts-expect-error: no declaration file for Layout.jsx
import Layout from "../components/Header/Layout";

function RouterFunction() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>        
        <Route index element={<BooksDisplay/>} />
      </Route>
      <Route path="/users">
        <Route index element={<UserList />} />
        <Route path=":userId" element={<UserItem/>} />
      </Route>
    </Routes>
  );
}

export default RouterFunction;
          
