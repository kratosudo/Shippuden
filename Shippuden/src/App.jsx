import React,{ BrowserRouter as Router, Routes, Route } from 'react';
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import CharacterDetails from "./pages/CharacterDetails";
import NavBar from './components/NavBar';
import ProtectedRoute from './components/protectedRoutes';
import { AuthProvider } from './context/authContext';
import './App.css'


function App() {
  

  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <div className='container mx-auto p-4'>
          <Routes>
            <Route path="/" element={<ProtectedRoute>
              <Home/>
            </ProtectedRoute>}
            />
            <Route path="/login" element={<Login/>}/>
            <Route path="/SignUp" element={<SignUp/>}/>
            <Route path="/character/:id" element={
              <ProtectedRoute>
                <CharacterDetails/>
              </ProtectedRoute>
            }
            />
            

          </Routes>

        </div>

      </Router>

    </AuthProvider>

  )
}

export default App;
