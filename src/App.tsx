import { RouterProvider, Routes } from 'react-router-dom';
import router from './Router';
import Nav from './components/Nav';

function App() {

  return (
    <div>
      <RouterProvider router={router} /> 
    </div>
  )
}

export default App
