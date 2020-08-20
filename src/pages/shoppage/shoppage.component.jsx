import React from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import {Route} from 'react-router-dom';
import CategoryPage from '../collection/collection.component';
import { connect } from 'react-redux';
import {selectIsCollectionFetching} from '../../redux/shop/shop.selectors'
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import {fetchCollectionsStartAsync} from '../../redux/shop/shop.actions';
import { createStructuredSelector } from 'reselect';
const ColletionsOverviewWithSpinnr = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CategoryPage);
class ShopPage extends React.Component{


    componentDidMount(){
        const {fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync();
    }

    render(){
        const {match, isCollectionFetching} = this.props;
        return (
            <div className="shoppage">
                <Route exact path={`${match.path}`} render={(props => <ColletionsOverviewWithSpinnr isLoading={isCollectionFetching} {...props} />)}/>
                <Route path={`${match.path}/:collectionId`} render={(props => <CollectionPageWithSpinner isLoading={isCollectionFetching} {...props} />)}/>
            </div>
        );
    }


}
const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching
});

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: ()  => dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);