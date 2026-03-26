import styles from "./accordion.module.scss";
import { useState } from "react";

const NormalAccordion = (props) => {
  const [isShow, setShow] = useState(false);
  const [isShowIndex, setShowIndex] = useState(-1);

  let {
    className = "",
    titleClassName = "",
    subTitleClassName='',    title = "",
    children = "",
    data = [],
    renderItem = () => {},
  } = props;

  const handleCollaps = (i) => {
    if(isShowIndex === i){
      setShow(false);
      setShowIndex(-1);
    }else{
      setShowIndex(i);
      setShow(true);
    
    }
   
  };

 return (
  <div className={styles.accordionWrapper}>
    {data?.map((item, i) => (
      <div className={styles.item} key={i}>
        
        {/* HEADER */}
        <div
          className={styles.header}
          onClick={() => handleCollaps(i)}
        >
          {/* LEFT */}
          <div className={styles.left}>
            <span className={styles.index}>
              {String(i + 1).padStart(2, "0")}
            </span>

            <span className={styles.title}>
              {item.title}
            </span>
          </div>

          {/* RIGHT ICON */}
          <div
            className={`${styles.icon} ${
              isShow && isShowIndex === i ? styles.open : ""
            }`}
          >
            +
          </div>
        </div>

        {/* BODY */}
        <div
          className={`${styles.body} ${
            isShow && isShowIndex === i ? styles.show : ""
          }`}
        >
          {renderItem(item, i)}
        </div>
      </div>
    ))}
  </div>
);
};
export default NormalAccordion;
