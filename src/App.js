import './App.css';
import SignupForm from './pages/create-profile';
import Profile from './pages/profile/profile';
import Welcome from './pages/Welcome-page/Welcome';
import Edit from './pages/Modal/modal'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProfileProvider, useLocalStorage } from './context/ProfileContext';
import { useState } from 'react';

function App() {
  const { value, setValue } = useLocalStorage("values", []);
  const [visible, setVisible] = useState(false)
  const handleOpen = () => {
    setVisible((prev) => !prev)
  };
  return (
    <div className="App">
      <ProfileProvider value={{ value, setValue, handleOpen, visible }}>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Welcome />} />
          <Route path='/sign' element={<SignupForm />} />;
          <Route path='/profile' element={<Profile />} />
          <Route path='/edit' element={<Edit />} />
        </Routes>
      </BrowserRouter>
      </ProfileProvider>
    </div>
  );
}

export default App;
