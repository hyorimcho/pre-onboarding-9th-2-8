import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
