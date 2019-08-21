import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
          <div id="icon-frame"><span id="cross"><span id="yang">&#9775;</span></span></div>
        </div>
        <div className="content">
            <div className="inner">
                        <h1>D</h1><h1>A</h1><h1>W</h1><h1>N</h1><h1>S</h1><h1 class="">&#9775;</h1><h1 class="">&#9775;</h1>  <h1>N</h1>  
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="/work">Work</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
