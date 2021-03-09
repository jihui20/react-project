import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';



  class App extends Component {
    state = {
      habits :[
          { id: 1, name: 'Reading', count: 0 },
          { id: 2, name: 'Coding', count: 0 },
          { id: 3, name: 'Running', count: 0 }
      ]
  }

  handleIncrement = habit => {
      const habits = [...this.state.habits]; // ... : Spread Operator (배열을 복사해서 새로운 껍데기 만듬) / 직접적으로 state의 배열을 수정하면 안좋기 때문에!
      const index = habits.indexOf(habit);
      habits[index].count ++;

      this.setState({ habits: habits}); //벨류의 habits은 복사한 const habits의 배열
      // 키와 벨류값이 같은 경우에는 this.setState({ habits })로 써도됨.
  }
  
  handleDecrement = habit => {
      const habits = [...this.state.habits];
      const index = habits.indexOf(habit);
      const count = habits[index].count -1;
      habits[index].count = count < 0 ? 0 : count;

      this.setState({habits});
  }

  handleDelete = habit => {
      // 새로운 로컬변수인 habits을 만든 후 빙글빙글 돌면서 아이템을 전달받음.
      // 배열에 있는 아이템의 아이디와 우리가 삭제하고자 하는 아이템 아이디가 동일하지 않는 아이들만 뽑아냄 (filter API사용)
      const habits = this.state.habits.filter(item => item.id !==habit.id); 

      this.setState({habits});

  }


    render() {
      return (
        <>
          <Navbar 
            totalCount={this.state.habits.filter(item => item.count > 0).length}
          />
          <Habits 
            habits={this.state.habits}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </>
      );
    }
  }

export default App;