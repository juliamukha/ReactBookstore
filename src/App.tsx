import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/HeaderComponents/Header/Header';
import Footer from './components/Footer/Footer';
import AllBooksPage from './pages/AllBooksPage/AllBooksPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import SignInPage from './pages/SignInPage/SignInPage';
import SelectedBookPage from './pages/SelectedBookPage/SelectedBookPage';
import SearchResultPage from './pages/SearchResultPage/SearchResultPage';

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <main className='main'>
          <div className="container">
            <Routes>
              <Route path='/' element={<AllBooksPage />} />
              <Route path='/post/:item' element={<SelectedBookPage />} />
              {/* <Route path='signIn' element={<SignInPage />} />
              <Route path='signUp' element={<SignUpPage />} />
              <Route path='searchResult' element={<SearchResultPage />} /> */}
            </Routes>
          </div>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}