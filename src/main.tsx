import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.js';
import { films } from './const/const';
import { UserProfileContextProvider } from "./context/user-profile.context.js";
import './index.css';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <UserProfileContextProvider>
      <App films={films}/>
    </UserProfileContextProvider>
  </StrictMode>,
)
