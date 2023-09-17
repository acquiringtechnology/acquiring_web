
import styles from './theStoryBehindOur.module.scss'

export const TheStoryBehindOur=()=>{


    return (
        <div
        className={`container  mt-5 mb-5`}
      >
         <div className={styles.theStoryBehindOurContiner}>
         {/* <h4></h4> */}
         <div className="row">
            <div className="col-md-12 text-center mb-4">
              <h4 className={styles.theStoryBehindOurTitle}>The story behind our</h4>
              <p className={styles.ourServicesSubTitle}>
                We are focused on understanding client’s business first, and
                dedicated to solve their business problems.
              </p>
            </div>
          </div>
         </div>
       
        </div>
    )

}