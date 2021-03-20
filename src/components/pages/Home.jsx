import Header from '../base/Header';
import SideMenu from '../base/SideMenu'
import SideBar from '../base/SideBar';

const Home = (props) =>{

    return(
        <div id="wrapper">
            <Header/>
            <SideMenu/>
                {props.children}
            <SideBar/>
        </div>
    )
}

export default Home;