import React from 'react';
import pic01 from'./images/pic01.jpg';
import pic02 from'./images/pic02.jpg';
import pic03 from'./images/pic03.jpg';
import pic04 from'./images/pic04.jpg';
import pic05 from'./images/pic05.jpg';
import pic06 from'./images/pic06.jpg';



const HomeBody = () => {
	return (
		
		<div>
			{/* Banner Section */}
			<section id="banner">
				<h1>Welcome to Theory</h1>
				<p>A free responsive HTML5 website template by TEMPLATED.</p>
			</section>
			
			{/* body section on home page */}
			<section id="one" className="wrapper">
				<div className="inner">
					<div className="flex flex-3">
						<article>
							<header>
								<h3>Magna tempus sed amet<br /> aliquam veroeros</h3>
							</header>
							<p>Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu.</p>
							<footer>
								<a href="#" className="button special">More</a>
							</footer>
						</article>
						<article>
							<header>
								<h3>Interdum lorem pulvinar<br /> adipiscing vitae</h3>
							</header>
							<p>Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu.</p>
							<footer>
								<a href="#" className="button special">More</a>
							</footer>
						</article>
						<article>
							<header>
								<h3>Libero purus magna sapien<br /> sed ullamcorper</h3>
							</header>
							<p>Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu.</p>
							<footer>
								<a href="#" className="button special">More</a>
							</footer>
						</article>
					</div>
				</div>
			</section>

			<section id="two" className="wrapper style1 special">
				<div className="inner">
					<header>
						<h2>Ipsum Feugiat</h2>
						<p>Semper suscipit posuere apede</p>
					</header>
					<div className="flex flex-4">
						<div className="box person">
							<div className="image round">
								<img src={pic03} alt="Person 1" />
							</div>
							<h3>Magna</h3>
							<p>Cipdum dolor</p>
						</div>
						<div className="box person">
							<div className="image round">
								<img src={pic04} alt="Person 2" />
							</div>
							<h3>Ipsum</h3>
							<p>Vestibulum comm</p>
						</div>
						<div className="box person">
							<div className="image round">
								<img src={pic05} alt="Person 3" />
							</div>
							<h3>Tempus</h3>
							<p>Fusce pellentes</p>
						</div>
						<div className="box person">
							<div className="image round">
								<img src={pic06} alt="Person 4" />
							</div>
							<h3>Dolore</h3>
							<p>Praesent placer</p>
						</div>
					</div>
				</div>
			</section>

			<section id="three" className="wrapper special">
				<div className="inner">
					<header className="align-center">
						<h2>Nunc Dignissim</h2>
						<p>Aliquam erat volutpat nam dui </p>
					</header>
					<div className="flex flex-2">
						<article>
							<div className="image fit">
								<img src={pic01} alt="Pic 01" />
							</div>
							<header>
								<h3>Praesent placerat magna</h3>
							</header>
							<p>Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor lorem ipsum.</p>
							<footer>
								<a href="#" className="button special">More</a>
							</footer>
						</article>
						<article>
							<div className="image fit">
								<img src={pic02} alt="Pic 02" />
							</div>
							<header>
								<h3>Fusce pellentesque tempus</h3>
							</header>
							<p>Sed adipiscing ornare risus. Morbi est est, blandit sit amet, sagittis vel, euismod vel, velit. Pellentesque egestas sem. Suspendisse commodo ullamcorper magna non comodo sodales tempus.</p>
							<footer>
								<a href="#" className="button special">More</a>
							</footer>
						</article>
					</div>
				</div>
			</section>
		</div>
	)
}

export default HomeBody;