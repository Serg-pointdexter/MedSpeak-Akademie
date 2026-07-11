import { google } from "googleapis";
import "dotenv/config";
console.log(process.env.GOOGLE_PRIVATE_KEY?.includes('\\n'));
console.log(process.env.GOOGLE_PRIVATE_KEY?.includes('\n'));
const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
const auth = new google.auth.GoogleAuth({
  credentials: { client_email: clientEmail, private_key: privateKey },
  scopes: ['https://www.googleapis.com/auth/spreadsheets']
});
auth.getClient().then(() => console.log('Auth OK')).catch(e => console.log('Auth error:', e.message));
