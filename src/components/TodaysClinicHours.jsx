import React from 'react';
import { calculateClinicHours } from '../utils/clinicHoursLogic';
import './TodaysClinicHours.css';

const TodaysClinicHours = () => {
    const today = new Date();
    // const today = new Date('2025-12-01T10:00:00'); // Mocking Monday for verification
    const { morningHours, afternoonHours, status, formattedMorning, formattedAfternoon } = calculateClinicHours(today);

    const parseTime = (timeStr) => {
        if (!timeStr || !timeStr.includes('~')) return null;
        const [start, end] = timeStr.split('~').map(s => s.trim());
        return { start, end };
    };

    const morningParts = parseTime(formattedMorning);
    const afternoonParts = parseTime(formattedAfternoon);

    return (
        <div className={`todays-hours-card ${status}`}>
            <div className="card-row">
                <div className="card-left">
                    <span className="card-title">本日の診療時間</span>
                    <span className="card-date">{today.toLocaleDateString('ja-JP', { month: 'long', day: 'numeric', weekday: 'short' })}</span>
                </div>

                <div className="card-right">
                    {status === 'closed' ? (
                        <div className="card-closed-message">本日は休診日です</div>
                    ) : (
                        <div className="card-hours-inline">
                            <span className="card-time-group">
                                <span className="card-label-mini">午前</span>
                                {morningParts ? (
                                    <div className="time-grid">
                                        <span className="time-start">{morningParts.start}</span>
                                        <span className="time-sep">~</span>
                                        <span className="time-end">{morningParts.end}</span>
                                    </div>
                                ) : (
                                    <span className="card-time">{formattedMorning}</span>
                                )}
                            </span>

                            <span className="card-time-group">
                                <span className="card-label-mini">午後</span>
                                {afternoonParts ? (
                                    <div className="time-grid">
                                        <span className="time-start">{afternoonParts.start}</span>
                                        <span className="time-sep">~</span>
                                        <span className="time-end">{afternoonParts.end}</span>
                                    </div>
                                ) : (
                                    <span className="card-time">{formattedAfternoon}</span>
                                )}
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TodaysClinicHours;
