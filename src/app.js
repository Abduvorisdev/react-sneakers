import Header from './components/Header'
import Card from './components/Card';
import Drawer from './components/Drawer';


import './app.scss';



function App() {
    return(
        <div className="wrapper clear">
            <Header/>                    
            <Drawer/>           
            <div className="content p-40">
                <div className='d-flex align-center justify-between mb-40'>
                    <h1>Все кроссовки </h1>
                    <div className='search-block d-flex'>
                        <img src="/img/search.svg" alt="search" />
                        <input placeholder='Поиск...' type="text" />
                    </div>
                </div>
                <div className='d-flex'>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </div>
    )
    
}


export default App;