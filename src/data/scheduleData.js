export const standardHours = {
    weekday: {
        morning: '9:30 ~ 13:00',
        afternoon: '14:30 ~ 19:00'
    },
    saturday: {
        morning: '9:30 ~ 13:00',
        afternoon: '14:30 ~ 19:00'
    },
    sunday: {
        morning: '休診',
        afternoon: '休診'
    },
    holiday: {
        morning: '休診',
        afternoon: '休診'
    }
};

// Format: YYYY-MM-DD
export const scheduleChanges = [
    {
        date: '2025-08-13',
        morning: '休診',
        afternoon: '休診',
        note: 'お盆休み'
    },
    {
        date: '2025-08-14',
        morning: '休診',
        afternoon: '休診',
        note: 'お盆休み'
    },
    {
        date: '2025-08-15',
        morning: '休診',
        afternoon: '休診',
        note: 'お盆休み'
    },
    {
        date: '2025-09-23',
        morning: '休診',
        afternoon: '休診',
        note: '祝日（秋分の日）'
    },
    // October has no changes, so no entry needed for "changes" list, 
    // but we might want to show "Normal" if explicitly requested. 
    // However, the table logic usually shows *changes*. 
    // If the user wants to show "Normal" for Oct, we can add a dummy entry or handle it in UI.
    // For now, let's assume Oct news will just show an empty table or we add a "Normal" entry if strictly needed.
    // Let's add a "Normal" entry for Oct 1st just to have something to show if the table is forced.
    {
        date: '2025-10-01',
        morning: '通常通り',
        afternoon: '通常通り',
        note: '10月は通常通り診療いたします'
    },
    {
        date: '2025-11-07',
        morning: '通常通り',
        afternoon: '14:30 ~ 18:00',
        note: ''
    },
    {
        date: '2025-11-10',
        morning: '9:30 ~ 12:00',
        afternoon: '15:00 ~ 19:00',
        note: ''
    },
    {
        date: '2025-11-11',
        morning: '通常通り',
        afternoon: '14:30 ~ 18:00',
        note: ''
    },
    {
        date: '2025-11-14',
        morning: '通常通り',
        afternoon: '14:30 ~ 18:00',
        note: ''
    },
    {
        date: '2025-11-21',
        morning: '通常通り',
        afternoon: '14:30 ~ 18:00',
        note: ''
    },
    {
        date: '2025-11-22',
        morning: '休診',
        afternoon: '休診',
        note: ''
    },
    {
        date: '2025-11-23',
        morning: '休診',
        afternoon: '休診',
        note: ''
    },
    {
        date: '2025-11-24',
        morning: '休診',
        afternoon: '休診',
        note: '祝日（文化の日）'
    },
    {
        date: '2026-01-08',
        morning: '休診',
        afternoon: '休診',
        note: '祝日（成人の日）'
    },
    {
        date: '2025-12-30',
        morning: '9:30 ~ 12:00',
        afternoon: '休診',
        note: '年末年始休診'
    },
    {
        date: '2025-12-31',
        morning: '休診',
        afternoon: '休診',
        note: '年末年始休診'
    },
    {
        date: '2026-01-01',
        morning: '休診',
        afternoon: '休診',
        note: '年末年始休診'
    },
    {
        date: '2026-01-02',
        morning: '休診',
        afternoon: '休診',
        note: '年末年始休診'
    },
    {
        date: '2026-01-03',
        morning: '休診',
        afternoon: '休診',
        note: '年末年始休診'
    }
];
