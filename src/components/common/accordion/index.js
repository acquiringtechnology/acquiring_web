import { useState } from "react";


const NormalAccordion = (props) => {

    const [isShow, setShow] = useState(false)
    const [isShowIndex, setShowIndex] = useState(-1)


    let {
        className = 'btn-primary',
        title = '',
        children = '',
        data = [],
        renderItem = () => { }
    } = props;

    const handleCollaps = (i) => {
        if (!isShow) {
            setShowIndex(i)
        } else {
            setShowIndex(-1)
        }
        setShow(!isShow)
    }



    return (
        <div className="accordion">
            {data?.map((data, i) =>
                <div className="accordion-item" key={i}>
                    <h2 className="accordion-header" >
                        <button className={`accordion-button  ${isShow && isShowIndex === i && 'collapsed'}`} onClick={() => handleCollaps(i)} type="button">
                            {data?.title}
                        </button>
                    </h2>
                    <div className={`accordion-collapse collapse  ${isShow && isShowIndex === i && 'show'}`}>
                        <div className="accordion-body">
                            {renderItem(data)}
                        </div>
                    </div>
                </div>

            )}



        </div>
    )
};
export default NormalAccordion;