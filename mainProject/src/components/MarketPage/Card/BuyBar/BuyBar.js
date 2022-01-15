import './BuyBar.css';
import {createSlice} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from 'react-redux';
import {increment, decrement} from '../../../../app/reducers/ItemCounter';
import {useState} from 'react';
import classNames from 'classnames';
import BasketBatton from "./BusketButton/BasketBatton";

function BuyBar() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    const [ classNum, setClassNum ] = useState(0);
    const orderCount = 0;

    console.log(orderCount);

    function barDown () {
        if (classNum === 0) {
            setClassNum(classNum + 1);
        } else {
            if(classNum === 1) {
                setClassNum(0);
            }
        }
    }

    function barUp () {
        if (classNum > 2) {
            setClassNum(classNum - 1);
            return;
        } else {
            if (classNum === 3) {
                setClassNum(classNum - 1);

            }
        }

    }
    return (
        <div className="BuyBar">
            <div className="card" id="id_01">
                <div className="card__container">
                    <div className={classNames('buy-bar-cube',
                        {
                            'buy-bar-cube': classNum === 0,
                            'buy-bar-cube_down': classNum === 1,
                            'buy-bar-cube_up': classNum === 2
                        })} id="first">
                        <div className="buy-bar-side basket-button" id="basket-button">
                            <button className="button_item"
                                    onClick={function (event) { dispatch(increment()); setClassNum(1)}}>
                                В корзину</button>
                        </div>
                        <div className="buy-bar-side count-panel__wrapper" id="counter-panel">
                            <div className="button" id="mines">
                                <button className="button_item mines" onClick={function (event) { dispatch(decrement());}}>&#8211;</button>
                            </div>
                            <div className="button quantity-counter">
                                <label htmlFor="input_quantity_value"></label>
                                <input className="input_quantity" type="number" id="input_quantity_value"/>
                            </div>
                            <div className="button" id="plus" onClick={function (event) {dispatch(increment())}}>
                                <button className="button_item plus">+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <script defer src="buy_bar.js"></script>
        </div>
    );
}
export default BuyBar;