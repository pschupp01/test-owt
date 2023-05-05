import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import App from '../app';
import BoatsPage from '../app/boats';
import BoatPage from '../app/boats/[id]';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<App />} />
      <Route path="/boats" element={<BoatsPage />} />
      <Route path="/boats/:boatId" element={<BoatPage />} />
    </Route>,
  ),
);

export default router;
