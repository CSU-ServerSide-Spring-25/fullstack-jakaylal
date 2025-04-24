import React, { useState } from 'react';

const Navbar = () => {
    const { activeTab, setActiveTab } = useState('f');
    const checkClassActive = (tab) => {
        return `btn btn-${tab === activeTab ? 'primary' : 'dark'}`
    }
    return (
        <div className="container" style={{
            backgroundImage: "url('https://apod.nasa.gov/apod/image/2204/Z62_5747-Edit1090.jpg')", height: '700px', padding: '0px', margin: '0px', backgroundSize: 'cover',
            maxWidth: '100%'
        }}>
            <div class="container" style={{ color: 'white', paddingTop: '100px' }}>
                <h1>Weather App</h1>
            </div>
            <div className='container' style={{ width: '50%' }}>
                <button style={{ margin: '10px' }} type="button" class={checkClassActive('f')} onClick={() => setActiveTab('f')}>
                    Forecast
                </button>
                <button style={{ margin: '10px' }} type="button" class={checkClassActive('c')} onClick={() => setActiveTab('c')}>
                    Current
                </button>
                <button style={{ margin: '10px' }} type="button" class={checkClassActive('a')} onClick={() => setActiveTab('a')}>
                    Alerts
                </button>
            </div>
            <div className="container">
                <form>
                    <div class="mb-3">
                        <label style={{ color: 'white', paddingTop: '30px' }} for="exampleInputPassword1" class="form-label">Enter your zip code to get started!</label>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <input style={{ width: '50%', borderRadius: '8px 0px 0px 8px' }} type="text" class="form-control" id="exampleInputPassword1" />
                            <button style={{ borderRadius: '0px 8px 8px 0px' }} type="submit" class="btn btn-primary">Submit</button>
                        </div>

                    </div>

                </form>
            </div>
        </div>
    )
};

export default Navbar;