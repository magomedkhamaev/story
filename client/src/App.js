 import React from "react";
 import { Routes, Route } from "react-router-dom";
// import Container from "@mui/material/Container";
import Register from "./pages/Registration";
import Author from "./pages/Author";
import Home from "./pages/Home";
import Login from "./pages/Login";
import FullPost from "./pages/FullPost";
import Update from "./pages/Update";
import { AddPost } from "./pages/AddPost";
import { useDispatch, useSelector } from "react-redux"; 
import { fetchAuthMe, selectIsAuth } from "./redux/slices/auth";
import Profile from "./pages/Profile";
import { Index } from "./components/AddComment";
import CommentsBlock from "./components/CommentsBlock";
import  Search from "./components/Search";

// //import {logout} from './redux/slices/auths';

 function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

   React.useEffect(()=> {
       dispatch(fetchAuthMe());
  }, [])

   return (
      
          <Routes>
          <Route path="/" element= {<Home />} />  
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<Search />} />
          <Route path="/register" element={<Register />} /> 
          <Route path="/posts/:id" element={<FullPost />} />  
          <Route path="/user/:id" element={<Author />} />
          <Route path="/posts/:id/edit" element={<AddPost />} />
          <Route path="/add-post" element={<AddPost />} />
          <Route path="/update" element={<Update />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/comments" element={<CommentsBlock />} />
          </Routes>                
    
   );
 }

 export default App;
