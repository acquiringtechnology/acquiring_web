
import styles from './ourPromis.module.scss';
import PropTypes from 'prop-types';

const OurPromis = (props) => {

    let {
        ourPromisList = []
    } = props

    return (
        <div class="container mb-5">
            <div className={styles.ourPromisContiner}>
               
                    <div className="row g-4 g-md-5" >
                    {ourPromisList?.map(({ title = '', description = '', img = '' }, i) =>
                        <div className={`col-md-4 text-center ${styles.ourPromisCard}`} key={i}>
                            <img src={img} className={styles.ourPromisCardImage} alt="" />
                            <h4 class="mt-3">{title}</h4>
                            <p class="text-truncate-2 mb-0">{description}</p>
                        </div>
                         )}
                    </div>
               
            </div>
        </div>
    )


};

export default OurPromis;

OurPromis.propTypes = {
    ourPromisList: PropTypes.array.isRequired,
};

