import React, {Component} from 'react';
class TotalMenu extends Component{
constructor(props){
    super()
    this.total=props.total
}
render(){
    return(
        <div>
            {this.total}
        </div>
    )
}
} 

export default TotalMenu; 