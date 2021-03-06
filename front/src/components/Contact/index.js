import { connect } from 'react-redux';

import { createContact } from '~/src/actions/contact';
import Contact from './Contact';

const stateToProps = state => ({
  isSending: state.contact.isSending,
  error: state.contact.error,
  contactSent: state.contact.contactSent
});

const actionsToProps = { createContact };

export default connect(stateToProps, actionsToProps)(Contact);
