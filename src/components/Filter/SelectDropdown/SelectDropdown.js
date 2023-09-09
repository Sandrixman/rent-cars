import Select from 'react-select';

const SelectDropdown = ({ options, placeholder, onChange }) => {
    const stylesForDropdown = {
        control: styles => ({
            ...styles,
            minWidth: 160,
            backgroundColor: '#F7F7FB',
            height: 40,
            paddingLeft: 14,
            marginTop: 8,
            borderRadius: 14,
            border: 'none',
        }),
    };

    return (
        <Select
            options={options}
            placeholder={placeholder}
            isClearable={true}
            onChange={onChange}
            styles={stylesForDropdown}
        />
    );
};

export default SelectDropdown;
