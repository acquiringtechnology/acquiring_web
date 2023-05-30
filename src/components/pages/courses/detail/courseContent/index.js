
import { NormalAccordion } from '../../../../common'
import styles from './courseDetailContent.module.scss'


export const CourseDetailContent = () => {

    const couseContent = [
        {
            title: 'HTML & CSS',
            data: [
                {
                    name: "An item"
                },
                {
                    name: "A second item"
                },
                {
                    name: "A third item 33"
                }
            ]
        },
        {
            title: 'HTML & CSS',
            data: [
                {
                    name: "An item"
                },
                {
                    name: "A second item"
                },
                {
                    name: "A third item 33"
                }
            ]
        }
    ]


    return (
        <div className={`${styles.courseDetailContiner}`}>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-8 col-md-6 col-12'>
                        <h4 className={`mb-lg-2 mb-3 ${styles.couseTitle}`}>Course content</h4>
                        <div className='row'>
                            <div className='col-md-12'>
                                <NormalAccordion data={couseContent}
                                    renderItem={(item = []) => <ul className="list-group list-group-flush">
                                        {item?.data?.map((data, i) =>
                                            <li key={i} className="list-group-item border-0">{data.name}</li>
                                        )}
                                    </ul>}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}