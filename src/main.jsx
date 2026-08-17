import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import { createBrowserRouter, RouterProvider, BrowserRouter } from 'react-router'
import App from './App.jsx';

// const appRouter = createBrowserRouter([
//     {
//       path: '/',
//       element: <App />
//     },
//   ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RouterProvider router={appRouter} /> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
