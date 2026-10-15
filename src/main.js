import './style.css';
import { reception } from './reception-data.js';

const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

/* ── hydrate content from the central data file (never hardcoded) ── */
const setText = (field, value) =>
  $$(`[data-field="${field}"]`).forEach((el) => {
    el.textContent = value;
  });

setText('groomName', reception.groom.name);
setText('brideName', reception.bride.name);
setText('groomName2', reception.groom.name);
setText('brideName2', reception.bride.name);
setText('inviteLine1', reception.invitationLines[0]);
setText('inviteLine2', reception.invitationLines[1]);
setText('inviteLine3', reception.invitationLines[2]);
setText('weekday', reception.weekday);
setText('month', reception.month);
setText('dayNumber', reception.dayNumber);
setText('year', reception.year);
setText('receptionTime', reception.receptionTime);
setText('receptionTime2', reception.receptionTime);
setText('city', reception.city);
setText('dateWithDay', reception.dateWithDay);
setText('venueNote', reception.venueNote);
setText('venueNote2', reception.venueNote);
setText('detailsSubtitle', reception.detailsSubtitle);
setText('locationMessage', reception.locationMessage);
setText('thankYou', reception.thankYou);

$$('[data-field="mapsLink"], [data-field="mapsLink2"]').forEach((a) => {
  a.href = reception.venueMapsLink;
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
});

/* ── reveal on scroll ── */
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (reduceMotion) {
  $$('.reveal').forEach((el) => el.classList.add('visible'));
} else {
  const revealer = new IntersectionObserver(
    (entries) =>
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add('visible');
          revealer.unobserve(en.target);
        }
      }),
    { threshold: 0.12 }
  );
  $$('.reveal').forEach((el) => revealer.observe(el));
}
