 
/*
 * @Description: xx模块
 * @Company: zhoupudata
 * @Author: duanhejin
 * @Date: 2021-06-27 23:59:14
 * @LastEditors: duanhejin
 * @LastEditTime: 2021-06-28 00:09:25
 */
import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig =  {
  treeShaking: true,
  // routes: [
  //   {
  //     path: '/',
  //     component: '../layouts/index',
  //     routes: [
  //       { path: '/', component: '../pages/index' }
  //     ]
  //   }
  // ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'hackathon-gods-eye',
      dll: false,
      
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
}

export default config;
