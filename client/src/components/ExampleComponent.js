import React, { useEffect } from 'react';

const ExampleComponent = () => {
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('/api/hello');
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const json = await response.json();
          } catch (e) {
          }
        };
        fetchData();
      }, []);
    return (
        <div>
            <h1>Hello from ExampleComponent!</h1>
            <p>This is a simple example component.</p>
        </div>
    );
};

export default ExampleComponent;