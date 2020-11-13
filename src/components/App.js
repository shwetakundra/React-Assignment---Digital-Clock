import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time :new Date()
        }
        this.intervalId=null
    }
    render() {

        return (
            <div className="clock">
                <h3 id="time">{this.getTimeString()}</h3>

            </div>
        )
    }
    componentDidMount(){
        this.intervalId=setInterval(()=>{
            this.setState({
                time:new Date()
            })
        },1*1000)
    }
    componentWillUnmount(){
        clearInterval(this.intervalId)
    }
    getTimeString() {
        const currTime = this.state.time
        const [hours, minutes, seconds] = [
            currTime.getHours(), 
            currTime.getMinutes(), 
            currTime.getSeconds()
        ]
        const amOrpm=hours>=12?"PM":"AM"
        const twelveHourFormat=hours>12?hours-12:hours
        const hourString=this.padNumberToDigits(twelveHourFormat)
        const minuteString=this.padNumberToDigits(minutes)
        const secondString=this.padNumberToDigits(seconds)
        const timeString=`${hourString}:${minuteString}:${secondString} ${amOrpm}`
        return timeString
    }
    padNumberToDigits(num){
        return `${num<10?"0":""}${num}`
    }
}


export default App;
