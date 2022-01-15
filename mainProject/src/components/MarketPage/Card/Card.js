import React from 'react';
import './Card.css';
import BuyBur from './BuyBar/BuyBar'

export default class Card extends React.Component {
    static  defaultProps = {
        id: '',
        productName: '',
        description: '',
        material: '',
        image: '',
        price: '',
        size: '',
        color: '',
        foldedRemainder: '',
        animateNum: 1
    }
    render() {
        const { id, productName, description, material, image, price, size, color, foldedRemainder, animateNum } = this.props;
        return (
            <div className={'product-card'}>
                <div className="product-card-head">
                    <img className={'card__img'} src={image} width={'250'} height={'250'} alt={productName} title={productName}/>
                </div>
                <div className={'card__title'}>
                    <h3>{productName}</h3>
                </div>
                <div className={'price'}>{price} руб.</div>
                    <div className={'description'}>{description}</div>
                    <div className={'description__else'}>
                        <div className={'co1'}>материал: {material}<br/>цвет: {color}</div>
                        <div className={'co2'}>размер: {size} см<br/>в наличии: {foldedRemainder} шт.</div>
                    </div>
                <div className={'buy-bar'}>
                    <BuyBur/>
                </div>
            </div>
        );
    }
}