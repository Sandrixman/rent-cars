import { ISelectDropdown } from 'components/App/App.types';
import Select, { ActionMeta, GroupBase, MultiValue, SingleValue, StylesConfig } from 'react-select';

interface ISelectDropdownProps {
    options: ISelectDropdown[];
    placeholder: string;
    onChange: (
        newValue: SingleValue<ISelectDropdown> | MultiValue<ISelectDropdown>,
        actionMeta: ActionMeta<ISelectDropdown>
    ) => void;
}
export const SelectDropdown: React.FC<ISelectDropdownProps> = ({
    options,
    placeholder,
    onChange,
}) => {
    const stylesForDropdown: StylesConfig<ISelectDropdown, boolean, GroupBase<ISelectDropdown>> = {
        control: styles => ({
            ...styles,
            minWidth: 160,
            backgroundColor: '#F7F7FB',
            height: 40,
            paddingLeft: 14,
            marginTop: 8,
            borderRadius: 14,
            border: 'none',
            cursor: 'pointer',
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
