import React from 'react';
import "./directory.styles.scss";
import MenuCategory from "../menu-category/menu-category.component";

import { createStructuredSelector} from 'reselect'
import {selectDirectoryCategories} from '../../redux/directory/directory.selectors';
import {connect} from 'react-redux';

const Directory = ({categories}) => (
  <div className="menu">
      {categories.map( ca => 
      (<MenuCategory key={ca.id} title={ca.title} imgURL={ca.imageUrl} size={ca.size} linkUrl={ca.linkUrl}/>))
          }
    </div>);

const mapStateToProps = createStructuredSelector({
  categories: selectDirectoryCategories
})
export default connect(mapStateToProps)(Directory);