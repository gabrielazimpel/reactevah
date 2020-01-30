import React, { useState, useEffect } from "react";
import axios from 'axios'


export default function Search() {

    

    return(
        


    )
    
};








































/*function Search() {

    token = null;
    state = {
      query: "",
      characters: []
    };
  
    onChange = e => {
      const { value } = e.target;
      this.setState({
        query: value
      });
  
      this.search(value);
    };
  
    search = query => {
      const url = 'https://www.breakingbadapi.com/api/characters'
      const token = {};
      this.token = token;
  
      fetch(url)
        .then(results => results.json())
        .then(data => {
          if (this.token === token) {
            this.setState({ characters: data.results });
          }
        });
    };
  
    componentDidMount() ;{
      this.search("");
    }
  
   

    return (
        <form>
            <input
            type="text"
            className="search-box"
            placeholder="Search for..."
            onChange={this.onChange}
            />
            {this.state.characters.map(characters => (
            <ul key={characters.name}>
                <li>{characters.name}</li>
            </ul>
            ))}
        </form>
    );
    
}*/
