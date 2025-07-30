import './App.css';
import React from 'react';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Navigate,
    Route,
    RouterProvider,
} from 'react-router-dom';

import Layout from './routes/Layout';
import Upload from './component/upload/Upload';
import Settings from 'routes/Settings';

function App(): React.JSX.Element {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route>
                <Route path="/" element={<Layout />}>
                    <Route path="" element={<Navigate to={'upload'} />} />
                    <Route path="upload" element={<Upload />} />
                    <Route path="pdf-setting" element={<Settings />} />
                </Route>
            </Route>
        )
    );
    return <RouterProvider router={router} />;
}

export default App;
