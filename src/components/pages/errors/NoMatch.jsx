function NoMatch() {
    return(
        <div>
            <div className="text-center" style={style}>
                <img src="images/not_found.JPG" alt="404" style={{width:"100%", opacity:0.5}} />
                <p className="text-uppercase" style={{position:"absolute", zIndex:10, top:"35%", color:"white", left:0, right:0, fontSize:"2em"}}>
                    Page est introuvable
                    <br/>
                    Il semble que tu te sois égaré
                </p>
            </div>
        </div>
    )   
}

const style= {
    width:"100%",
    height:"530px",
    overflow:"hidden",
    position:"relative",
    backgroundColor:"#000"
    // backgroundImage:"url(images/not_found.JPG)"
}
export default NoMatch;