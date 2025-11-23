import React from 'react';
import { FaTooth } from 'react-icons/fa';
import TodaysClinicHours from './TodaysClinicHours';
import './ClinicHours.css';

const ClinicHours = () => {
    return (
        <section id="hours" className="hours-section">
            <div className="container">
                <h2 className="section-title fade-in-up">診療時間</h2>
                <div className="hours-container fade-in-up">
                    <TodaysClinicHours />
                    <table className="hours-table">
                        <thead>
                            <tr>
                                <th>時間</th>
                                <th>月</th>
                                <th>火</th>
                                <th>水</th>
                                <th>木</th>
                                <th>金</th>
                                <th>土</th>
                                <th>日祝</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="time-col">9:30 ~ 13:00</td>
                                <td><FaTooth className="tooth-icon" /></td>
                                <td><FaTooth className="tooth-icon" /></td>
                                <td><span className="cross">休</span></td>
                                <td><FaTooth className="tooth-icon" /></td>
                                <td><FaTooth className="tooth-icon" /></td>
                                <td><FaTooth className="tooth-icon" /></td>
                                <td><span className="cross">休</span></td>
                            </tr>
                            <tr>
                                <td className="time-col">14:30 ~ 19:00</td>
                                <td><FaTooth className="tooth-icon" /></td>
                                <td><FaTooth className="tooth-icon" /></td>
                                <td><span className="cross">休</span></td>
                                <td><FaTooth className="tooth-icon" /></td>
                                <td><FaTooth className="tooth-icon" /></td>
                                <td><span className="cross">休</span></td>
                                <td><span className="cross">休</span></td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="hours-note">※ 受付は診療終了の30分前までとなります。</p>
                </div>
            </div>
        </section>
    );
};

export default ClinicHours;
