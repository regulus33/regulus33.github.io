import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
          <div id="icon-frame"><span id="cross"><span id="yang">&#9775;</span></span></div>
        </div>
        <div className="content">
            <div className="inner" onMouseOver={()=>props.expand(document)} onMouseLeave={()=>props.contract(document)}>
                <h1><span class="letter">p</span>   <span class="letter">a</span>    <span class="letter">r</span>    <span class="letter">k</span>    <span class="letter">e</span>    <span class="letter">r</span>    <span class="letter">&#9775;</span>     <span class="letter">p</span>    <span class="letter">i</span>    <span class="letter">n</span>   <span class="letter">k</span></h1>
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
