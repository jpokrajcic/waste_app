import React, { useEffect, useState } from 'react';
import ProgressStepIndicator from './components/ProgressStepIndicator';
import FooterNavigation from './components/FooterNavigation';
import PageTitle from './components/PageTitle';
import SkipGrid from './components/SkipGrid';

function App() {
  const [selectedSkip, setSelectedSkip] = useState();
  const [skipSizes, setSkipSizes] = useState([]);
  useEffect(() => {
    fetch(
      'https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft'
    )
      .then((response) => response.json())
      .then((data) => {
        setSkipSizes(data);
      })
      .catch((error) => {
        console.error('Error fetching skip sizes:', error);
      });
  }, []);

  return (
    <div className="app">
      <div className="container">
        {/* Progress Step Indicator */}
        <ProgressStepIndicator />

        {/* Page title */}
        <PageTitle
          title="Choose Your Skip Size"
          description="Select the skip size that best suits your needs"
          disclaimer="Imagery and information shown throughout this website may not
                reflect the exact shape or size specification, colours may vary,
                options and/or accessories may be featured at additional cost."
        />

        {/* Skip Grid */}
        <SkipGrid
          skipSizes={skipSizes}
          selectedSkip={selectedSkip}
          setSelectedSkip={setSelectedSkip}
        />
      </div>

      {/* Footer Navigation */}
      <FooterNavigation selectedSkip={selectedSkip} />
    </div>
  );
}

export default App;
