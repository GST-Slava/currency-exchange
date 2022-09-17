import React from 'react';
import s from './CurrencyExchange.module.css'

type CurrencyExchangePropsType = {
    currenciesName: string[];
    currentCurrency: string;
    currencyRate: number;
    isBuying: boolean;
    amountOfBYN: string;
    amountOfCurrency: string;
    changeCurrencyField: (e: React.ChangeEvent<HTMLInputElement>) => void;
    changeAction: (e: React.MouseEvent<HTMLSpanElement>) => void;
    changeCurrentCurrency: (e: React.MouseEvent<HTMLLIElement>) => void;
};

export const CurrencyExchange: React.FC<CurrencyExchangePropsType> = ({
                                                                          currenciesName,
                                                                          currentCurrency,
                                                                          currencyRate,
                                                                          isBuying,
                                                                          amountOfBYN,
                                                                          amountOfCurrency,
                                                                          changeCurrencyField,
                                                                          changeAction,
                                                                          changeCurrentCurrency,
                                                                      }) => {
    const viewCurrency = isBuying ? (
        <React.Fragment>
            <label>
                You give the next amount of BYN:
                <input value={amountOfBYN} data-currency="byn" onChange={changeCurrencyField}/>
            </label>
            <label>
                You get the next amount of {currentCurrency}:
                <input value={amountOfCurrency} data-currency="currency" onChange={changeCurrencyField}/>
            </label>
        </React.Fragment>
    ) : (
        <React.Fragment>
            <label>
                You give the next amount of {currentCurrency}:
                <input value={amountOfCurrency} data-currency="currency" onChange={changeCurrencyField}/>
            </label>
            <label>
                You get the next amount of BYN:
                <input value={amountOfBYN} data-currency="byn" onChange={changeCurrencyField}/>
            </label>
        </React.Fragment>
    );

    return (
        <div className={s.currency}>
            <h2>Currency exchange</h2>
            <div className={s.currencyNames}>
                <p>Current currency:</p>
                <ul>
                    {currenciesName.map((currency: string, index: number) => {
                        return (
                            <li
                                key={`${index}-${currency}`}
                                className={`currencies ${s.currentCurrency === s.currency ? s.activeCurrency : null}`}
                                onClick={changeCurrentCurrency}
                                data-currency={currency}
                            >
                                {currency}
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className={s.currencyAction}>
        <span className={isBuying ? 'active' : ''} data-action="buy" onClick={changeAction}>
          Buy
        </span>
                <span className={isBuying ? '' : 'active'} data-action="sell" onClick={changeAction}>
          Sell
        </span>
            </div>
            <div className={s.fields}>
                <p>Currency rate: {currencyRate}</p>
                {viewCurrency}
            </div>
        </div>
    );
};
