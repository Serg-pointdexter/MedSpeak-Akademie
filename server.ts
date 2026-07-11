import express from "express";
import path from "path";
import "dotenv/config";
import { createServer as createViteServer } from "vite";
import { google } from "googleapis";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Body parsing middleware
  app.use(express.json());

  // API routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  app.post('/api/register', async (req, res) => {
    try {
      const { fullName, specialty, level, phone, email } = req.body;

      const clientEmail = process.env.MEDSPEAK_GOOGLE_CLIENT_EMAIL;
      const privateKey = process.env.MEDSPEAK_GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
      const spreadsheetId = process.env.MEDSPEAK_SPREADSHEET_ID;

      // If credentials are not set, we can either mock success or fail.
      // Failing with a 500 error will trigger the frontend error handling.
      if (!clientEmail || !privateKey || !spreadsheetId) {
        console.warn('Google Sheets credentials are not configured in Environment Variables. Registration will be simulated.');
        // For preview purposes, if the owner hasn't set up the keys yet, we simulate success
        // so the frontend still works for the end user.
        return res.status(200).json({ success: true, simulated: true });
      }

      // Initialize Google Auth
      const auth = new google.auth.GoogleAuth({
        credentials: {
          client_email: clientEmail,
          private_key: privateKey,
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });

      const sheets = google.sheets({ version: 'v4', auth });

      // Get the name of the first sheet dynamically
      const spreadsheet = await sheets.spreadsheets.get({ spreadsheetId });
      const firstSheetName = spreadsheet.data.sheets?.[0]?.properties?.title || 'Sheet1';

      // Append data to the sheet
      await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: `'${firstSheetName}'!A:F`, // Use dynamic sheet name
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [
            [
              new Date().toISOString(), // Timestamp
              fullName,
              specialty,
              level,
              phone,
              email
            ]
          ]
        }
      });

      res.status(200).json({ success: true });
    } catch (error: any) {
      console.error('Error saving to Google Sheets:', error);
      res.status(500).json({ error: 'Failed to save registration', details: error.message });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*all', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
