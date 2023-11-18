import React from 'react'
import './style.css'
import Header from "./components/Header"
import MainContent from './components/MainContent'
import Footer from './components/Footer'

export default function App() {
    return (
        <div className='card  warning my-5 rounded mx-auto bg-dark' id='main-card'>
            <div className="card-body">
                <Header />
                <MainContent />
            </div>
            <Footer />
        </div>


    )
}