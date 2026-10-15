/**
 * ─────────────────────────────────────────────────────────────
 *  RECEPTION DATA — single source of truth
 *  Edit ONLY this file to update names, date, time, venue & links.
 * ─────────────────────────────────────────────────────────────
 *  TIME STATUS: CONFIRMED — reception begins at 11:00 AM.
 *  `receptionTime` is shown consistently in the hero date card and the
 *  Reception Details card. Do NOT invent venue name / full address —
 *  only "Erode, Tamil Nadu" is confirmed, so venue stays at city level.
 */

export const reception = {
  groom: {
    name: 'K.R. Manoj Kaarthick'
  },
  bride: {
    name: 'S. Ramyabharathi'
  },

  eventLabel: 'Wedding Reception',

  weekday: 'Sunday',
  month: 'November',
  dayNumber: '22',
  year: '2026',
  dateDisplay: 'November 22, 2026',
  dateWithDay: 'November 22, 2026 (Sunday)',

  // Confirmed reception start time — shown in the date card & details.
  receptionTime: '11:00 AM',

  city: 'Erode, Tamil Nadu',
  venueNote: 'Erode, Tamil Nadu, India',

  invitationLines: ['TOGETHER WITH THEIR FAMILIES', 'YOU ARE CORDIALLY INVITED TO THE', 'RECEPTION OF'],

  detailsSubtitle: 'Let’s come together to celebrate love, happiness and new beginnings.',

  locationMessage: 'We would be delighted to have you with us on our special day.',

  thankYou: 'Thank you for being a part of our special day',

  // Exact client-provided location link — every Maps button must use this.
  venueMapsLink: 'https://share.google/gyKpzRQk91yKZ1fo2'
};
