import React from 'react';
import clsx from 'clsx';
import {
  Button, Row, Col, Icon,
} from 'lens-ui';
import { HomeViewProps } from './HomeView.types';
import styles from './HomeView.module.scss';
import useHomeViewViewModel from './HomeView.view-model';

function HomeView(props: HomeViewProps) {
  const { className, testingID } = props;

  const { count, handleDecrementClick, handleIncrementClick } = useHomeViewViewModel(props);

  return (
    <div className={clsx('homeView', styles.homeView, className)} data-testid={testingID}>
      <Row>
        <Col>
          <Button onClick={handleDecrementClick} testingID="dec" size="small">
            <Icon name="FaMinus" />
          </Button>
        </Col>
        <Col className={styles.center} testingID="counter">{count}</Col>
        <Col>
          <Button onClick={handleIncrementClick} testingID="inc" size="small">
            <Icon name="FaPlus" size="1rem" />
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default React.memo(HomeView);
