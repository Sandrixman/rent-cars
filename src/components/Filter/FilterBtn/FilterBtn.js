import * as SC from './FilterBtn.styled';

const FilterBtn = ({ onFilter }) => {
    return (
        <SC.FilterBtn type="button" variant="contained" onClick={onFilter}>
            Search
        </SC.FilterBtn>
    );
};

export default FilterBtn;
