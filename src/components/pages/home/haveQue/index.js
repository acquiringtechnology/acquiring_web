
import styles from './haveQue.module.scss';
import{NormalButton} from '@/components/common'
const HaveQue = () => {


    return (
        <section className={`${styles.haveQueContiner}`}>
            <div className='container '>
                <div className="row justify-content-center ">
                    <div className="col-lg-8 text-center">

                    <h3 className={`text-white ${styles.haveQueTitle}`}>Call To Action</h3>
                    <p className={`text-white`}> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                   
                   <NormalButton className={`btn-primary ${styles['join-team-btn']}`} title='Join RVSB'/>
                    </div>


                </div>
            </div>


        </section>
    )


};

export default HaveQue;