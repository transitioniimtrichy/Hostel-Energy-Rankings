// =====================================================================
//  TRANSITION HOSTEL PORTAL: SETTINGS
//  This is the only file you need to edit. Change a value between the
//  quote marks or numbers, keep the commas, and save. Nothing else needed.
// =====================================================================
const CFG={
  // Link to your published Google Sheet (File > Share > Publish to web > CSV)
  SHEET_CSV_URL:"https://docs.google.com/spreadsheets/d/e/2PACX-1vSghDKrqOdgVBOZcKvNTp5bY0lKUw9x3AgdxsMf8cWeB-QwlOGIMxCumKzpkIZbmaWnooUwPU_-w3jS/pub?output=csv",

  // Link to your Google Form for feedback (leave "" until the form is ready)
  FEEDBACK_URL:"https://docs.google.com/forms/d/e/1FAIpQLSd7OcsXOf2oQV6UBnGiBxpH93ivaytIlR-bU0y56PyM7QaOpw/viewform?usp=dialog",

  // Conversion factors. See the "Conversions and method" page for what each means.
  EF:0.727,     // kg of CO2 per kWh of electricity (India grid average, CEA)
  TREE:21,      // kg of CO2 one tree absorbs in a year
  CAR:0.12,     // kg of CO2 a petrol car emits per km
  PHONE:0.015,  // kWh used for one full phone charge
  AC:1.5,       // kWh used by a 1.5-ton AC in one hour
  COAL:0.7,     // kg of coal burned to generate one kWh

  // Tag shown before each hostel name in the leaderboard. Use "Girls" or "Boys".
  // The number is the hostel number (1 = Hostel 1).
  HOSTEL_TYPE:{1:"Girls",2:"Boys",3:"Boys",4:"Girls",5:"Girls",6:"Girls",7:"Boys",8:"Boys"},

  // Room type of each hostel ("Single" or "Double"). Hostels are ranked within their own type.
  ROOM_TYPE:{1:"Single",2:"Double",3:"Double",4:"Single",5:"Single",6:"Double",7:"Double",8:"Single"},

  // Footer names
  SENIORS:["Azeem","Govind","Pankhuri","Sanchit"],
  JUNIORS:["Radha","Sreehitha","Sukhvinder","Vishwas"]
};
