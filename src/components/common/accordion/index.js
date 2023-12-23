import { flatMap } from "lodash";
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
    <div className="accordion">
      {data?.map((data, i) => (
        <div className={`accordion-item ${className}`} key={i}>
          <div className="accordion-header">
            <button
              className={`accordion-button border-bottom  ${
                isShow && isShowIndex === i && "collapsed"
              }`}
              onClick={() => handleCollaps(i)}
              type="button"
            >
              <span className={titleClassName}> {data?.title}</span>
              {data?.subTitle && (
                <div className="row">
                  <div className="col-md-11">
                    <p className={`mb-0 ${subTitleClassName}`}>{data?.subTitle} </p>
                  </div>
                </div>
              )}
            </button>
          </div>
          <div
            className={`accordion-collapse collapse  ${
              isShow && isShowIndex === i && "show"
            }`}
          >
            <div className="accordion-body">{renderItem(data)}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default NormalAccordion;
