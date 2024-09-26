import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.js';
import { films } from './const/const.js';
import { UserProfileContextProvider } from "./context/user-profile.context.jsx";
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProfileContextProvider>
      <App films={films}/>
    </UserProfileContextProvider>
  </StrictMode>,
)
