import React from 'react';
import{ Component } from 'react';
   
    class Todo extends Component {
      constructor() {
        super();
        this.state = {
         items: [],
        };
       this.handleChange = this.handleChange.bind(this);
      }
    
      componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos')
          .then(res => res.json())
          .then(items => this.setState({ items }));
          };
       
          handleChange = (items) => {
            this.setState({ items: !this.state.items.completed });
          };

         
         
    
      render() {
        const { items } = this.state;
             return (
            <div>
              <h2 className="head"> Todo List </h2>
              {items.map(item => (
               <ul>
               <li>{item.id}</li>
               <li>{item.title}</li>
               <li><input type="checkbox" checked={item.completed} onChange={this.handleChange}/>
                 </li>
             </ul>
              ))}
            </div>
          );
        }
      }
    

export default Todo;
