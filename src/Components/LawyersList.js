import React, { Component } from "react";
// import "../App.css";
import faker from "faker";
import List from "./List"
import "./list.css"



let data = [];
for (let i=0;i<25;i++){
    data.push({
        id :i,
        name:faker.name.findName(),
        price :faker.random.number({ min:1500 ,max:20000}),
        year :faker.random.number({min:1960,max:2017}),
        rating :0
    })
}



class LawyerList extends React.Component{
    render() {
        return (
          <div >
            {data.map(object => (
              <List
                name={object.name}
                price={object.price}
                year={object.year}
              />
            ))}

          </div>
        );

      }
    }
    export default LawyerList;

    
      

 
