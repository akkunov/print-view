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
import Settings from 'routes/Settings';
import Upload from 'routes/Upload';
import { getAllEnvProfile } from 'fetch/FetchEnvProfiles';
import Donate from './routes/Donate';
import { getAllNoteProfile } from './fetch/FetchNoteProfiles';

function App(): React.JSX.Element {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route>
                <Route path="/" element={<Layout />}>
                    <Route path="" element={<Navigate to={'upload'} />} />
                    <Route path="upload" element={<Upload />} />
                    <Route
                        path="pdf-setting"
                        element={<Settings />}
                        loader={async () => {
                            const [envRes, noteRes] = await Promise.allSettled([
                                getAllEnvProfile(),
                                getAllNoteProfile(),
                            ]);
                            const env = envRes.status === 'fulfilled' ? envRes.value : [];
                            const note = noteRes.status === 'fulfilled' ? noteRes.value : [];
                            return { env, note };
                        }}
                    />
                    <Route path="donate" element={<Donate />} />
                </Route>
            </Route>
        )
    );
    return <RouterProvider router={router} />;
}

export default App;
