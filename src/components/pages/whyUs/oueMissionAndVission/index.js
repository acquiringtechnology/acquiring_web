
import styles from './oueMissionAndVission.module.scss'

export const OueMissionAndVission=()=>{


    return (
        <div className={styles.OueMissionAndVission}>
        <div
        className={`container  mt-5 mb-5 h-100`}
      >
        
         {/* <h4></h4> */}
         <div className="row justify-content-center align-items-center h-100">
            <div className={`col-md-6  mb-4 ${styles.rightB}`}>
              <h4 className={styles.oueMissionAndVissionTitle}>Our Mission</h4>
              <p className={styles.oueMissionAndVissionSubTitle}>
              To democratize tech education worldwide by meeting the standards of the EdTech industry.
              </p>
              
            </div>
            
            <div className="col-md-6 text-center mb-4">
              <h4 className={styles.oueMissionAndVissionTitle}>Our Vision</h4>
              <p className={styles.oueMissionAndVissionSubTitle}>
              To shape lives by bestowing high-end tech skills to learners in their native languages & Connect the tech career aspirants with the corporate industry.
              </p>
            </div>
          </div>
         </div>
       
        </div>
    )

}