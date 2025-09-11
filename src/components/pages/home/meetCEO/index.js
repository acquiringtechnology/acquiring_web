import styles from "./meetCEO.module.scss";

export const MeetCEO = () => {
  return (
    <section className={`pt-5 sessectionsion-dark ${styles.meetCEOcontainer}`}>
      <div className="container mb-5">
        <div className="row align-items-center">
          {/* Image Section (on top in mobile) */}
          

          {/* Text Section */}
          <div className="col-12 col-md-8">
            <header className="mt-3 mt-md-5">
              <h1 className={`mb-3 ${styles.ceoTitle}`}>Meet your Mentor</h1>
              <h4 className={styles.subTitle}>Hello</h4>
              <h4 className={styles.nameTitle}>I’m Anveesh</h4>
            </header>

            <article>
              <p>
                With over a decade of experience in the IT industry, I’ve had the
                opportunity to work with world-renowned companies like Disney and
                Adobe. These experiences allowed me to gain deep expertise in
                software development, problem-solving, and working with large-scale
                systems. Over the past 3+ years, I’ve brought this knowledge into
                training, helping students bridge the gap between academic learning
                and real-world application. My teaching combines industry insights
                with practical examples, making complex concepts easier to
                understand and apply.
              </p>
            </article>

            {/* Stats */}
            <div className="row text-center text-md-start mt-4">
              <div className="col-6">
                <h1 className={styles.countTitle}>10+ years</h1>
                <label>Professional experience</label>
              </div>
              <div className="col-6">
                <h1 className={styles.countTitle}>500+</h1>
                <label>Students Tutored</label>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 text-center mb-4 mb-md-0">
            <img
              src="/img/trainer-image.png"
              alt="Mentor Anveesh"
              className="img-fluid rounded-3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
