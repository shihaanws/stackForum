import React ,{Component} from "react";
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RestoreIcon from '@material-ui/icons/Restore';

class Counter extends Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }


    increment =()=>{
        this.setState({
            count: this.state.count+1
        })
    }

    decrement =()=>{
        this.setState({
            count: this.state.count-1
        })
    }

    render(){
        const style = {
            color: 'grey',
            fontSize: 30
          };
          const style1 = {
            color: 'orange',
            fontSize: 60
          };
        return (
          <div>
           
           <ArrowDropUpIcon style={style1} onClick={this.increment}/>
           <p style={style}>&nbsp;&nbsp;&nbsp;{this.state.count}</p>
           <ArrowDropDownIcon style={style1} onClick={this.decrement}/>
           &nbsp;&nbsp;&nbsp;&nbsp;<RestoreIcon/>

          </div>
        )
      }
}

export default Counter;