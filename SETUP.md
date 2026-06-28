# LEAKED Pre/Post Test — Setup Guide

This tool is two files that you paste into a **Google Apps Script project**. Once deployed, you get a single URL to share — no hosting required.

---

## Step 1 — Create the Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com) and create a new blank spreadsheet.
2. Name it whatever you like (e.g. *LEAKED Responses 2026*).
3. Copy the **Sheet ID** from the URL bar:
   ```
   https://docs.google.com/spreadsheets/d/  ← COPY THIS PART →  /edit
   ```
   It's the long random string between `/d/` and `/edit`.

**Share settings:** Keep the sheet private (only you). The Apps Script writes to it on everyone's behalf. To share results with colleagues, use **Share → Anyone with the link → Viewer** — they can read and duplicate it but cannot alter the data.

---

## Step 2 — Create the Apps Script Project

1. Go to [script.google.com](https://script.google.com) and click **New project**.
2. Rename the project (click "Untitled project" at the top) to something like *LEAKED Test*.

You'll see one default file called `Code.gs`. You need **two files** in the project:

### File 1: `Code.gs`
- Replace all existing code with the contents of **`Code.gs`** from this folder.
- Update the two lines at the top:
  ```javascript
  SHEET_ID: 'REPLACE_WITH_YOUR_GOOGLE_SHEET_ID',  // ← paste from Step 1
  PASSWORD: 'REPLACE_WITH_YOUR_PASSWORD',          // ← choose any password
  ```

### File 2: `index.html`
- Click the **＋** button next to "Files" on the left sidebar → select **HTML**.
- Name it exactly `index` (the script will add `.html` automatically).
- Delete the default content and paste everything from **`index.html`** in this folder.

Click **Save** (Ctrl+S / Cmd+S) after each file.

---

## Step 3 — Deploy as a Web App

1. Click **Deploy** (top right) → **New deployment**.
2. Click the gear icon ⚙️ next to "Select type" → choose **Web app**.
3. Fill in the settings:
   - **Description:** anything (e.g. *v1*)
   - **Execute as:** Me *(your Google account — this is what lets it write to your sheet)*
   - **Who has access:** Anyone
4. Click **Deploy** and authorise when prompted.
5. Copy the **Web app URL** — it looks like:
   ```
   https://script.google.com/macros/s/AKfycb.../exec
   ```

> **Every time you edit `Code.gs`**, you must create a **New Deployment** (not update the existing one) for changes to take effect. The URL changes each time, so update any bookmarks.

---

## Step 4 — That's it!

Share the Web app URL with your brother. He opens it in any browser — phone, tablet, or laptop — and it's ready to use.

---

## Using the App

### Facilitator flow (start of each session)
1. Open the URL → enter password → **Start Test**.
2. Fill in: **Pre-Test or Post-Test**, Date, Session/Class Code, Location, Curriculum type.
3. Click **Start Session** and hand the device to the first student.

### Session Codes
Use the **same code** for all students in the same class across pre and post tests. This lets you compare results later:
```
Term 2 pre:   CLASS-7A-T2-2026
Term 2 post:  CLASS-7A-T2-2026  ← same code
```

### Student flow
Each student fills in Age, Gender, and Q1–Q13, then clicks **Submit**. The facilitator then hits **Next Student** for the next person. No login needed between students.

### Viewing results (Admin)
From the login screen, click **View Results (Admin)** and enter the password. Charts and tables load automatically. Use **Export CSV** to download a spreadsheet of all raw data.

---

## Translation

Use the language selector in the top-right corner of any screen. Languages available:

| Language | Quality |
|----------|---------|
| English | Native |
| Thai | Good |
| Spanish | Good |
| Samoan | Variable |
| Tongan | Variable |
| Fijian | Limited |
| Māori | Variable |

Translations use the free [MyMemory API](https://mymemory.translated.net/) — no account needed. An internet connection is required. Pacific island languages are included but machine translation quality varies; consider having a native speaker review key terms before rolling out.

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Blank page / error on load | Make sure both `Code.gs` and `index.html` are saved in the same Apps Script project |
| "Could not connect" error | Check that you deployed as *Anyone* with access, not just your organisation |
| Data not appearing in Sheet | Verify `SHEET_ID` is correct in `Code.gs` and the script has been authorised |
| Translation not working | Requires internet; MyMemory has a ~5,000 word/day free limit per IP |
| Changed `Code.gs` but nothing updated | You must create a **New Deployment** — edits don't apply to existing deployments |
