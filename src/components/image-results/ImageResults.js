import React, { Component } from 'react';
import propTypes from 'prop-types';
import GridList from '@material-ui/core/GridList';
import GridTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import ZoomIn from '@material-ui/icons/ZoomIn';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button'; 


class ImageResults extends Component {
  state = {
    open: false,
    currentImg:''
  }

  handleOpen = img => {
    this.setState({ open: true, currentImg: img})
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  render() {
    let imageListContent;
    const { images } = this.props

    if (images) {
      imageListContent = (
        <GridList cols={this.props.cols}>
          {images.map(img => (
            <GridTile key={img.id} >

              <img src={img.largeImageURL} alt="" />

              <GridListTileBar
                title={img.tags}
                subtitle={
                  <span>
                    by <strong>{img.user}</strong>
                  </span>
                }
                actionIcon={
                  <IconButton onClick={() => this.handleOpen(img.largeImageURL)}>
                    <ZoomIn color="primary"/>
                  </IconButton>
                }
              />

            </GridTile>
          ))}
        </GridList>
      )
    } else {
      imageListContent = null;
    }

    return (
      <div>
        {imageListContent}

        <Dialog 
          open={this.state.open} 
          onRequestClose={this.handleClose}
          // fullScreen={true}
        >
          <DialogContent>
            <div className="img-cont">
              <img src={this.state.currentImg} alt="" className="dialog-img"/>
            </div>
          </DialogContent>
          
          <DialogActions>
            <Button primary={true} onClick={this.handleClose} color="secondary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
    
  }
};
ImageResults.propTypes = {
  images: propTypes.array.isRequired
}

export default ImageResults;






