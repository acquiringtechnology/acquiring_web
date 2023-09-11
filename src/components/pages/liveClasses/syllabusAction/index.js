import styles from "./syllabusAction.module.scss";
import { NormalButton } from "@/components/common";
export const SyllabusAction = () => {
  return (
    <div className={`${styles.syllabusActionCard} mb-5`}>
      <div className="container">
        <div className="row">
          <div className="col-9 py-4">
            <h4>Syllabus</h4>
            <p>
              Get a peek through on the entire curriculum designed that ensures
              100% Job Placement Support
            </p>
          </div>
          <div className="col-3 py-4">
            <NormalButton className='btn-primary mt-4' title="Download syllabus"/>
          </div>
        </div>
      </div>
    </div>
  );
};
