import { useSelector } from 'react-redux';

export default function Filter({ handlerFilter }) {
  const name = useSelector(state => state.contacts.filter);

  return (
    <label>
      Find user by name
      <input type="text" name="name" value={name} onChange={handlerFilter} />
    </label>
  );
}