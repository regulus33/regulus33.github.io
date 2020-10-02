import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.png'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import about from '../images/paintings/about.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" >


        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <p>Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.</p>
          <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat tempus.</p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Zachary John Rowden</h2>
          <p>Hi there! I'm Zack! Welcome to my website!</p>
          <p>I am a coder, artist and super friendly guy! I was born in Tucson Arizona in 1989. I live in Prague, Czech Republic and work primarily as a software developer. I also run a web app called <a href="https://midiframe.com">Midi Frame</a> that helps musicians like me to create cool, visually pleasing music videos from simple midi files or midi over usb.</p>
          <span className="image main"><img id="about" src={about} alt="" /></span>

          
          <ul className="icons">
            <li><a href="https://github.com/regulus33" className="icon fa-github" target="_blank"><span className="label">GitHub</span></a></li>
            {/* <li><a href="https://www.instagram.com/pvrkerpink/" className="icon fa-instagram" target="_blank"><span className="label">Instagram</span></a></li> */}
            {/* <li><a href="https://open.spotify.com/artist/46p7ddAOWKpdkg0ZPvA727?si=MKu8g6OxQh-vihBXjmvuNg" className="icon fa-spotify" target="_blank"><span className="label">Spotify Again</span></a></li> */}
            <li><a href="https://soundcloud.com/parkerpink" className="icon fa-soundcloud" target="_blank"><span className="label">Soundcloud</span></a></li>
          </ul>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
