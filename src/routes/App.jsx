import { BrowserRouter, Route, Routes } from 'react-router-dom'; // COMPONENTS
import { Home } from '../pages/home/Home'; // COMPONENT

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export { App };
