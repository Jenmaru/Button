'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Button() {
    const [ count, setCount ] = useState(0);
    const [ rings, setRing ] = useState('');
    const [ mot, setMot ] = useState('');
    const [ newMot, setNewMot ] = useState('');

    async function motFunc() {
        const mass = [];
        await axios.get('/api').then((res) => setMot(res.data))
        .then(() => mot.split("li>").map((el) => el.length > 10 ? mass.push(el) : null))
        .then(() => setNewMot(mass[count - 1].slice(3, mass[count - 1].length - 6).replace("&mdash;", "-")));
    }
    
    function ring() {
        setRing('ring-10')
        setTimeout(() => setRing(''), 1000);
    };

    async function coconut() {
        ring();
        setCount(count + 1);
        await motFunc();
    };

    return (
        <>
        <button type="button" className={`text-white w-100 h-40 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 
        hover:bg-gradient-to-br focus:${rings} focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 
        rounded-lg text-xl text-center`} onClick={async () => await coconut()}>
            {`${count}`}
        </button>
        <section>
            {newMot}
        </section>
        </>
    )
}