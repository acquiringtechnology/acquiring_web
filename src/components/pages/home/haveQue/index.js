
import styles from './haveQue.module.scss';
import { NormalButton } from '@/components/common'
const HaveQue = () => {


    return (
        <section className={`${styles.haveQueContiner}`}>
            <div className='container '>
                <div className="row justify-content-center align-items-center ">
                    <div className="col-lg-6 text-center">

                        <h3 className={`text-white mb-0 ${styles.haveQueTitle}`}>Still have questions?</h3>
                        {/* <p className={`text-white`}> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    */}
                                          </div>
                    <div className="col-lg-6 text-center">
                        <NormalButton className={`btn-outline-primary ${styles['join-team-btn']}`} title='Contact Us' />
                    </div>

                </div>
            </div>


        </section>
    )


};

export default HaveQue;