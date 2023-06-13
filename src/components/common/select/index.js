import Select from 'react-select'
const NormalSelect = (props) => {
    let {
        className = 'btn-primary',
        title = '',
        type = 'text',
        options = [
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' }
        ]
    } = props;
    const customStyles = {
        control: base => ({
            ...base,
            height: 48,
            minHeight: 48,
            boxSizing: 'border-box',
            border: '2px solid #cbd2e0',
            background: 'white'
        })
    };
    return (
        <div className="mb-3">
            <label className="form-label">{title}</label>
            <Select {...props} options={options} className='text' styles={customStyles} />
        </div>

    )
};
export default NormalSelect;