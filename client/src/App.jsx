import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Posts from "./pages/Posts"
import Videos from "./pages/Videos"
import Podcasts from "./pages/Podcasts"
import Channels from "./pages/Channels"
import Search from "./pages/Search"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts/>} />
        <Route path="/videos" element={<Videos/>} />
        <Route path="/podcasts" element={<Podcasts/>} />
        <Route path="/channels" element={<Channels/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/sign-in" element={<SignIn/>} />
        <Route path="/sign-up" element={<SignUp/>} />
      </Routes>
    </BrowserRouter>
  )
}
