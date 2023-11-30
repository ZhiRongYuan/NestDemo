/*
 * @Author: yuanzhirong
 * @Date: 2023-11-29 17:28:46
 * @LastEditors: yuanzhirong
 * @LastEditTime: 2023-11-30 11:23:36
 * @Description:
 */
import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';
import * as _ from 'lodash';

const dirName = `../config`;
const fnPrefix = `config`;
const YAML_CONFIG_FILENAME = `${fnPrefix}.yml`;

const filePath = join(__dirname, '../config/', YAML_CONFIG_FILENAME);

const envPath = join(
  __dirname,
  dirName,
  `${fnPrefix}.${process.env.NODE_ENV || 'development'}.yml`,
);

console.log(envPath);

const commonConfig = yaml.load(readFileSync(filePath, 'utf-8'));
const envConfig = yaml.load(readFileSync(envPath, 'utf-8'));

//因为ConfigModule有一个load方法——>函数
export default () => {
  return _.merge(commonConfig, envConfig);
};
