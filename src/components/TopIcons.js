import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import '../index.css';

library.add(fab);

export default class TopIcons extends React.Component {
  render() {
    return (
      <div>
        <a href='https://codepen.io/idesovmarch/#'>
          <FontAwesomeIcon icon={['fab', 'codepen']} className='icons' color='#8DC7BC' />
        </a>
        <a href='https://idesovmarch.tumblr.com/'>
          <FontAwesomeIcon icon={['fab', 'tumblr']} className='icons' color='#8DC7BC' />
        </a>
        <a href='https://www.behance.net/idesovmarch'>
          <FontAwesomeIcon icon={['fab', 'behance']} className='icons' color='#8DC7BC' />
        </a>
        <a href='https://www.linkedin.com/in/idesovmarch/'>
          <FontAwesomeIcon icon={['fab', 'linkedin']} className='icons' color='#8DC7BC' />
        </a>
        <a href='https://www.instagram.com/idesovmarch/'>
          <FontAwesomeIcon icon={['fab', 'instagram']} className='icons' color='#8DC7BC' />
        </a>
      </div>
    );
  }
}
