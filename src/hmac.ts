import * as crypto from 'crypto';

export function getHmac(secretKey: string, body: object) {
  const hmac = crypto.createHmac('sha512', secretKey);
  const hmacData = hmac.update(JSON.stringify(body));
  const hmacHeader = hmacData.digest('hex');
  return hmacHeader;
}