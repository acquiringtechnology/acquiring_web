
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
              <h4 className={styles.theStoryBehindOurTitle}>About</h4>
              <p className={styles.ourServicesSubTitle}>
              Acquiring Technology was developed and is the {`world's`} first cloudbased Ed-Tech learning platform, allowing students to master
programming skills in their native language. In order to democratize tech
education worldwide, it meets the EdTech {`industry's`} standards
              </p>
            </div>
          </div>
         </div>
       
        </div>
    )

}