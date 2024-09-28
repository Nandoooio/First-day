function generateDay() {
  // بيانات عشوائية بديلة للعرض
  const randomSentences = [
    "استيقظت على صوت المنبه المزعج!",
    "دخلت الجامعة وأنت متحمس جدًا!",
    "أول ما دخلت المدرج، وجدت الأستاذ!",
    "بعد الجامعة، رجعت للبيت وأنت مرهق ولكن سعيد!"
  ];

  // عرض الجمل العشوائية في العناصر
  document.getElementById('wakeUp').innerHTML = randomSentences[0];
  document.getElementById('enterUniversity').innerHTML = randomSentences[1];
  document.getElementById('enterLecture').innerHTML = randomSentences[2];
  document.getElementById('afterUniversity').innerHTML = randomSentences[3];
  
  // إظهار قسم النتائج
  document.getElementById('results').style.display = 'block';
}