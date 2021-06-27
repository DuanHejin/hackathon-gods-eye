 
/*
 * @Description: xx模块
 * @Company: zhoupudata
 * @Author: duanhejin
 * @Date: 2021-06-28 00:30:48
 * @LastEditors: duanhejin
 * @LastEditTime: 2021-06-28 00:48:31
 */

import React from 'react';
import Link from 'umi/link';
import styles from './index.css';

export default function() {
  return (
    <div className={styles.normal}>
      <h1>Page Home</h1>
      <p>首页，按代码量，提交次数，mr数，bug数四个维度展示</p>
      <div>
        <Link to="/analytics/AnalyzeList">去分析统计汇总页</Link>
      </div>
    </div>
  );
}
