import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select'
// import Select from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';





class Search extends Component {
  state = {
    searchText: '',
    amount: 15,
    apiURL: 'https://pixabay.com/api',
    apiKey: '4405337-03fb01f28d909b34b671703bf',
    images: []
  }

  onTextChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <div className="container grid">
      <FormControl>
        <TextField
          name="searchText"
          label="Search for Images"
          value={this.state.searchText}
          onChange={this.onTextChange}
          fullWidth={true}
        />
      </FormControl>
        
      <FormControl>
        <InputLabel htmlFor="age-native-simple">Images Per Search</InputLabel>
          <Select 
            name="amount"
            floatingLabelText="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          >
            <option value={5}>5</option>
            <option value={15}>15</option>
            <option value={25}>20</option>
            <option value={30}>30</option>
            <option value={50}>50</option>
          </Select>
      </FormControl>
      </div>
    )
  }
};

export default Search;
