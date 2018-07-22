import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Collapse from '@material-ui/core/Collapse';
import Settings from '@material-ui/icons/Settings';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import axios from 'axios';
import ImageResults from '../image-results/ImageResults'





class Search extends Component {
  state = {
    searchText: '',
    amount: 10,
    apiURL: 'https://pixabay.com/api',
    apiKey: 'Secret',
    safeSearch: false,
    imageType: 'all',
    checked: false,
    orientation: 'all',
    colors: '',
    cols: 4,
    images: []
  }

  onTextChange = e => {
    const val = e.target.value

    this.setState({ [e.target.name]: val }, () => {
      if (val === "") {
        this.setState({ images: [] })
      } else {
        axios.get(`${this.state.apiURL}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=${this.state.imageType}&per_page=${this.state.amount}&safesearch=${this.state.safeSearch}&orientation=${this.state.orientation}&colors=${this.state.colors}`)
          .then(res => this.setState({ images: res.data.hits }))
          .catch(err => console.log(err))
      }
    });
  }

  // onAmountChange = (e, index, value) => this.setState({ amount: value })

  change = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onAmountChange = e => {
    this.change(e);
  };

  onimageTypeChange = e => {
    this.change(e);
  };

  onOrientationChange = e => {
    this.change(e);
  };

  onColorsChange = e => {
    this.change(e);
  };

  onColsChange = e => {
    this.change(e);
  };

  handleChange = () => {
    this.setState(state => ({ checked: !state.checked }));
  };

  handleSafeSearchChange = () => {
    this.setState(state => ({ safeSearch: !state.checked }));
  };




  render() {
    console.log(this.state.images);
    return (
      <div>
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
              value={this.state.amount}
              onChange={this.onAmountChange}
            >
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={15}>15</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={30}>30</MenuItem>
              <MenuItem value={50}>50</MenuItem>
            </Select>
          </FormControl>

          <Tooltip TransitionComponent={Zoom} title="Settings">
            <IconButton onClick={this.handleChange} color="default">
              <Settings />
            </IconButton>
          </Tooltip>
        </div>

        <Collapse in={this.state.checked}>
          <div className="container hidden-inputs">

            <FormControl>
              <InputLabel htmlFor="age-native-simple">Image Type</InputLabel>
              <Select
                name="imageType"
                value={this.state.imageType}
                onChange={this.onimageTypeChange}
              >
                <MenuItem value={'all'}>All</MenuItem>
                <MenuItem value={'photo'}>Photo</MenuItem>
                <MenuItem value={'illustration'}>Illustration</MenuItem>
                <MenuItem value={'vector'}>Vector</MenuItem>
              </Select>
            </FormControl>

            <FormControl>
              <InputLabel htmlFor="age-native-simple">Orientation</InputLabel>
              <Select
                name="orientation"
                value={this.state.orientation}
                onChange={this.onOrientationChange}
              >
                <MenuItem value={'all'}>All</MenuItem>
                <MenuItem value={'horizontal'}>Horizontal</MenuItem>
                <MenuItem value={'vertical'}>Vertical</MenuItem>
              </Select>
            </FormControl>

            <FormControl>
              <InputLabel htmlFor="age-native-simple">Color</InputLabel>
              <Select
                name="colors"
                value={this.state.colors}
                onChange={this.onColorsChange}
              >
                <MenuItem value={''}>All</MenuItem>
                <MenuItem value={'grayscale'}>Grayscale</MenuItem>
                <MenuItem value={'transparent'}>Transparent</MenuItem>
                <MenuItem value={'red'}>Red</MenuItem>
                <MenuItem value={'orange'}>Orange</MenuItem>
                <MenuItem value={'yellow'}>Yellow</MenuItem>
                <MenuItem value={'green'}>Green</MenuItem>
                <MenuItem value={'turquoise'}>Turquoise</MenuItem>
                <MenuItem value={'blue'}>Blue</MenuItem>
                <MenuItem value={'lilac'}>Lilac</MenuItem>
                <MenuItem value={'pink'}>Pink</MenuItem>
                <MenuItem value={'white'}>White</MenuItem>
                <MenuItem value={'gray'}>Gray</MenuItem>
                <MenuItem value={'black'}>Black</MenuItem>
                <MenuItem value={'brown'}>Brown</MenuItem>
              </Select>
            </FormControl>

            <FormControl>
              <InputLabel htmlFor="age-native-simple">Columns</InputLabel>
              <Select
                name="cols"
                value={this.state.cols}
                onChange={this.onColsChange}
              >
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
              </Select>
            </FormControl>

            <FormControl>
              <FormControlLabel
                control={
                  <Switch
                    onChange={this.handleSafeSearchChange}
                    value={this.state.safeSearch}
                    color='primary'
                  />
                }
                label="Safe Search"
              />
            </FormControl>

          </div>
        </Collapse>
        <br />

        {/* Displays Image Results component only if the images array is not empty */}
        {this.state.images.length > 0 ? (<ImageResults cols={this.state.cols} images={this.state.images} />) : null}

      </div>
    )
  }
};

export default Search;
