import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/home/landingPage';
import QuestionsLayout from './components/questions/questionsLayout';
import { ThemeProvider } from '@mui/material';
import HomeLayout from './components/home/homeLayout';
import Questions from './pages/questions/questions';
import AppsLayout from './components/apps/appsLayout';
import About from './pages/home/about.jsx'
import Blog from './pages/home/blog.jsx'
import {theme} from './styles/themes'
import Test from './pages/test';
import Login from './components/questions/login';
import Apps from './pages/apps/apps';
import Result from './pages/apps/result';


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<HomeLayout/>}>
      <Route index element={<LandingPage/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/blog' element={<Blog/>}/>
    </Route>
    {/* <Route path='/questions' element={<QuestionsLayout/>}>
    </Route> */}
    <Route path='/apps' element={<AppsLayout/>}>
      <Route path='/apps/questions' element={<Questions/>}/>
      <Route path='/apps/questions/login' element={<Login/>}/>
      <Route index element={<Apps/>}/>
      <Route path='/apps/result' element={<Result/>}/>
    </Route>
    <Route path='/test' element={<Test/>}/>
    </>
  )
)

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App;
