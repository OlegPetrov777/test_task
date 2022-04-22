import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {
    setIsFetchingActionCreator, setPhotoIdActionCreator, setPhotoTitleActionCreator, setPhotoUrlActionCreator
} from "../../../redux/photoInfoReducer";
import PhotoInfo from "./PhotoInfo";
import * as axios from "axios";
import Preloader from "../../Preloader/Preloader";


class PhotoInfoContainer extends React.Component {

    componentDidMount() {
        this.props.setIsFetching(true);
        let photoId = this.props.match.params.id
        this.props.setPhotoId(photoId)
        axios.get(`https://jsonplaceholder.typicode.com/photos/${photoId}`).then(response => {
            this.props.setPhotoUrl(response.data.url)
            this.props.setPhotoTitle(response.data.title)
            this.props.setIsFetching(false);
        });
    }

    render() {
        return (<>
            {this.props.isFetching ? <Preloader/> : null}
            <PhotoInfo id={this.props.id} url={this.props.url} title={this.props.title}/>
        </>)
    }
}

let mapStateToProps = (state) => {
    return {
        id: state.photoInfoPage.id,
        url: state.photoInfoPage.url,
        title: state.photoInfoPage.title,
        isFetching: state.photoInfoPage.isFetching
    }
}

let PhotoInfoWithRouter = withRouter(PhotoInfoContainer);

export default connect(mapStateToProps, {
    setPhotoId: setPhotoIdActionCreator,
    setPhotoUrl: setPhotoUrlActionCreator,
    setPhotoTitle: setPhotoTitleActionCreator,
    setIsFetching: setIsFetchingActionCreator
})(PhotoInfoWithRouter);