import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
          <div id="icon-frame"><span id="cross">&#10013;</span></div>
        </div>
        <div className="content">
            <div className="inner">
                <h1>p   a    r    k    e    r    ●     p    i    n   k</h1>
                <p>Artist</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="/work">Work</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
