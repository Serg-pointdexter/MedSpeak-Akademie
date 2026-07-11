import { google } from "googleapis";
import "dotenv/config";
const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.MEDSPEAK_GOOGLE_CLIENT_EMAIL,
    private_key: process.env.MEDSPEAK_GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets']
});
const sheets = google.sheets({ version: 'v4', auth });
sheets.spreadsheets.get({ spreadsheetId: process.env.MEDSPEAK_SPREADSHEET_ID }).then(res => {
  console.log("Sheet names:", res.data.sheets?.map(s => s.properties?.title));
}).catch(console.error);
