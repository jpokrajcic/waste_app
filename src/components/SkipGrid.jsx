import { IoIosWarning } from 'react-icons/io';

const SKIP_IMAGE_URL =
  'https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/4-yarder-skip.jpg';

function SkipGrid(props) {
  const { skipSizes, selectedSkip, setSelectedSkip } = props;

  function handleSkipSelection(skip) {
    if (skip.allows_heavy_waste) setSelectedSkip(skip);
  }
  return (
    <div className="skip-grid" data-testid="skip-grid">
      {skipSizes.map((skip) => (
        <div
          key={skip.size}
          className={`skip-card ${
            selectedSkip?.size === skip.size ? 'selected' : ''
          } ${!skip.allows_heavy_waste ? 'disabled' : ''}`}
          onClick={() => handleSkipSelection(skip)}
        >
          <div className="skip-image">
            <img
              src={SKIP_IMAGE_URL}
              alt={`${skip.size} Yard Skip`}
              className="skip-img"
            />
            {!skip.roadAllowed && (
              <div className="road-warning">
                <IoIosWarning size="1rem" />
                Not Allowed On The Road
              </div>
            )}
          </div>

          <div className="skip-info">
            <div className="skip-details">
              <h3>{skip.size} Yard Skip</h3>
              <div className="skip-period">
                {skip.hire_period_days} day hire period
              </div>
            </div>
            <div className="price">£{skip.price_before_vat}</div>
          </div>

          <button
            className={`select-btn ${
              !skip.allows_heavy_waste
                ? 'disabled'
                : selectedSkip?.size === skip.size
                ? 'selected'
                : 'primary'
            }`}
            disabled={!skip.allows_heavy_waste}
          >
            {!skip.allows_heavy_waste
              ? 'Not Suitable for Heavy Waste'
              : selectedSkip?.size === skip.size
              ? 'Selected'
              : 'Select This Skip'}
          </button>
        </div>
      ))}
    </div>
  );
}
export default SkipGrid;
