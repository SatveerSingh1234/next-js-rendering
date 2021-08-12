import { Fragment } from "react";

const LayoutComponent = ({ children }: JSX.ElementChildrenAttribute) => {
  return (
    <Fragment>
      <header className="header">
        <div className="header-left">
          <a className="active" href="#">
            SSG
          </a>
          <a href="#">SSR</a>
          <a href="#">CSR</a>
          <a href="#">SSG Revalidation</a>
        </div>
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
