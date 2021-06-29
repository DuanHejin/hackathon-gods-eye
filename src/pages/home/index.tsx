/*
 * @Description: xx模块
 * @Company: zhoupudata
 * @Author: duanhejin
 * @Date: 2021-06-28 00:30:48
 * @LastEditors: duanhejin
 * @LastEditTime: 2021-06-29 11:51:52
 */

import DatePicker from '@/common/components/DatePicker';
import { Card } from 'antd';
import React, { useState } from 'react';
import Link from 'umi/link';
import moment, { Moment as MomentType } from 'moment';
import { DateFormat } from '@/utils/AppEnum';

export default function() {
  const [type, setType] = useState('date');

  const handleDateChange = (date: MomentType, dateStr: string) => {
    console.log('date :>> ', date);
    const str = date.format(DateFormat.FULL);
    console.log('str :>> ', str);
    console.log('dateStr :>> ', dateStr);
  };

  const mon = moment();
  return (
    <Card>
      <DatePicker type={type} onChangeType={setType} onChangeValue={handleDateChange} />
      <h1>Page Home</h1>
      <p>首页，按代码量，提交次数，mr数，bug数四个维度展示</p>
      <div>
        <Link to="/analytics/AnalyzeList">去分析统计汇总页</Link>
      </div>
    </Card>
  );
}
