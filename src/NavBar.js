import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// componenets
import Home from './Home';
import {Events} from './Events';
import {Accommodations} from './Accommodations';
import {WeddingParty} from './WeddingParty';
import {OurStory} from './OurStory';
import {Photos} from './Photos';
import {RSVP} from './RSVP';
// CSS
import './styles/NavBar.css'

export const NavBar = () => (
	<Router>
		<div>
			<div className='NavBar'>
				<nav className='NavBar-container'>
					<div className='NavBar-main'>
						#RinaKaHiral • July 6th, 2019 • Oakbrook Terrace, Illinois
					</div>
					<ul className='NavBar-options'>
						<li className='NavBar-option'>
							<Link to="/">Home</Link>
						</li>
						<li className='NavBar-option'>
							<Link to="/events/">Events</Link>
						</li>
						<li className='NavBar-option'>
							<Link to="/accommodations/">Accommodations</Link>
						</li>
						<li className='NavBar-option'>
							<Link to="/weddingparty/">Wedding Party</Link>
						</li>
						<li className='NavBar-option'>
							<Link to="/ourstory/">Our Story</Link>
						</li>
						<li className='NavBar-option'>
							<Link to="/photos/">Photos</Link>
						</li>
						<li className='NavBar-option'>
							<Link to="/rsvp/">RSVP</Link>
						</li>
					</ul>
				</nav>
			</div>
			<Route path="/" exact component={Home} />
			<Route path="/events/" component={Events} />
			<Route path="/accommodations/" component={Accommodations} />
			<Route path="/weddingparty/" component={WeddingParty} />
			<Route path="/ourstory/" component={OurStory} />
			<Route path="/photos/" component={Photos} />
			<Route path='/rsvp/' component={RSVP}/>
		</div>
	</Router>
)