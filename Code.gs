// ============================================================
// LEAKED Pre/Post Test — Google Apps Script Backend
// ============================================================
// Before deploying, update CONFIG below with your values.
// Deploy as: Web App → Execute as: Me → Who has access: Anyone
// ============================================================

const CONFIG = {
  SHEET_ID:   'REPLACE_WITH_YOUR_GOOGLE_SHEET_ID',
  PASSWORD:   'REPLACE_WITH_YOUR_PASSWORD',
  SHEET_NAME: 'Responses',
};

// ── Serve the HTML app ──────────────────────────────────────
function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('LEAKED Pre/Post Test')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

// ── Functions called from the browser via google.script.run ─

function validatePassword(password) {
  return password === CONFIG.PASSWORD;
}

function submitFormData(data, password) {
  if (password !== CONFIG.PASSWORD) throw new Error('Unauthorised');
  const sheet = getOrCreateSheet();
  sheet.appendRow(buildRow(data));
  return true;
}

function getResults(password) {
  if (password !== CONFIG.PASSWORD) throw new Error('Unauthorised');
  const ss     = SpreadsheetApp.openById(CONFIG.SHEET_ID);
  const sheet  = getOrCreateSheet();
  const rawRows = sheet.getDataRange().getValues();
  // google.script.run cannot serialize Date objects — convert to strings
  const rows = rawRows.map(function(row) {
    return row.map(function(cell) {
      return cell instanceof Date ? cell.toISOString() : cell;
    });
  });
  return { rows: rows, sheetUrl: ss.getUrl() };
}

// ── Internal helpers ─────────────────────────────────────────

const HEADERS = [
  'Timestamp', 'Pre/Post', 'Session Code', 'Date', 'School Location', 'Curriculum Type',
  'Age', 'Gender',
  'Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6',
  'Q7 – Scroll past', 'Q7 – Use tools', 'Q7 – Clear history', 'Q7 – Follow positive', 'Q7 – Not sure',
  'Q8', 'Q9', 'Q10', 'Q11', 'Q12', 'Q13',
];

function buildRow(r) {
  return [
    new Date().toISOString(),
    r.prePost, r.sessionCode, r.date, r.schoolLocation, r.curriculumType,
    r.age, r.gender,
    r.q1, r.q2, r.q3, r.q4, r.q5, r.q6,
    r.q7_scroll   ? 1 : 0,
    r.q7_tools    ? 1 : 0,
    r.q7_history  ? 1 : 0,
    r.q7_follow   ? 1 : 0,
    r.q7_notsure  ? 1 : 0,
    r.q8, r.q9, r.q10, r.q11, r.q12, r.q13,
  ];
}

function getOrCreateSheet() {
  const ss = SpreadsheetApp.openById(CONFIG.SHEET_ID);
  let sheet = ss.getSheetByName(CONFIG.SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(CONFIG.SHEET_NAME);
    initHeaders(sheet);
  } else if (sheet.getLastRow() === 0) {
    initHeaders(sheet);
  }
  return sheet;
}

function initHeaders(sheet) {
  sheet.appendRow(HEADERS);
  sheet.getRange(1, 1, 1, HEADERS.length)
    .setBackground('#1F3864')
    .setFontColor('#FFFFFF')
    .setFontWeight('bold');
  sheet.setFrozenRows(1);
  // Widen a few columns for readability
  [1, 4].forEach(col => sheet.setColumnWidth(col, 160));
}
