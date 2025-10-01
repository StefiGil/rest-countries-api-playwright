import crypto from 'crypto';

const publicKey = process.env.MARVEL_PUBLIC_KEY!;
const privateKey = process.env.MARVEL_PRIVATE_KEY!;

export function authParams() {
  const ts = new Date().getTime().toString();
  const hash = crypto.createHash('md5')
    .update(ts + privateKey + publicKey)
    .digest('hex');
  return { ts, apikey: publicKey, hash };
}
