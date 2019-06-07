import React from 'react';
import ReactDOM from 'react-dom';

class Nav extends React.Component {
  render() {
    let navTextStyle = {
      color: '#2F3A41'
    };

    let navBorder = {
      borderBottom: 'solid #2f3A41 2px'
    };

    let iconColor = {
      color: '#8dc7bc'
    };

    let buttonUI = {
      width: '50px;'
    };

    return (
      <div>
        <nav className='navbar navbar-expand justify-content' style={navBorder}>
          <div className='collapse navbar-collapse justify-content bg-light' id='' style={buttonUI}>
            <ul className='navbar-nav mr-auto'>
              <span className='hvr-underline-from-center'>
                <li className='nav-item active'>
                  <a className='nav-link' href='index.html' style={navTextStyle}>
                    Home <span className='sr-only'>(current)</span>
                  </a>
                </li>
              </span>
              <span className='hvr-underline-from-center'>
                <li className='nav-item'>
                  <a className='nav-link' href='/portfolio/portfolio.html' style={navTextStyle}>
                    Design
                  </a>
                </li>
              </span>
              <span className='hvr-underline-from-center'>
                <li className='nav-item'>
                  <a className='nav-link' href='/portfolio/code.html' style={navTextStyle}>
                    Code
                  </a>
                </li>
              </span>
              <span className='hvr-underline-from-center'>
                <li className='nav-item'>
                  <a className='nav-link' href='blog/blog.html' style={navTextStyle}>
                    Blog
                  </a>
                </li>
              </span>
            </ul>

            <div className='socialMedia'>
              <div className='navbar justify-content-end navbar-expand-md' id='navbarsExample04'>
                <ul className='navbar-nav mr-auto'>
                  <li className='nav-item'>
                    <a className='nav-link hvr-icon-hang' href='https://codepen.io/idesovmarch/'>
                      <i className='fab fa-codepen hvr-icon' style={iconColor} />
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link hvr-icon-hang' href='http://idesovmarch.tumblr.com'>
                      <i className='fab fa-tumblr fa-lg hvr-icon' style={iconColor} />>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a
                      className='nav-link hvr-icon-hang'
                      href='http://www.linkedin.com/in/idesovmarch'>
                      <i className='fab fa-linkedin-in fa-lg hvr-icon' style={iconColor} />
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link hvr-icon-hang' href='portfolio/portfolio.html'>
                      <i className='fab fa-behance fa-lg hvr-icon' style={iconColor} />
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a
                      className='nav-link hvr-icon-hang'
                      href='http://www.instagram.com/idesovmarch'>
                      <i className='fab fa-instagram fa-lg hvr-icon' style={iconColor} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
