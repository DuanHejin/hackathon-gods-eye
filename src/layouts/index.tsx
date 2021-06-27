 
/*
 * @Description: xx模块
 * @Company: zhoupudata
 * @Author: duanhejin
 * @Date: 2021-06-27 23:59:14
 * @LastEditors: duanhejin
 * @LastEditTime: 2021-06-28 00:29:22
 */
import React from 'react';
import styles from './index.css';

const BasicLayout: React.FC = props => {
  return (
    <div className={styles.normal}>
      {props.children}
    </div>
  );
};

export default BasicLayout;
