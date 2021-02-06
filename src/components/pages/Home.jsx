import Header from '../base/Header';
import Main from '../base/Main';
import SideMenu from '../base/SideMenu'
import SideBar from '../base/SideBar';

function Home (){
    return(
        <div id="wrapper">
            <Header/>
            <SideMenu/>
            <Main/>
            <SideBar/>
        </div>
    )
}

export default Home;