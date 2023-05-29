

 const NormalButton=( props)=>{
    let {
        className='btn-primary',
        title=''
    }=props;

    return(
        <button {...props} className={`btn  ${className}`}type="submit" >{title}</button>
    )
};
export default NormalButton;