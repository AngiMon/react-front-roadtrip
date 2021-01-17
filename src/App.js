
import Header from './components/base/Header';
import Main from './components/base/Main';
import SideMenu from './components/base/SideMenu'
import SideBar from './components/base/SideBar';
import useScript from './hooks/useScript';

function App() {
  //external files loading
  useScript('/lib/jquery.min.js');
  useScript('/lib/browser.min.js');
  useScript('/lib/breakpoints.min.js');
  useScript('/lib/util.js');
  useScript('/lib/main.js');

  return (
    <div id="wrapper">
      <Header/>
      <SideMenu/>
      <Main/>
      <SideBar/>
    </div>
  );
}

export default App;
