import { useEffect, useState } from "react";
import styles from "./tabs.module.scss";

export const Normaltabs = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  let {
    type = "text",
    className = "",
    placeholder = "Enter",
    label = "",
    errorMessage = "",
    materialUi = true,
    onChange = () => null,
    data = [],
  } = props;

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const handleChange = (event, newValue) => {
    setActiveIndex(newValue);
    onChange(newValue);
  };
  return (
    <ul
      className={`nav nav-underline tabContainer mb-3 ${styles.tabContainer} ${className}`}
    >
      {data?.map((data, i) => (
        <li
          className={`nav-item ${styles.tabNav}`}
          onClick={(e) => handleChange(e, i)}
          key={i}
        >
          <a
            className={`nav-link  ${
              activeIndex === i && `${styles.tabNavLinkActive} active`
            } ${styles.tabNavLink}`}
          >
            {data.label}
          </a>
        </li>
      ))}
    </ul>
  );
};
