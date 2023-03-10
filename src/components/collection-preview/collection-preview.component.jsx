import React from 'react';
import './collection-preview.style.scss';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({title, items}) => {
    return <div className='collection-preview'>
        <h1 className='title'>{ title }</h1>
        <div className='preview'>
            {
                items
                .filter((item, idx) => idx < 4)
                .map(({id, ...itemProps}) => {
                   return <CollectionItem key={id} {...itemProps}/>
                })
            }
        </div>
    </div>
}

export default CollectionPreview;

