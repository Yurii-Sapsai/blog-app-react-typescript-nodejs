import { useEffect } from 'react';
import Header from "./components/Header/Header";
import HomePage from './pages/HomePage/HomePage';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from './store/hooks';
import { fetchPostAPI } from './store/postSlice/asyncAction';

function App() {

  const store = useAppSelector((state) => state)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchPostAPI())
  }, [])

  return (
    <div >
      <Router >

        <Header />

        <Routes>

          <Route path="/" element={<HomePage />} />

          {/*     <Route path="/admin/" element={<ProtectedRoute> <AdminPage /> </ProtectedRoute>} />
            <Route path="/admin/login" element={<LoginPage />} />
            <Route path="/admin/registration" element={<RegistrationPage />} /> */}

        </Routes>

      </Router>
    </div>
  );
}

export default App;
