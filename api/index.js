const speakeasy = require('speakeasy');

export default function handler(req, res) {
  const token = speakeasy.totp({
    // Aaron’s secret from otpauth:// link
    secret: 'TSLKVDYN2R4GEU2B',
    encoding: 'base32'
  });
  res.status(200).json({ code: token });
}
