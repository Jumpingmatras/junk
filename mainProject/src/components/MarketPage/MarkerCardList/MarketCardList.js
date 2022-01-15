import React from 'react';
import Card from "../Card/Card";
import './MarketCardList.css';

export default class MarketCardList extends React.Component {
    static defaultProps = {
        productList: []
    }

    render() {
        return (

            <div className={'card-list'}>
                {
                    this.props.productList.map((product) => {
                        return (
                            <div className={'card_list__item'} key={product.id}>
                                <Card
                                    productName={product.productName}
                                    description={product.description}
                                    material={product.material}
                                    image={product.image}
                                    price={product.price}
                                    size={product.size}
                                    color={product.color}
                                    foldedRemainder={product.foldedRemainder}
                                    animateNum={Math.floor(Math.random(this.min, this.max) * 5)}/>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}