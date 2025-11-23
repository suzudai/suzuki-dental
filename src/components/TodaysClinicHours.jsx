import React from 'react';
import { calculateClinicHours } from '../utils/clinicHoursLogic';
import './TodaysClinicHours.css';

const TodaysClinicHours = () => {
    const today = new Date();
    const { morningHours, afternoonHours, status, formattedMorning, formattedAfternoon } = calculateClinicHours(today);

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
                                <span className="tape-time">{formattedMorning}</span>
                            </div>
                            <div className="tape-hours-block">
                                <span className="tape-label">午後</span>
                                <span className="tape-time">{formattedAfternoon}</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TodaysClinicHours;
