import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class TopIcons extends React.Component {
  render() {
    return (
      <div>
        <FontAwesomeIcon icon={['fab', 'codepen']} />
        <FontAwesomeIcon icon={['fab', 'tumblr']} />
        <FontAwesomeIcon icon={['fab', 'linkedin']} />
        <FontAwesomeIcon icon={['fab', 'instagram']} />
      </div>
    );
  }
}
