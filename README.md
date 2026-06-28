# Evident: Leaked — Pre/Post Survey

A web-based version of the Evident Leaked pre/post workshop questionnaire. Responses are written directly to a private Google Sheet. No server or hosting account required — the app runs entirely through Google Apps Script.

---

## How it works

The app is two files pasted into a **Google Apps Script project**. Once deployed, you get a single shareable URL that works on any device (phone, tablet, laptop). A facilitator logs in with a password, sets up the session, and then passes the device to each student in turn.

---

## Setup

### Step 1 — Create a Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com) and create a new blank spreadsheet.
2. Copy the **Sheet ID** from the URL bar — it's the long string between `/d/` and `/edit`:
   ```
   https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID_HERE/edit
   ```

**Tip:** Keep the sheet private. To share results with colleagues, use **Share → Anyone with the link → Viewer** — they can read and duplicate it but cannot edit the data.

---

### Step 2 — Create a Google Apps Script project

1. Go to [script.google.com](https://script.google.com) and click **New project**.
2. You'll see a default file called `Code.gs`. The project needs **two files**:

**File 1: `Code.gs`**
- Replace all existing code with the contents of `Code.gs` from this repository.
- Update the two values at the top:
  ```javascript
  SHEET_ID: 'REPLACE_WITH_YOUR_GOOGLE_SHEET_ID',  // from Step 1
  PASSWORD: 'REPLACE_WITH_YOUR_PASSWORD',          // choose anything
  ```

**File 2: `index.html`**
- Click the **＋** button next to "Files" → select **HTML**.
- Name it exactly `index` (Apps Script adds `.html` automatically).
- Delete the default content and paste everything from `index.html` in this repository.

Save both files (Ctrl+S / Cmd+S).

---

### Step 3 — Deploy as a Web App

1. Click **Deploy** → **New deployment**.
2. Click the gear icon ⚙️ next to "Select type" → choose **Web app**.
3. Set the following:
   - **Execute as:** Me
   - **Who has access:** Anyone
4. Click **Deploy** and authorise when prompted.
5. Copy the **Web app URL** (ending in `/exec`) — this is the URL to share.

> **Important:** Every time you edit `Code.gs`, you must create a **New Deployment** for the changes to take effect.

---

## Using the app

### For facilitators

1. Open the URL in a browser → enter the password → **Start Test**.
2. Select **Pre-Test** or **Post-Test**, fill in the date, session/class code, school location, and curriculum type.
3. Click **Start Session** and hand the device to the first student.

**Session codes:** Use the same code for all students in a class across both the pre and post tests — this links the two sets of results for comparison later.

```
Example:  Class-7A-Term2-2026  (used for both pre and post)
```

### For students

Each student fills in their age, gender, and answers Q1–Q13, then clicks **Submit**. The facilitator taps **Next Student** to reset the form for the next person. No login is needed between students.

### Viewing results

From the login screen, click **View Results (Admin)** and enter the password. The dashboard shows summary charts and a full data table. Use **Export CSV** to download all responses as a spreadsheet.

---

## Translation

A language selector is available on every screen. Supported languages:

| Language | Translation quality |
|----------|-------------------|
| English | Native |
| Thai | Good |
| Spanish | Good |
| Samoan | Variable |
| Tongan | Variable |
| Fijian | Limited |
| Māori | Variable |

Translations use the free [MyMemory API](https://mymemory.translated.net/) — no account or API key needed. An internet connection is required. Pacific island language translations are machine-generated; quality varies and native speaker review is recommended before use in those contexts.

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Blank page or error on load | Confirm both `Code.gs` and `index.html` are saved in the same Apps Script project |
| "Could not connect" error | Ensure the deployment is set to *Anyone* (not just your organisation) |
| Responses not appearing in the Sheet | Check that `SHEET_ID` in `Code.gs` is correct and the script has been authorised |
| Translation not working | Requires an internet connection; MyMemory allows ~5,000 words/day per IP for free |
| Edited `Code.gs` but nothing changed | Create a **New Deployment** — changes do not apply to existing deployments |
