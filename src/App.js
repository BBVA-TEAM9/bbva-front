import React, { createContext, useContext, useEffect, useState } from 'react';

import Main from './pages/layout/Main';
import './app.css';
import { library } from '@fortawesome/fontawesome-svg-core';

import { faTimes, faBars, faTrash, faTachometerAlt, faChartLine, faSignOutAlt, faChevronDown, faPoll, faEdit, faClipboardList, faFolder } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, MemoryRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
//----------------------------------------------------------------



//----------------------------------------------------------------


library.add(faTimes, faBars, faTachometerAlt, faChartLine, faSignOutAlt, faChevronDown, faPoll, faEdit, faTrash, faClipboardList, faFolder)

const App = () => {


    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main></Main>}></Route>
            </Routes>
        </Router>
    )
}

export default App;