import styles from './input.module.scss'

const NormalInput = (props) => {
    let {
        className = 'btn-primary',
        title = '',
        type='text',
        placeholder=`Enter ${title }`,
        errorMessage=''
    } = props;

    return (
        <div className="mb-3">
            <label className="form-label">{title}</label>
                <input {...props} type={type} className={`form-control ${className} ${styles.formInput}`} placeholder={placeholder}  />
       <span className='text-danger'>{errorMessage}</span>
        </div>

    )
};
export default NormalInput;