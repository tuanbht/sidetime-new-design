import React from 'react';
import { Col, Image } from 'react-bootstrap';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

import styles from './index.module.scss';

import logo from 'assets/images/sidetime-logo.png';
import { ROOT_PATH } from 'constants/route-path';

const Header = () => (
  <header className={classnames('row', styles.container)}>
    <Col lg={2}>
      <Link to={ROOT_PATH}>
        <Image src={logo} className={styles.logo} />
      </Link>
    </Col>
    <Col lg={5}>

    </Col>
    <Col lg={5} className="d-flex justify-content-end">
      <Link to={ROOT_PATH} className={classnames('btn', styles.join)}>
        Join
      </Link>
      <Link to={ROOT_PATH} className={classnames('btn', styles.sign_in_as_expert)}>
        Join as Expert
      </Link>
      <Link to={ROOT_PATH} className={classnames('btn', styles.sign_in)}>
        Sign In
      </Link>
    </Col>
  </header>
);

export default Header;
