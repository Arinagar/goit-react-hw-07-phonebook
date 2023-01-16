import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import css from './ContactList.module.css';
import { deleteContact } from 'components/redux/contacts/contactsSlice';
import { selectContacts } from 'components/redux/contacts/selectors';
import { filterContacts } from 'components/redux/filter/selectors';

export const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(filterContacts);
  const dispatch = useDispatch();
  const filteredContacts = contacts.filter(contacts =>
    contacts.name.trim().toLowerCase().includes(filter.trim().toLowerCase())
  );
  return (
    <ul className={css.list}>
      {filteredContacts.map(el => {
        return (
          <li key={el.id} className={css.list_item}>
            {el.name}: {el.number}
            <button
              type="button"
              onClick={() => {
                dispatch(deleteContact(el.id));
              }}
              className={css.list_button}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
