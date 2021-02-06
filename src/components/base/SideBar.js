import { useTranslation } from 'react-i18next';

function SideBar (){
    const { t } = useTranslation();

    return(
        <section id="sidebar">

            {/* <!-- Intro --> */}
            <section id="intro">
                <a href="/" className="logo"><img src="images/logo.jpg" alt="" /></a>
                <header>
                    <h2>{t("sidebar").title}</h2>
                    <p>{t("sidebar").description}</p>
                </header>
            </section>

            {/* <!-- Mini Posts --> */}
            <section>
                <div className="mini-posts">
                    {/* <!-- Mini Post --> */}
                    <article className="mini-post">
                        <header>
                            <h3><a href="single.html">Vitae sed condimentum</a></h3>
                            <time className="published" dateTime="2015-10-20">October 20, 2015</time>
                            <a href="/" className="author"><img src="images/avatar.jpg" alt="" /></a>
                        </header>
                        <a href="single.html" className="image"><img src="images/pic04.jpg" alt="" /></a>
                    </article>
                </div>
            </section>

	{/* <!-- Posts List --> */}
		<section>
			<ul className="posts">
				<li>
					<article>
						<header>
							<h3><a href="single.html">Lorem ipsum fermentum ut nisl vitae</a></h3>
							<time className="published" dateTime="2015-10-20">October 20, 2015</time>
						</header>
						<a href="single.html" className="image"><img src="images/pic08.jpg" alt="" /></a>
					</article>
				</li>
			</ul>
		</section>

	{/* <!-- About --> 
		<section className="blurb">
			<h2>About</h2>
			<p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod amet placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at phasellus sed ultricies.</p>
			<ul className="actions">
				<li><a href="/" className="button">Learn More</a></li>
			</ul>
		</section> */}

	{/* <!-- Footer --> */}
		<section id="footer">
			<ul className="icons">
				<li><a href="/" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
				<li><a href="/" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
				<li><a href="/" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
				<li><a href="/" className="icon solid fa-rss"><span className="label">RSS</span></a></li>
				<li><a href="/" className="icon solid fa-envelope"><span className="label">Email</span></a></li>
			</ul>
			<p className="copyright">&copy; Untitled. Design: <a href="http://html5up.net">HTML5 UP</a>. Images: <a href="http://unsplash.com">Unsplash</a>.</p>
		</section>

</section>
    )
}

export default SideBar;