import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import AddBook from '../components/AddBook';
import BooksList from '../components/BooksList';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <div className="main-content">
                    <Routes>
                        <Route path="/" element={<BooksList />} exact="true" />
                        <Route path="/add" element={<AddBook />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default AppRouter;