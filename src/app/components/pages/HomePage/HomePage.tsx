import React from 'react';
import clsx from 'clsx';
import {
  Button, Row, Col, Icon, Layout,
} from 'lens-ui';
import { HomePageProps } from './HomePage.types';
import styles from './HomePage.module.scss';
import useHomePageViewModel from './HomePage.view-model';

function HomePage(props: HomePageProps) {
  const { className, testingID } = props;

  const { count, handleDecrementClick, handleIncrementClick } = useHomePageViewModel(props);

  return (
    <Layout.Content className={clsx('HomePage', styles.HomePage, className)} data-testid={testingID}>
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
    </Layout.Content>
  );
}

export default React.memo(HomePage);
