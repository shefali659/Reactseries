import React from 'react';


class Car extends React.Component{
    constructor(props){
        super(props);
        this.state = {color:"red"}
    }
    // static getDerivedStateFromProps(props,state){
    //     return { color:props.brand}
    // }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({color:'yellow'})
        },1000)
    }
    shouldComponentUpdate(){
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        document.getElementById("div1").innerHTML = "Before update my fav color= "+prevState.color
    }
    componentDidUpdate(){
        document.getElementById("div2").innerHTML = "After update my fav color= "+ this.state.color
    }
    render(){
        return (
            <>
            <h2>I am a {this.state.color} car brand {this.props.brand}</h2>
            <div id="div1"></div>
            <div id="div2"></div>
            </>
        )
    }
    
}

export default Car;