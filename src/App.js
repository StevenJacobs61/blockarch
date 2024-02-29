import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.scss";
import Home from "./pages/home";
import Questions from "./pages/questions/questions";
import Login from "./components/questions/login";
import Apps from "./pages/apps/apps";
import Result from "./pages/apps/result";
import Layout from "./components/layout.jsx/layout";
import QuestionsContextProivder from "./context/questionsContext";
import UserContextProvider from "./context/userContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/questions" element={<Questions />} />
      <Route path="/apps" element={<Apps />} />
      <Route path="/result" element={<Result />} />
    </Route>
  )
);

function App() {
  return (
    <QuestionsContextProivder>
      <UserContextProvider>
        <RouterProvider router={router} />
      </UserContextProvider>
    </QuestionsContextProivder>
  );
}

export default App;
