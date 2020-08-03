//Core
import React, { Component } from 'react';
import 'modern-normalize/modern-normalize.css';
import {connect} from 'react-redux'

//Components
import Form from './components/Form';
import ContactList from './components/ContactList';
import Filter from './components/Filter/';
import {fetchContacts} from './redux/phonebook/phonebook-operations'

class Phonebook extends Component {
 componentDidMount() {
  this.props.fetchContacts()
 }
  
  render() {
    return (
      <>
        <div className="container">
          <h1 className="contents">Phonebook</h1>
          <div className="wrapper">
            <Form onSubmit={this.formSubmitHandler} />
            <Filter />
          </div>
          <ContactList />
        </div>
      </>
    );
  }
}


const mapDispatchToProps = dispatch => ( {
  fetchContacts: ()=>dispatch(fetchContacts())
})

export default connect(null,mapDispatchToProps)(Phonebook);
