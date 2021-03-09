import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
state = {
    habits :[
        { key: 1, name: 'Reading', count: 0 },
        { key: 2, name: 'Coding', count: 0 },
        { key: 3, name: 'Running', count: 0 }
    ]
}

    render() {
        return <ul>
            {
                this.state.habits.map(habit => (
                    <Habit key={habit.id} habit={habit} />
                ))
            }
        </ul>
    }
}

export default Habits;