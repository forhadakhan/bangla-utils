/**
 * FILE: src/date-time/constants.ts
 * DESC: Constants for Gregorian calendar month mappings.
 */
export const GREGORIAN_MONTHS = [
    'জানুয়ারি',
    'ফেব্রুয়ারি',
    'মার্চ',
    'এপ্রিল',
    'মে',
    'জুন',
    'জুলাই',
    'আগস্ট',
    'সেপ্টেম্বর',
    'অক্টোবর',
    'নভেম্বর',
    'ডিসেম্বর',
];

export const GREGORIAN_FULL_MONTH_NAMES: { [key: string]: string } = {
    january: 'জানুয়ারি',
    february: 'ফেব্রুয়ারি',
    march: 'মার্চ',
    april: 'এপ্রিল',
    may: 'মে',
    june: 'জুন',
    july: 'জুলাই',
    august: 'আগস্ট',
    september: 'সেপ্টেম্বর',
    october: 'অক্টোবর',
    november: 'নভেম্বর',
    december: 'ডিসেম্বর',
};

export const GREGORIAN_SHORT_MONTH_NAMES: { [key: string]: string } = {
    jan: 'জানুয়ারি',
    feb: 'ফেব্রুয়ারি',
    mar: 'মার্চ',
    apr: 'এপ্রিল',
    may: 'মে',
    jun: 'জুন',
    jul: 'জুলাই',
    aug: 'আগস্ট',
    sep: 'সেপ্টেম্বর',
    oct: 'অক্টোবর',
    nov: 'নভেম্বর',
    dec: 'ডিসেম্বর',
};

/**
 * Constants for Bangla calendar month mappings.
 */
export const BANGLA_CALENDAR_MONTHS = [
    'বৈশাখ',
    'জ্যৈষ্ঠ',
    'আষাঢ়',
    'শ্রাবণ',
    'ভাদ্র',
    'আশ্বিন',
    'কার্তিক',
    'অগ্রহায়ণ',
    'পৌষ',
    'মাঘ',
    'ফাল্গুন',
    'চৈত্র',
];

export const BANGLA_CALENDAR_FULL_MONTH_NAMES: { [key: string]: string } = {
    boishakh: 'বৈশাখ',
    joishtho: 'জ্যৈষ্ঠ',
    asharh: 'আষাঢ়',
    shrabon: 'শ্রাবণ',
    bhadro: 'ভাদ্র',
    ashwin: 'আশ্বিন',
    kartik: 'কার্তিক',
    ogrohayon: 'অগ্রহায়ণ',
    poush: 'পৌষ',
    magh: 'মাঘ',
    falgun: 'ফাল্গুন',
    choitro: 'চৈত্র',
};

export const BANGLA_CALENDAR_SHORT_MONTH_NAMES: { [key: string]: string } = {
    boi: 'বৈশাখ',
    joi: 'জ্যৈষ্ঠ',
    ash: 'আষাঢ়',
    shra: 'শ্রাবণ',
    bha: 'ভাদ্র',
    ashw: 'আশ্বিন',
    kar: 'কার্তিক',
    ogro: 'অগ্রহায়ণ',
    pou: 'পৌষ',
    mag: 'মাঘ',
    fal: 'ফাল্গুন',
    choi: 'চৈত্র',
};

/**
 * Constants for day mappings.
 */
export const BANGLA_DAYS = [
    'রবিবার',
    'সোমবার',
    'মঙ্গলবার',
    'বুধবার',
    'বৃহস্পতিবার',
    'শুক্রবার',
    'শনিবার',
];

export const FULL_DAY_NAMES: { [key: string]: string } = {
    sunday: 'রবিবার',
    monday: 'সোমবার',
    tuesday: 'মঙ্গলবার',
    wednesday: 'বুধবার',
    thursday: 'বৃহস্পতিবার',
    friday: 'শুক্রবার',
    saturday: 'শনিবার',
};

export const SHORT_DAY_NAMES: { [key: string]: string } = {
    sun: 'রবিবার',
    mon: 'সোমবার',
    tue: 'মঙ্গলবার',
    wed: 'বুধবার',
    thu: 'বৃহস্পতিবার',
    fri: 'শুক্রবার',
    sat: 'শনিবার',
};
