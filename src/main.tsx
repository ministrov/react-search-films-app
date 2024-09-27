import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.js';
import { films } from './const/const';
import { UserProfileContextProvider } from "./context/user-profile.context.js";
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserProfileContextProvider>
      <BrowserRouter>
        <App films={films}/>
      </BrowserRouter>
    </UserProfileContextProvider>
  </StrictMode>,
)
