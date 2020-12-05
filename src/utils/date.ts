import * as moment from 'moment';

/**
 *
 * @param dateNum 时间
 * @param isDue 是否显示时分秒
 * @description 格式化时间
 */
export const formatDate = (dateNum: string | number, isDue = false): string => {
  if (!/^\d+$/.test(dateNum.toString())) {
    throw new TypeError(`${dateNum}传递的数据格式化错误`);
  }
  if (isDue) {
    return moment(dateNum).format('YYYY-MM-DD');
  } else {
    return moment(dateNum).format('YYYY-MM-DD HH:mm:ss');
  }
};
