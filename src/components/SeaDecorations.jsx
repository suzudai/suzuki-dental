import React from 'react';
import './SeaDecorations.css';
import { FaFish } from 'react-icons/fa';

const SeaDecorations = () => {
    return (
        <div className="sea-decorations">
            <div className="fish fish-1"><FaFish /></div>
            <div className="fish fish-2"><FaFish /></div>
            <div className="fish fish-3"><FaFish /></div>
            <div className="fish fish-4"><FaFish /></div>
            <div className="bubble-large bubble-1"></div>
            <div className="bubble-large bubble-2"></div>
            <div className="bubble-large bubble-3"></div>
        </div>
    );
};

export default SeaDecorations;
