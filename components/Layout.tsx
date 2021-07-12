import { Fragment } from 'react';

const LayoutComponent = ({ children }: JSX.ElementChildrenAttribute)  => {
  return (
    <Fragment>
      <header></header>
      <div>{children}</div>
      <footer>
          
      </footer>
    </Fragment>
  );
};
export default LayoutComponent;
