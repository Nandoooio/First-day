function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index');
}

function getRandomSentences() {
  var sheet = SpreadsheetApp.openById('12Xy1pXFbkYLwY3VExMxGoGPe_iqWyfAC0Cn0c6VaZWo').getActiveSheet();
  var data = sheet.getRange(1, 1, sheet.getLastRow(), sheet.getLastColumn()).getValues();

  // اختيار جمل عشوائية من كل عمود
  var wakeUp = data[Math.floor(Math.random() * data.length)][0];       // أول ما تصحى من النوم
  var enterUniversity = data[Math.floor(Math.random() * data.length)][1]; // رد فعلك أول ما تدخل الجامعة
  var enterLecture = data[Math.floor(Math.random() * data.length)][2];    // لما تدخل المدرج
  var afterUniversity = data[Math.floor(Math.random() * data.length)][3]; // بعد ما تروح من الجامعة

  return [wakeUp, enterUniversity, enterLecture, afterUniversity];
}