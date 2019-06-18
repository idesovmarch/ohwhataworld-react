import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import TopIcons from './TopIcons';

export default class Nav1 extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color='light' fixed='top' light expand='sm' w='100%'>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='' navbar>
              <NavItem>
                <NavLink href='/components/'>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/components/'>Design</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='https://github.com/reactstrap/reactstrap'>Code</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/components/'>Blog</NavLink>
              </NavItem>
              <NavItem />
            </Nav>
          </Collapse>
          <TopIcons />
        </Navbar>
      </div>
    );
  }
}
