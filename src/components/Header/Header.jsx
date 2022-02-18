import React from 'react';

import './header.css';

const Header = () => {
	return (
		<div className='container'>
			<div className='d-flex flex-space-around my-3'>
				<div className='d-flex left-sided-navigation'>
					<div className='logo-text d-flex'>
						<h1>robotFarm</h1>
					</div>
					<ul className='d-flex px-6'>
						<li>
							<a href='/'>Home</a>
						</li>
						<li>
							<a href='/projects'>Projects</a>
						</li>
						<li>
							<a href='/'>About Me</a>
						</li>
					</ul>
				</div>
				<div className='d-flex'>
					<button className='btn-blue'>
						<span className='btn-text'>Sign Up</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Header;
