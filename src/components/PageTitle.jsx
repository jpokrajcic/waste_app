import { Fragment } from 'react';

function PageTitle(props) {
  const { title, description, disclaimer } = props;

  return (
    <Fragment>
      <div className="page-title" data-testid="page-title">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      {disclaimer && <div className="disclaimer">{disclaimer}</div>}
    </Fragment>
  );
}

export default PageTitle;
