import { Fragment } from 'react';

const LayoutComponent = ({ children }: JSX.ElementChildrenAttribute) => {
  return (
    <Fragment>
      <header className="header">
        <h1>Nextjs rendering concept</h1>
      </header>
      {children}
      <footer className="footer">
        <a
          href="http://asiasoftwaresolutions.com/"
          target="_blank"
          rel="noreferrer"
        >
          App By Satveer from Asia Software Solutions
        </a>
      </footer>
    </Fragment>
  );
};

export default LayoutComponent;
