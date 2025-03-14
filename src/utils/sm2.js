import website from '@/config/website';
import smCrypto from 'sm-crypto';

/**
 * sm2 加密方法
 * @param data
 * @returns {*}
 */
export function encrypt(data) {
  try {
    return smCrypto.sm2.doEncrypt(data, website.auth.publicKey, 0);
  } catch {
    return '';
  }
}
