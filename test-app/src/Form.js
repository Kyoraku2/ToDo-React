import React, {Component} from 'react'

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {value: ''};
    }

    handleChange = event => {
        this.setState({value: event.target.value});
    }

    
    onFormSubmit = (event) => {
        event.preventDefault();
        if(this.state.value === ''){
            return;
        }

        // LocalStorage
        var tasks = localStorage.getItem("tasks");
        tasks = (!tasks) ? [] : JSON.parse(tasks);
        tasks.push(this.state.value);
        localStorage.setItem("tasks", JSON.stringify(tasks));

        this.props.handleSubmit(this.state);
        event.target.children[0].value = "";
        this.setState({value: ''});
    }

    render(){
        return (
            <form id='taskForm' onSubmit={this.onFormSubmit}>
                <input onChange={this.handleChange} type='text' id='addTask' value={this.state.value}></input>
                <input type="submit" value=""></input>
            </form>
        );
    }
}

export default Form