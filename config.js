// =====================================================================
//  TRANSITION HOSTEL PORTAL: SETTINGS
//  This is the only file you need to edit. Change a value between the
//  quote marks or numbers, keep the commas, and save. Nothing else needed.
// =====================================================================
const CFG={
  // Link to your published Google Sheet (File > Share > Publish to web > CSV)
  SHEET_CSV_URL:"https://docs.google.com/spreadsheets/d/e/2PACX-1vSghDKrqOdgVBOZcKvNTp5bY0lKUw9x3AgdxsMf8cWeB-QwlOGIMxCumKzpkIZbmaWnooUwPU_-w3jS/pub?output=csv",

  // Link to your Google Form for feedback (leave "" until the form is ready)
  FEEDBACK_URL:"",

  // Conversion factors. See the "Conversions and method" page for what each means.
  EF:0.727,     // kg of CO2 per kWh of electricity (India grid average, CEA)
  TREE:21,      // kg of CO2 one tree absorbs in a year
  CAR:0.12,     // kg of CO2 a petrol car emits per km
  PHONE:0.015,  // kWh used for one full phone charge
  AC:1.5,       // kWh used by a 1.5-ton AC in one hour
  COAL:0.7,     // kg of coal burned to generate one kWh

  // Footer names
  SENIORS:["Azeem","Govind","Pankhuri","Sanchit"],
  JUNIORS:["Radha","Sreehitha","Sukhvinder","Vishwas"]
};
