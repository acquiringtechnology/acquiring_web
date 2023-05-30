
import { NormalButton } from '../../../common'
import styles from './quizeComplite.module.scss'

export const QuizeComplite = () => {


    return (
        <div className={`container text-center mt-5 ${styles.quizeCompliteContiner}`}>

            <div className="row">
                <div className="col-md-12 mb-5">
                    <h4 className={styles.quizeTitle}>Result</h4>

                    <h4 className='mb-5'>70/100</h4>

                    <NormalButton className='btn-lg btn-primary' title='Go to Home Page' />
                </div>
                <div className="col-md-12">
                    <img className='img-fluid' src='/img/cong.png' />

                </div>
            </div>


        </div>




    )

}