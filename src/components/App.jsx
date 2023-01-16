import { React } from 'react';
import { useSelector } from 'react-redux';

import { ContactsList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import css from './Container/Container.module.css';
import { selectContacts } from 'components/redux/contacts/selectors';

export const App = () => {
  const contacts = useSelector(selectContacts);

  return (
    <div className={css.container}>
      <ContactForm />

      {contacts.length ? (
        <>
          <Filter />
          <ContactsList />
        </>
      ) : (
        <p>There are no contacts in your list</p>
      )}
    </div>
  );
};
