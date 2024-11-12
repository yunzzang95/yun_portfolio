import React, { useState, useEffect } from 'react';

function CurrentTime() {
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setCurrentTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }));
        };

        updateTime(); // 초기 시간 설정
        const intervalId = setInterval(updateTime, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return <div className='currentTime'>{currentTime}</div>;
}

export default CurrentTime;
