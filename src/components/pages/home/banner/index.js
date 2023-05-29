
import styles from './banner.module.scss';
import PropTypes from 'prop-types';

const Banner = (props) => {
   

    return (
        <section>
        <div class="container mb-5">
            <div className={styles.bannerContiner}>


                <div className="row h-100 ">
                    <div className="col-md-6 h-100 d-flex align-items-center justify-content-center">

                        <div className={styles.bannerTitleContiner}>
                            <h4 className={styles.bannerTitle}>{props?.title}</h4>

                            <p>{props?.description}</p>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <img className={`img-fluid ${styles.bannerImage}`} src={props?.bannerImage}  />

                    </div>
                </div>
            </div>
        </div>
        </section>
    )


};

export default Banner;

Banner.propTypes = {
    title: PropTypes.string.isRequired,
    bannerImage: PropTypes.string.isRequired,
    description : PropTypes.string.isRequired,
};

