import { scheduleChanges, standardHours } from '../data/scheduleData';

/**
 * Calculate today's clinic hours based on date and schedule data
 * @param {Date} date - The date to check
 * @returns {Object} - { morningHours, afternoonHours, status, formattedMorning, formattedAfternoon }
 */
export function calculateClinicHours(date) {
    // Format date as YYYY-MM-DD for comparison
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    const dateStr = `${yyyy}-${mm}-${dd}`;

    const dayOfWeek = date.getDay(); // 0:Sun, 1:Mon, ... 6:Sat

    let morningHours = '';
    let afternoonHours = '';
    let status = 'open'; // open, closed, changed

    // 1. Check for specific date override
    const changeEntry = scheduleChanges.find(item => item.date === dateStr);

    if (changeEntry) {
        morningHours = changeEntry.morning === '通常通り' ? getStandardMorning(dayOfWeek) : changeEntry.morning;
        afternoonHours = changeEntry.afternoon === '通常通り' ? getStandardAfternoon(dayOfWeek) : changeEntry.afternoon;
        status = 'changed';

        // If both are closed/holiday
        if ((morningHours === '休診' || morningHours === '-') && (afternoonHours === '休診' || afternoonHours === '-')) {
            status = 'closed';
        }
    } else {
        // 2. Fallback to standard hours
        morningHours = getStandardMorning(dayOfWeek);
        afternoonHours = getStandardAfternoon(dayOfWeek);

        if (morningHours === '休診' && afternoonHours === '休診') {
            status = 'closed';
        }
    }

    return {
        morningHours,
        afternoonHours,
        status,
        formattedMorning: formatTime(morningHours),
        formattedAfternoon: formatTime(afternoonHours),
        dateStr
    };
}

function getStandardMorning(day) {
    if (day === 0) return standardHours.sunday.morning;
    if (day === 6) return standardHours.saturday.morning;
    return standardHours.weekday.morning;
}

function getStandardAfternoon(day) {
    if (day === 0) return standardHours.sunday.afternoon;
    if (day === 6) return standardHours.saturday.afternoon;
    return standardHours.weekday.afternoon;
}

function formatTime(time) {
    if (time === '休診' || time === '-') return '休';
    return time;
}
