import React from 'react';
import Card from './Card'
const CardList = (props)=>{
    return(
        props.robots.map((robot,index)=>{            
            return <Card id={robot.id} name={robot.name} key ={index} email={robot.email}/>    
        })
    )
}

export default CardList;

