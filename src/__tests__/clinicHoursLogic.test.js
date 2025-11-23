import { describe, it, expect } from 'vitest';
import { calculateClinicHours } from '../utils/clinicHoursLogic';

describe('calculateClinicHours', () => {
    describe('Standard weekday hours', () => {
        it('should return standard hours for Monday', () => {
            // Monday, November 25, 2025 (no schedule changes)
            const date = new Date('2025-11-25');
            const result = calculateClinicHours(date);

            expect(result.morningHours).toBe('9:30 ~ 13:00');
            expect(result.afternoonHours).toBe('14:30 ~ 19:00');
            expect(result.status).toBe('open');
            expect(result.formattedMorning).toBe('9:30 ~ 13:00');
            expect(result.formattedAfternoon).toBe('14:30 ~ 19:00');
        });

        it('should return standard hours for Tuesday', () => {
            const date = new Date('2025-11-25');
            date.setDate(26); // Tuesday
            const result = calculateClinicHours(date);

            expect(result.morningHours).toBe('9:30 ~ 13:00');
            expect(result.afternoonHours).toBe('14:30 ~ 19:00');
            expect(result.status).toBe('open');
        });

        it('should return standard hours for Wednesday (休診)', () => {
            const date = new Date('2025-11-26'); // Wednesday
            const result = calculateClinicHours(date);

            expect(result.morningHours).toBe('9:30 ~ 13:00');
            expect(result.afternoonHours).toBe('14:30 ~ 19:00');
            expect(result.status).toBe('open');
        });
    });

    describe('Weekend hours', () => {
        it('should return standard hours for Saturday', () => {
            const date = new Date('2025-11-29'); // Saturday
            const result = calculateClinicHours(date);

            expect(result.morningHours).toBe('9:30 ~ 13:00');
            expect(result.afternoonHours).toBe('14:30 ~ 19:00');
            expect(result.status).toBe('open');
        });

        it('should return closed for Sunday', () => {
            const date = new Date('2025-11-30'); // Sunday
            const result = calculateClinicHours(date);

            expect(result.morningHours).toBe('休診');
            expect(result.afternoonHours).toBe('休診');
            expect(result.status).toBe('closed');
            expect(result.formattedMorning).toBe('休');
            expect(result.formattedAfternoon).toBe('休');
        });
    });

    describe('Schedule changes - partial hours', () => {
        it('should handle afternoon time change (2025-11-07)', () => {
            const date = new Date('2025-11-07');
            const result = calculateClinicHours(date);

            expect(result.morningHours).toBe('9:30 ~ 13:00'); // 通常通り
            expect(result.afternoonHours).toBe('14:30 ~ 18:00'); // Changed
            expect(result.status).toBe('changed');
            expect(result.formattedMorning).toBe('9:30 ~ 13:00');
            expect(result.formattedAfternoon).toBe('14:30 ~ 18:00');
        });

        it('should handle both morning and afternoon changes (2025-11-10)', () => {
            const date = new Date('2025-11-10');
            const result = calculateClinicHours(date);

            expect(result.morningHours).toBe('9:30 ~ 12:00');
            expect(result.afternoonHours).toBe('15:00 ~ 19:00');
            expect(result.status).toBe('changed');
        });

        it('should handle afternoon time change (2025-11-14)', () => {
            const date = new Date('2025-11-14');
            const result = calculateClinicHours(date);

            expect(result.morningHours).toBe('9:30 ~ 13:00');
            expect(result.afternoonHours).toBe('14:30 ~ 18:00');
            expect(result.status).toBe('changed');
        });

        it('should handle afternoon time change (2025-11-21)', () => {
            const date = new Date('2025-11-21');
            const result = calculateClinicHours(date);

            expect(result.morningHours).toBe('9:30 ~ 13:00');
            expect(result.afternoonHours).toBe('14:30 ~ 18:00');
            expect(result.status).toBe('changed');
        });
    });

    describe('Schedule changes - full day closure', () => {
        it('should handle full day closure (2025-11-22)', () => {
            const date = new Date('2025-11-22');
            const result = calculateClinicHours(date);

            expect(result.morningHours).toBe('休診');
            expect(result.afternoonHours).toBe('休診');
            expect(result.status).toBe('closed');
            expect(result.formattedMorning).toBe('休');
            expect(result.formattedAfternoon).toBe('休');
        });

        it('should handle Obon holiday (2025-08-13)', () => {
            const date = new Date('2025-08-13');
            const result = calculateClinicHours(date);

            expect(result.morningHours).toBe('休診');
            expect(result.afternoonHours).toBe('休診');
            expect(result.status).toBe('closed');
        });

        it('should handle New Year holiday (2026-01-01)', () => {
            const date = new Date('2026-01-01');
            const result = calculateClinicHours(date);

            expect(result.morningHours).toBe('休診');
            expect(result.afternoonHours).toBe('休診');
            expect(result.status).toBe('closed');
        });
    });

    describe('Schedule changes - partial closure', () => {
        it('should handle morning only (2025-12-30)', () => {
            const date = new Date('2025-12-30');
            const result = calculateClinicHours(date);

            expect(result.morningHours).toBe('9:30 ~ 12:00');
            expect(result.afternoonHours).toBe('休診');
            expect(result.status).toBe('changed');
            expect(result.formattedMorning).toBe('9:30 ~ 12:00');
            expect(result.formattedAfternoon).toBe('休');
        });
    });

    describe('Schedule changes - 通常通り handling', () => {
        it('should expand 通常通り to standard hours (2025-10-01)', () => {
            const date = new Date('2025-10-01'); // Wednesday
            const result = calculateClinicHours(date);

            // 通常通り should be expanded to standard weekday hours
            expect(result.morningHours).toBe('9:30 ~ 13:00');
            expect(result.afternoonHours).toBe('14:30 ~ 19:00');
            expect(result.status).toBe('changed');
        });

        it('should expand 通常通り for morning on Friday (2025-11-07)', () => {
            const date = new Date('2025-11-07'); // Friday
            const result = calculateClinicHours(date);

            expect(result.morningHours).toBe('9:30 ~ 13:00'); // Expanded from 通常通り
            expect(result.afternoonHours).toBe('14:30 ~ 18:00');
            expect(result.status).toBe('changed');
        });
    });

    describe('Edge cases', () => {
        it('should handle dates with no schedule changes', () => {
            const date = new Date('2025-12-15'); // Monday, no changes
            const result = calculateClinicHours(date);

            expect(result.morningHours).toBe('9:30 ~ 13:00');
            expect(result.afternoonHours).toBe('14:30 ~ 19:00');
            expect(result.status).toBe('open');
        });

        it('should format date string correctly', () => {
            const date = new Date('2025-01-05');
            const result = calculateClinicHours(date);

            expect(result.dateStr).toBe('2025-01-05');
        });

        it('should handle single-digit months and days', () => {
            const date = new Date('2025-01-09');
            const result = calculateClinicHours(date);

            expect(result.dateStr).toBe('2025-01-09');
        });
    });

    describe('Status determination', () => {
        it('should set status to "open" for normal weekday', () => {
            const date = new Date('2025-11-25'); // Tuesday
            const result = calculateClinicHours(date);

            expect(result.status).toBe('open');
        });

        it('should set status to "closed" for Sunday', () => {
            const date = new Date('2025-11-30'); // Sunday
            const result = calculateClinicHours(date);

            expect(result.status).toBe('closed');
        });

        it('should set status to "changed" when schedule is modified', () => {
            const date = new Date('2025-11-07');
            const result = calculateClinicHours(date);

            expect(result.status).toBe('changed');
        });

        it('should set status to "closed" when both sessions are 休診 in schedule change', () => {
            const date = new Date('2025-11-22');
            const result = calculateClinicHours(date);

            expect(result.status).toBe('closed');
        });
    });

    describe('Format time function', () => {
        it('should format 休診 as 休', () => {
            const date = new Date('2025-11-30'); // Sunday
            const result = calculateClinicHours(date);

            expect(result.formattedMorning).toBe('休');
            expect(result.formattedAfternoon).toBe('休');
        });

        it('should keep time strings unchanged', () => {
            const date = new Date('2025-11-25'); // Tuesday
            const result = calculateClinicHours(date);

            expect(result.formattedMorning).toBe('9:30 ~ 13:00');
            expect(result.formattedAfternoon).toBe('14:30 ~ 19:00');
        });

        it('should format - as 休', () => {
            // If we ever use '-' instead of '休診'
            const date = new Date('2025-12-30');
            const result = calculateClinicHours(date);

            expect(result.formattedAfternoon).toBe('休');
        });
    });
});
