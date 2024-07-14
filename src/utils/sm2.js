import website from '@/config/website';
import { sm2 } from 'sm-crypto';

/**
 * sm2 加密方法
 * @param data
 * @returns {*}
 */
export function encrypt(data) {
  try {
    return sm2.doEncrypt(data, website.auth.publicKey, 0);
  } catch {
    return '';
  }
}
