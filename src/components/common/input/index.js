import styles from './input.module.scss'

const NormalInput = (props) => {
    let {
        className = 'btn-primary',
        title = '',
        type='text',
        placeholder=`Enter ${title }`
    } = props;

    return (
        <div className="mb-3">
            <label className="form-label">{title}</label>
                <input {...props} type={type} className={`form-control ${className} ${styles.formInput}`} placeholder={placeholder}  />
        </div>

    )
};
export default NormalInput;