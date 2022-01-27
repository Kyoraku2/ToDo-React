import React, {Component} from 'react'

class ListElement extends Component {
    remove(index){
        this.props.removeTask(index);
    }

    check(index){
        var element = document.getElementById("task"+index);
        if(element.classList.length === 1){
            element.className += " checked";
        }else{
            element.className = "task";
        }
    }

    render() {
        const {description,index} = this.props;
        return (
            <li className='task' id={"task"+index}><input type="checkbox" className='done' onChange={() => this.check(index)}></input> {description} <button className='modify' onClick={() => this.remove(index)}></button></li>
        )
    }
}
  
export default ListElement