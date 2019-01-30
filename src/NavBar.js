import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// componenets
import {Home} from './Home';
import {Events} from './Events';
import {Accommodations} from './Accommodations';
import {WeddingParty} from './WeddingParty';
import {OurStory} from './OurStory';
import {Registry} from './Registry';

export const NavBar = () => (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/events/">Events</Link>
          </li>
          <li>
            <Link to="/accommodations/">Accommodations</Link>
          </li>
          <li>
            <Link to="/weddingparty/">Wedding Party</Link>
          </li>
          <li>
            <Link to="/ourstory/">Our Story</Link>
          </li>
          <li>
            <Link to="/registry/">Registry</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={Home} />
      <Route path="/events/" component={Events} />
      <Route path="/accommodations/" component={Accommodations} />
      <Route path="/weddingparty/" component={WeddingParty} />
      <Route path="/ourstory/" component={OurStory} />
      <Route path="/registry/" component={Registry} />
    </div>
  </Router>
)