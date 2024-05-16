import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import Login from "./pages/login";
import LoginForm from "./pages/login";
import SignupupForm from "./pages/signup";




function App() {
    
  return (
    <BrowserRouter>
    <Routes>
      { <><Route path='/' element={<Landing />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<SignupupForm />} />
      <Route path='*' element={<Landing />} />
      
      </>
      

       }
    </Routes>
    </BrowserRouter>
  )
}

export default App