import React from 'react';
import { Divider, Tabs } from 'antd';
import {
  WhatsAppOutlined,
  GithubOutlined,
  MailFilled,
  LinkedinOutlined,
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
      <TabPane tab='Kontak' key='3'>
        <Divider>
          <h4> Kontak</h4>
        </Divider>

        <div className='contact-us'>
          <p>
            <WhatsAppOutlined />
            <a
              href='https://wa.me/6285377640809'
              target='_blank'
              rel='noopener noreferrer'
            >
              WhatsApp
            </a>
          </p>

          <p>
            <MailFilled />
            <a
              href='mailto:georgemiracle2019@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              Email
            </a>
          </p>

          <p>
            <GithubOutlined />
            <a href='https://github.com/georgemiraclee/'>Github</a>
          </p>

          <p>
          <LinkedinOutlined />
            <a href='https://www.linkedin.com/in/georgemiracle/'>LinkedIn </a>
          </p>
        </div>
      </TabPane>
    </Tabs>
  );
};

export default Contact;
