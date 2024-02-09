import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.scss";
import Home from "./pages/home";
import Questions from "./pages/questions/questions";
import AppsLayout from "./components/apps/appsLayout";
import Login from "./components/questions/login";
import Apps from "./pages/apps/apps";
import Result from "./pages/apps/result";
import Layout from "./components/layout.jsx/layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
      {/* <Route path='/questions' element={<QuestionsLayout/>}>
    </Route> */}
      <Route path="/apps" element={<AppsLayout />}>
        <Route path="/apps/questions" element={<Questions />} />
        <Route path="/apps/questions/login" element={<Login />} />
        <Route index element={<Apps />} />
        <Route path="/apps/result" element={<Result />} />
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
