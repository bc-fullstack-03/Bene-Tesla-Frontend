import { BrowserRouter, Route, Routes } from "react-router-dom"
import NotFound from "./pages/404/notfoundpage"
import Friends from "./pages/Friends/Friends"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import Post from "./pages/Post/Post"
import PostDetail from "./pages/PostDetail/PostDetail"
import Profile from "./pages/Profile/Profile"
import SignUp from "./pages/Signup/SigIn"


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/Friends" element={<Friends />} />
          <Route path= "/Home" element={<Home />} />
          <Route path="/Post" element={<Post />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Post" element={<Post />} />
          <Route path= "/Post/:postId"  element={<PostDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
