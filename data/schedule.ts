/**
 * Weekly class schedule for the "Aulas / Classes" section.
 * Edit rows freely — the table auto-renders. Update PUNCHPASS_URL when the
 * client's real booking link changes.
 */
export type ClassRow = {
  day: string;
  time: string;
  title: string;
  location: string;
};

export const schedule: ClassRow[] = [
  {
    day: "Thursday",
    time: "7:00pm",
    title: "Kizomba & Semba Class",
    location: "2935 Griffith St, Charlotte, NC 28203",
  },
];

export const PUNCHPASS_URL = "https://app.punchpass.com/org/20424/classes";
