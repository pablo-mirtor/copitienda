import React from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import {Route} from 'react-router-dom';
import CategoryPage from '../collection/collection.component';
import {firestore, convertCollectionsSnapshopToMap} from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

class ShopPage extends React.Component{
    state = {
        loading: true
    }

    unsuscribeFromSnapshop = null;

    componentDidMount(){
        const {updateCollections} = this.props;
        const collectionRef= firestore.collection('collections');

        this.unsuscribeFromSnapshop = collectionRef.onSnapshot(async snapshop => {
            const collectionsMap = convertCollectionsSnapshopToMap(snapshop);
            updateCollections(collectionsMap);
            this.setState({loading: false});
        });
    }

    render(){
        const {match} = this.props;
        return (
            <div className="shoppage">
                <Route exact path={`${match.path}`} component={CollectionsOverview}/>
                <Route path={`${match.path}/:collectionId`} component={CategoryPage}/>
            </div>
        );
    }


}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);