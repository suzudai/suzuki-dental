import React from 'react';
import { scheduleChanges } from '../data/scheduleData';
import './ClinicScheduleChange.css';

const ClinicScheduleChange = ({ targetMonth }) => {
    // Filter logic
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const upcomingChanges = scheduleChanges.filter(item => {
        const itemDate = new Date(item.date);

        // If targetMonth is provided (e.g., '2025-11'), filter by that month
        if (targetMonth) {
            const itemMonth = item.date.substring(0, 7); // 'YYYY-MM'
            return itemMonth === targetMonth;
        }

        // Default behavior: Show future dates or today
        return itemDate >= today;
    }).sort((a, b) => new Date(a.date) - new Date(b.date));

    if (upcomingChanges.length === 0) {
        return null;
    }

    return (
        <div className="schedule-change-container fade-in-up">
            <h3 className="schedule-change-title">診療時間変更のお知らせ</h3>
            <div className="schedule-table-wrapper">
                <table className="schedule-change-table">
                    <thead>
                        <tr>
                            <th>日付</th>
                            <th>午前</th>
                            <th>午後</th>
                            <th>備考</th>
                        </tr>
                    </thead>
                    <tbody>
                        {upcomingChanges.map((item, index) => (
                            <tr key={index}>
                                <td className="date-cell">
                                    {new Date(item.date).toLocaleDateString('ja-JP', { month: 'numeric', day: 'numeric', weekday: 'short' })}
                                </td>
                                <td className={`time-cell ${item.morning === '休診' ? 'closed' : ''}`}>
                                    {item.morning}
                                </td>
                                <td className={`time-cell ${item.afternoon === '休診' ? 'closed' : ''}`}>
                                    {item.afternoon}
                                </td>
                                <td className="note-cell">{item.note}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ClinicScheduleChange;
