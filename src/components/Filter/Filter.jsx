import { FilterContainer } from '../Filter/Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filter, getFilter } from '../../redux/filter/filter-slice';
import { Input } from '../Phonebook/Phonebook.styled';

const Filter = () => {
  const name = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilter = event => {
    dispatch(filter(event.target.value));
  };
  return (
    <FilterContainer>
      <Input
        type="text"
        value={name}
        placeholder="Filter by name..."
        onChange={handleFilter}
      />
    </FilterContainer>
  );
};

export default Filter;
