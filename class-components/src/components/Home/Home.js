import React, { Component } from 'react';
import Users from './Users';



class Home extends Component {

    constructor(props, context) {
        super(props, context);
       this.state = {
           users:[],
           cart:[]
       };
       this.handleAddToCart = this.handleAddToCart.bind(this);
    }
    
    handleAddToCart(user){
      const newCart =[...this.state.cart, user];
        this.setState({cart:newCart});
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>this.setState({users:data}))
    }
    render() {
        return (
            <div>
                <h2>Users Available: {this.state.users.length}</h2>
                <h3>Users added in the cart: {this.state.cart.length}</h3>

                {
                 this.state.users.map(user=> <Users user={user} handleAddToCart={this.handleAddToCart}></Users>)   
                }
            </div>
        );
    }
}

export default Home;