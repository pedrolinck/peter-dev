import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AboutPage from './pages/About.jsx';
import ContactPage from './pages/Contact.jsx';
import ProjectsPage from './pages/Projects.jsx';
import RootLayout from './pages/Root.jsx';
import HomePage from './pages/Home.jsx';

// one approach
// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<HomePage />}/>
//     <Route path='/about' element={<AboutPage />}/>
//   </Route>
// )

// const router = createBrowserRouter(routeDefinitions)

// another approach
const router = createBrowserRouter([
  {
    path: '/', 
    element: <RootLayout/>,
    children:[
      {path: '/', element: <HomePage />},
      {path: '/About', element: <AboutPage />},
      {path: '/Contact', element: <ContactPage />},
      {path: '/Projects', element: <ProjectsPage />}
    ]
  }
]);

export default function App() {
  return <div className='w-11/12 m-auto '>
    <RouterProvider router={router}/>
  </div>
}