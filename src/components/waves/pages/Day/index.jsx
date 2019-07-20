// React
import React from 'react'

class Day extends React.Component{

    // Get url param
    getDate = () => {
        let date = this.props.match.params.date;

        if(date !== undefined){
            let parsed = Date.parse(date);
            if(!isNaN(parsed)){
                console.log(parsed);
            } else {
                return false;
            }
        } else {
            return false;
        }
        
    }

    render(){
        this.getDate()
        return(
            <h1>Day</h1>
        )
    }
}

export default Day;
