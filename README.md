# Google Sheets Backend Integration

To make this backend connection work securely, you will need to set up a Google Service Account:

1. **Go to the Google Cloud Console** and create a new project (or use an existing one).
2. **Enable the Google Sheets API** in your project.
3. **Create a Service Account** and generate a new **JSON Key**.
4. **Open the Google Sheet** where you want to store the data and click **Share**. Share it with the `client_email` found in your Service Account JSON file, giving it **Editor** access.
5. **In your AI Studio left navigation menu**, open the **Settings** panel and add these three environment variables:
   - `GOOGLE_CLIENT_EMAIL`: The `client_email` from your JSON key.
   - `GOOGLE_PRIVATE_KEY`: The `private_key` from your JSON key (copy the exact string including the `\n` characters).
   - `SPREADSHEET_ID`: The ID of your Google Sheet (found in its URL between `/d/` and `/edit`).
