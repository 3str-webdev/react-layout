import React from "react";

interface ContentProps {
  children: React.ReactNode;
  footer?: React.FC | React.ReactElement | undefined;
}

const Content: React.FC<ContentProps> = ({ children, footer = <></> }) => {
  return (
    <div className="react-content">
      <div className="wrapper">
        <>
          <div className="react-content-wrapper">{children}</div>
          {footer}
        </>
      </div>
    </div>
  );
};

export default Content;
