/*
 * @Description: 入口模块
 * @Company: zhoupudata
 * @Author: duanhejin
 * @Date: 2021-06-27 23:59:14
 * @LastEditors: duanhejin
 * @LastEditTime: 2021-06-29 11:45:09
 */
import { ConfigProvider } from 'antd';
import locale from 'antd/lib/locale/zh_CN';
import 'moment/locale/zh-cn';
import React from 'react';
import styles from './index.css';

const BasicLayout: React.FC = props => {
  return (
    <ConfigProvider locale={locale}>
      <div className={styles.normal}>{props.children}</div>
    </ConfigProvider>
  );
};

export default BasicLayout;
