import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LayOut from './Components/LayOut/LayOut';
import Home from './Components/Home/Home';
import Artist from './Components/Artist/Artist';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import NotFound from './Components/NotFound/NotFound';

const routes = createBrowserRouter([
  {
    path: '',
    element: <LayOut />,
    children: [{ index:true, element: <Home /> },
      { path: 'artist', element: <Artist /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      {path:"*",element:<NotFound/>}
    ],
  },
]);

function App() {
  return (
   <RouterProvider router={routes}>
    </RouterProvider>
  );
}

export default App;
