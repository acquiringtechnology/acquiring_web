import styles from "./input.module.scss";

const NormalInput = (props) => {
  let {
    className = "btn-primary",
    title = "",
    type = "text",
    placeholder = `Enter ${title}`,
    errorMessage = "",
    inputGroup = false,
    inputGroupRightText='',
    readOnly=false
  } = props;

  return (
    <div className="mb-3">
      <label className="form-label">{title}</label>
      {inputGroup ? (
        <div class="input-group mb-3">
          <span className="input-group-text bg-transparent border-end-0" id="basic-addon1">
            {inputGroupRightText}
          </span>

          <input
            {...props}
            type={type}
            className={`form-control border-start-0 ${className} ${styles.formInput}`}
            placeholder={placeholder}
            readOnly={readOnly}
          />
        </div>
      ) : (
        <input
          {...props}
          type={type}
          className={`form-control ${className} ${styles.formInput}`}
          placeholder={placeholder}
          readOnly={readOnly}
        />
      )}
      <span className="text-danger">{errorMessage}</span>
    </div>
  );
};
export default NormalInput;
