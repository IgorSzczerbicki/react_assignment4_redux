import React, { Component } from 'react';
import * as actions from '../store/actions'
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import {connect} from 'react-redux'

class Persons extends Component {

    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onAddPerson} />
                {this.props.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onDeletePerson(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
	return {
		persons: state.per.persons
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onAddPerson: (person) => dispatch({type: actions.ADD_PERSON, person: person}),
		onDeletePerson: (id) => dispatch({type: actions.DELETE_PERSON, id: id})
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);