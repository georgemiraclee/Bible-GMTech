import React from 'react';
import { Divider, Tabs } from 'antd';
import {
  WhatsAppOutlined,
  GithubOutlined,
  MailFilled,
  TwitterCircleFilled,
} from '@ant-design/icons';

const { TabPane } = Tabs;

const Contact = () => {
  return (
    <Tabs
      defaultActiveKey='1'
      tabPosition='left'
      style={{
        marginLeft: '-1.2rem',
      }}
    >
      <TabPane tab='Contact' key='3'>
        <Divider>
          <h4> Contact</h4>
        </Divider>

        <div className='contact-us'>
          <p>
            <WhatsAppOutlined />
            <a
              href='https://wa.me/628118750400'
              target='_blank'
              rel='noopener noreferrer'
            >
              WhatsApp
            </a>
          </p>

          <p>
            <MailFilled />
            <a
              href='mailto:wbs@bpjs-kesehatan.go.id'
              target='_blank'
              rel='noopener noreferrer'
            >
              Email
            </a>
          </p>

          <p>
            <GithubOutlined />
            <a href='#!'>Github</a>
          </p>

          <p>
            <TwitterCircleFilled />
            <a href='#!'>Twitter </a>
          </p>
        </div>
      </TabPane>
    </Tabs>
  );
};

export default Contact;
