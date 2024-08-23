import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import signin from './pages/signin'
import SignUp from './pages/SignUp'
import about from './pages/about'
import Profile from './pages/Profile'


export default function App() {
  return (
    // <div>App</div>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signin" element={<signin />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/about" element={<about />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}
