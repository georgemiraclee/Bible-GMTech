import React from 'react';
import { Divider, Tabs } from 'antd';

const { TabPane } = Tabs;

const About = () => {
  return (
    <Tabs
      defaultActiveKey='1'
      tabPosition='left'
      style={{
        marginLeft: '-1.2rem',
      }}
    >
      <TabPane tab='About' key='2'>
        <Divider>
          <h4>About</h4>
        </Divider>

        <div className='faq-about'>
          <ul>
            <li>
              <h3>Kenapa dibuat Alkitab PWA?</h3>
              <p>
                Tujuan dibuatnya alkitab berbasis PWA ini agar supaya
                pengguna dapat menggunakan alkitab yang dapat terhubung dengan web
                namun dapat juga digunakan secara offline.
              </p>
            </li>
            <li>
              <h3>Mendapat sumber dari mana?</h3>
              <p>
                Project ini saya menggunakan API Free dari{' '}
                <a
                  href='https://bible.sonnylab.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Bible API
                </a>{' '}
                yang dibuat oleh{' '}
                <a
                  href='https://github.com/sonnylazuardi'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Sonny Lazuardi.
                </a>
                <strong> Terima Kasih, Tuhan Yesus Memberkati! </strong>
              </p>
            </li>
          </ul>
        </div>
      </TabPane>
    </Tabs>
  );
};

export default About;
