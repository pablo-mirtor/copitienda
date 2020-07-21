import React from 'react';
import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({title, items}) => (
    <div className="collection-preview">
        <h2 className="title">{title.toUpperCase()}</h2>
        <div className="preview">
            {items.filter((c, idx) => idx < 4).map(item => (
                <CollectionItem key={item.id} item={item}></CollectionItem>
            ))}
        </div>
    </div>
);

export default CollectionPreview;