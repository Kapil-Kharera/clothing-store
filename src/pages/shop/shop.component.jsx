import React from 'react';
import ShopData from './shope.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {
    constructor(props) {
        super();

        this.state = {
            collections: ShopData
        }

    }

    render() {
        const { collections } = this.state;
        return <div className='shop-page'>
            {
                collections.map(({ id, ...otherCollectionProps}) => {
                    return <CollectionPreview key={id} {...otherCollectionProps} />
                })
            }
        </div>
    }
}

export default ShopPage;