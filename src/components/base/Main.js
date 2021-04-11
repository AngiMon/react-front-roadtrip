import {ArticlesContainer} from '../../Redux/containers/Articles'

function Main (props){

    return(
        <div id="main">
            {/* <!-- Post --> */}
            <ArticlesContainer />
        </div>
    )
}

export default Main;