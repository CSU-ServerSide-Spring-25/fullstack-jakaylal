import React, { useState } from 'react';
import axios from 'axios';
import WeatherTabResults from './components/WeatherTabResults';
import Navbar from './components/Navbar';

function App() {
    const [activeTab, setActiveTab] = useState('c');
    const [activeTabData, setActiveTabData] = useState({})
    const [showAlert, setShowAlert] = useState(false)
    const checkClassActive = (tab) => {
        return `btn btn-${tab === activeTab ? 'primary' : 'dark'}`
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const zipCode = formData.get('zipCode')
        let url = 'https://9000-csuserversi-csuserversi-6rn9vahg5pr.ws-us118.gitpod.io'
        switch (activeTab) {
            case ('f'):
                url += `/forecast?location=${zipCode}&days=3`;
                break;
            case ('c'):
                url += 'AddYourCurrentHere'
                break;
            case ('a'):
                url += 'addyouralertshere'
                break;
            default:
                break;
        }
        if (url) {
            axios.get(url).then(response => {
                const respData = {}
                respData[activeTab] = response.data
                setActiveTabData({ ...activeTab, ...respData })
            }).catch(err => {
                setShowAlert(true)
            })
        }
    }

    return (
        <div>
            <Navbar
                handleSubmit={handleSubmit}
                checkClassActive={checkClassActive}
                setActiveTab={setActiveTab}
                showAlert={showAlert}
                setShowAlert={setShowAlert}
            />
            {Object.keys(activeTabData).length > 0 &&
                <WeatherTabResults
                    activeTab={activeTab}
                    activeTabData={activeTabData}
                />
            }
            <div style={{ width: '100vw', height: '100px', backgroundColor: "black" }}>
                <div className="container">
                    <p style={{ color: 'white', paddingTop: '25px' }}>
                        Weather App. CSU
                    </p>
                </div>

            </div>
        </div>
    );
}

export default App;