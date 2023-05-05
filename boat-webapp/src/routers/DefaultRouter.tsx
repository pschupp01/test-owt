import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom";
import App from '../app';
import OverviewPage from "../app/overview";

const router = createBrowserRouter(
createRoutesFromElements(
    <Route>
        <Route path="/" element={<App />}/>
        <Route path="/overview" element={<OverviewPage />} />
    </Route>
    )
);

export default router;