
import React from "react";
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';

const DashboardPage = () => {


  return (
    <div>
    <Row gutter={16}>
      <Col span={12}>
        <Card bordered={false}>
          <Statistic
            title="Quantity of queues"
            value={3}
            valueStyle={{
              color: '#3f8600',
            }}

          />
        </Card>
      </Col>
      <Col span={12}>
        <Card bordered={false}>
          <Statistic
            title="Estimated time of waiting"
            value={9.3}
            precision={2}
            valueStyle={{
              color: '#cf1322',
            }}
            prefix={<ArrowDownOutlined />}
            suffix="minutes"
          />
        </Card>
      </Col>
    </Row>
    <Row gutter={16}>
      <Col span={12}>
        <Card bordered={false}>
          <Statistic
            title="Cancellations"
            value={11.28}
            precision={2}
            valueStyle={{
              color: '#3f8600',
            }}
            prefix={<ArrowUpOutlined />}
            suffix="%"
          />
        </Card>
      </Col>
      <Col span={12}>
        <Card bordered={false}>
          <Statistic
            title="Idle"
            value={9.3}
            precision={2}
            valueStyle={{
              color: '#cf1322',
            }}
            prefix={<ArrowDownOutlined />}
            suffix="%"
          />
        </Card>
      </Col>
    </Row>
    </div>
  );
};

export default DashboardPage;