import {Route, Routes} from 'react-router-dom';
import Header from "./components/layout/Header"
import Home from "./components/pages/Home"
import TeamPage from './components/pages/TeamPage';
import NewsPage from "./components/pages/NewsPage.tsx";
import Footer from './components/layout/Footer.tsx';
import LiveEvents from './components/common/LiveEvents.tsx';

function App() {

    return (
        <>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/team-details/:teamId' element={<TeamPage/>}/>
                <Route path='/news' element={<NewsPage/>}/>
                <Route path='/live-events' element={<LiveEvents page='team'/>}/>
            </Routes>
            <Footer/>
        </>
    )
}

export default App
