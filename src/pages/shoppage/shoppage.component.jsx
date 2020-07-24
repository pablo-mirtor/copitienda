import React from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import {Route} from 'react-router-dom';
import CategoryPage from '../collection/collection.component';
const ShopPage = ({match}) => (
    <div className="shoppage">
        <Route exact path={`${match.path}`} component={CollectionsOverview}/>
        <Route path={`${match.path}/:collectionId`} component={CategoryPage}/>
    </div>
);


export default ShopPage;