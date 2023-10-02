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


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<HomeLayout/>}>
      <Route index element={<LandingPage/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/blog' element={<Blog/>}/>
    </Route>
    <Route path='/questions' element={<QuestionsLayout/>}>
      <Route index element={<Questions/>}/>
    </Route>
    <Route path='/apps' element={<AppsLayout/>}>
      <Route index element={<Questions/>}/>
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
