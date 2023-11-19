import React from 'react';
import { Divider, Tabs } from 'antd';


const { TabPane } = Tabs;

const FAQ = () => {
  return (
    <Tabs
      defaultActiveKey='1'
      tabPosition='left'
      style={{
        marginLeft: '-1.2rem',
      }}
    >
      <TabPane tab='FAQ' key='1'>
        <Divider>
          <h4> Frequently Asking Question</h4>
        </Divider>
        <div className='faq-about'>
          <ul>
            <li>
              <h3>Apakah ini gratis?</h3>
              <p>Ya, ini gratis dan siap dipakai.</p>
            </li>
            <li>
              <h3>Bagaimana Cara memakainya?</h3>
              <p>
                Anda dapat membacanya seperti layaknya membaca alkitab, anda perlu memilih Perjanjian Lama atau Baru, dan kemudian anda memilih Ayat yang dipilih
                , anda juga dapat mengganti bahasa bahasa seperti {' '}
                <em>
                  <strong>
                    <u>
                      Indonesian, English, Batak, Sunda, Jawa, Makasar and Bali
                    </u>
                  </strong>
                </em>{' '}
              </p>
            </li>
          </ul>
        </div>
      </TabPane>
    </Tabs>
  );
};

export default FAQ;
