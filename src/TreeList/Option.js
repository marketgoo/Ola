import React from "react";
import { default as PT } from "prop-types";
import cx from "classnames";

const TreeListOption = ({ className, variant, children, ...props }) => {
  const styles = cx(
    "ola_treeList-option",
    { [`is-${variant}`]: variant },
    className
  );
  return (
    <li className={styles} {...props}>
      {children}
    </li>
  );
};

TreeListOption.defaultProps = {
  className: null,
  variant: null,
};

TreeListOption.propTypes = {
  /** Extra className */
  className: PT.string,
  /** TreeListOption variants */
  variant: PT.oneOf(["link"]),
  /** Childen nodes */
  children: PT.oneOfType([PT.string, PT.arrayOf(PT.node), PT.node]).isRequired,
};

export default TreeListOption;
