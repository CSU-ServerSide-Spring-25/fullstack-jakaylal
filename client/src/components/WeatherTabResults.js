import React from 'react';
import Forecast from './Forecast';

const WeatherTabResults = (props) => {
    const { activeTab, activeTabData } = props;
    switch (activeTab) {
        case ('f'):
            return <Forecast activeTabData={activeTabData.f} />
        case ('c'):
            return <>Current</>
        case ('a'):
            return <>Alert</>
        default:
            return null;
    }
};

export default WeatherTabResults;