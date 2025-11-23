import React from 'react';
import { scheduleChanges, standardHours } from '../data/scheduleData';
import './TodaysClinicHours.css';

const TodaysClinicHours = () => {
    const today = new Date();
    // Format today as YYYY-MM-DD for comparison
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const todayStr = `${yyyy}-${mm}-${dd}`;

    const dayOfWeek = today.getDay(); // 0:Sun, 1:Mon, ... 6:Sat

    let morningHours = '';
    let afternoonHours = '';
    let status = 'open'; // open, closed, changed

    // 1. Check for specific date override
    const changeEntry = scheduleChanges.find(item => item.date === todayStr);

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

    // Helper to format display time
    const formatTime = (time) => {
        if (time === '休診' || time === '-') return '休';
        return time;
    };

    return (
        <div className={`todays-hours-tape ${status}`}>
            <div className="tape-content">
                <div className="tape-header-group">
                    <h3 className="tape-title">本日の診療時間</h3>
                    <span className="tape-date">{today.toLocaleDateString('ja-JP', { month: 'long', day: 'numeric', weekday: 'short' })}</span>
                </div>

                <div className="tape-divider"></div>

                <div className="tape-times-group">
                    {status === 'closed' ? (
                        <div className="tape-closed-message">本日は休診日です</div>
                    ) : (
                        <div className="tape-hours-grid">
                            <div className="tape-hours-block">
                                <span className="tape-label">午前</span>
                                <span className="tape-time">{formatTime(morningHours)}</span>
                            </div>
                            <div className="tape-hours-block">
                                <span className="tape-label">午後</span>
                                <span className="tape-time">{formatTime(afternoonHours)}</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TodaysClinicHours;
