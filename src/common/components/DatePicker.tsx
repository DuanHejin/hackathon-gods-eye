/*
 * @Description: 【共通】日期选择器
 * @Company: zhoupudata
 * @Author: duanhejin
 * @Date: 2021-06-29 11:24:57
 * @LastEditors: duanhejin
 * @LastEditTime: 2021-06-29 11:41:07
 */

import { DatePicker, Select, Space, TimePicker } from 'antd';
import React from 'react';
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';

export interface IProps {
  type?: 'date' | 'time' | 'week' | 'month' | 'quarter' | 'year';
  onChangeType: (type: string) => void;
  onChangeValue: (...args: any) => void;
}

const { Option } = Select;
export default function SwitchablePicker(props: IProps) {
  const { type = 'date', onChangeType, onChangeValue } = props;
  return (
    <Space>
      <Select value={type} onChange={onChangeType}>
        <Option value="time">时间</Option>
        <Option value="date">日期</Option>
        <Option value="week">周</Option>
        <Option value="month">月</Option>
        <Option value="quarter">季度</Option>
        <Option value="year">年</Option>
      </Select>
      <PickerWithType type={type} onChange={onChangeValue} />
    </Space>
  );
}

interface IPickerWithTypeProps {
  type?: 'date' | 'time' | 'week' | 'month' | 'quarter' | 'year';
  onChange: (...args: any) => void;
}
function PickerWithType({ type, onChange }: IPickerWithTypeProps) {
  if (type === 'time') return <TimePicker onChange={onChange} />;
  if (type === 'date') return <DatePicker onChange={onChange} />;
  return <DatePicker picker={type} onChange={onChange} />;
}
