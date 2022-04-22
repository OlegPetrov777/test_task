import React from "react";
import {connect} from "react-redux";
import {
    setCurrentPageActionCreator, setIsFetchingActionCreator, setPhotosActionCreator
} from "../../redux/galleryReducer";
import * as axios from "axios";
import Gallery from "./Gallery";
import Preloader from "../Preloader/Preloader";


class GalleryContainer extends React.Component {

    componentDidMount() {
        this.props.setIsFetching(true);
        axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=1`).then(response => {
            this.props.setPhotos(response.data);
            this.props.setIsFetching(false);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setIsFetching(true);
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=1`).then(response => {
            this.props.setPhotos(response.data);
        });
        this.props.setIsFetching(false);
    }

    render() {
        return (<>
            {this.props.isFetching ? <Preloader/> : null}
            <Gallery onPageChanged={this.onPageChanged}
                     photos={this.props.photos}
                     currentPage={this.props.currentPage}
                     pageSize={this.props.pageSize}
            />
        </>)
    }
}

let mapStateToProps = (state) => {
    return {
        photos: state.galleryPage.photos,
        currentPage: state.galleryPage.currentPage,
        pageSize: state.galleryPage.pageSize,
        totalCount: state.galleryPage.totalCount,
        isFetching: state.galleryPage.isFetching,
    }
}

export default connect(mapStateToProps, {
    setCurrentPage: setCurrentPageActionCreator,
    setIsFetching: setIsFetchingActionCreator,
    setPhotos: setPhotosActionCreator
})(GalleryContainer);
