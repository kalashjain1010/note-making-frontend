import { Route, Routes } from "react-router-dom";
import "./App.css";
import Public from "./components/Public";
import Layout from "./components/Layout";
import Login from "./features/auth/Login";
import DashLayout from "./components/DashLayout";
import Welcome from "./features/auth/Welcome";
import NotesList from "./features/notes/NotesList";
import UserList from "./features/users/UserList";
import EditUser from "./features/users/EditUser";
import NewUserForm from "./features/users/NewUserForm";
import EditNote from "./features/notes/EditNote";
import NewNote from "./features/notes/NewNote";
import Prefetch from "./features/auth/PreFetch";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Public />} />
          <Route path="login" element={<Login />} />

          <Route element={<Prefetch />} >

          <Route path="dash" element={<DashLayout />}>


            <Route index element={<Welcome />} />

            <Route path="users">
              <Route index element={<UserList />} />
              <Route path=":id" element={<EditUser />} />
              <Route path="new" element={<NewUserForm />} />
              
            </Route>

            <Route path="notes">
              <Route index element={<NotesList />} />
              <Route path=":id" element={<EditNote />} />
              <Route path="new" element={<NewNote />} />
            </Route>


          </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
