function FooterNavigation(props) {
  const { selectedSkip } = props;

  function backClickHandler() {
    // Logic to handle back click, e.g., navigate to previous step
    console.log('Back clicked');
  }

  function continueClickHandler() {
    // Logic to handle continue click, e.g., navigate to next step
    console.log('Continue clicked with selected skip:', selectedSkip);
  }

  return (
    <footer className="footer-nav" data-testid="footer-nav">
      <div className="nav-content">
        <div
          className={`selected-info ${
            selectedSkip ? '' : 'selected-info-hidden'
          }`}
        >
          <div className="selected-label">Selected skip:</div>
          <div className="selected-details">
            {selectedSkip?.size} yard skip - {selectedSkip?.hire_period_days}{' '}
            days hire - £{selectedSkip?.price_before_vat} (pre VAT)
          </div>
        </div>
        <div className="nav-buttons">
          <button className="nav-btn back-btn" onClick={backClickHandler}>
            Back
          </button>
          <button
            className="nav-btn continue-btn"
            disabled={!selectedSkip}
            onClick={continueClickHandler}
          >
            Continue
          </button>
        </div>
      </div>
    </footer>
  );
}
export default FooterNavigation;
