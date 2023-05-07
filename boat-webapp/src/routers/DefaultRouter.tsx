import {
  createBrowserRouter,
  createRoutesFromElements,
  redirect,
  Route,
} from 'react-router-dom';

import BoatsPage from '../app/boats';
import BoatPage from '../app/boats/[id]';
import LoginPage from '../app/login';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" loader={() => redirect('/login')} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/boats" element={<BoatsPage />} />
      <Route path="/boats/:boatId" element={<BoatPage />} />
    </Route>,
  ),
);

export default router;
