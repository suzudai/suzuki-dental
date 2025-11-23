import React from 'react';
import Hero from '../components/Hero';
import News from '../components/News';
import Philosophy from '../components/Philosophy';
import Services from '../components/Services';
import Access from '../components/Access';

const Home = () => {
    return (
        <main>
            <Hero />
            <News />
            <Philosophy />
            <Services />
            <Access />
        </main>
    );
};

export default Home;
