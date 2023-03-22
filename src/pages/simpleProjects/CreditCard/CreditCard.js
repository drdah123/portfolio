import React, { useEffect, useMemo, useState, createRef, useRef } from 'react';
import './CreditCard.css';

function CreditCard() {
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const amexCardMask = '#### ###### #####';
  const otherCardMask = '#### #### #### ####';
  const [states, setStates] = useState({
    currentCardBackground: Math.floor(Math.random() * 25 + 1),
    cardName: '',
    cardNumber: '',
    cardMonth: '',
    cardYear: '',
    cardCvv: '',
    cardType: '',
    minCardYear: new Date().getFullYear(),
    cardNumberTemp: '',
    isCardFlipped: false,
    focusElementStyle: null,
    isInputFocused: false,
  });
  const cardMonthRef = useRef();
  const cardYearRef = useRef();

  const refs = useMemo(() => {
    let refs = [];
    for (let i = 0; i < 3; i++) {
      refs.push(createRef());
    }
    return refs;
  }, []);

  useEffect(() => {
    let number = states.cardNumber;
    let re = new RegExp('^4');
    if (number.match(re) != null) {
      setStates((prevS) => ({ ...prevS, cardType: 'visa' }));
      return;
    }

    re = new RegExp('^(34|37)');
    if (number.match(re) != null) {
      setStates((prevS) => ({ ...prevS, cardType: 'amex' }));
      return;
    }

    re = new RegExp('^5[1-5]');
    if (number.match(re) != null) {
      setStates((prevS) => ({ ...prevS, cardType: 'mastercard' }));
      return;
    }

    re = new RegExp('^6011');
    if (number.match(re) != null) {
      setStates((prevS) => ({ ...prevS, cardType: 'discover' }));

      return;
    }

    re = new RegExp('^9792');
    if (number.match(re) != null) {
      setStates((prevS) => ({ ...prevS, cardType: 'troy' }));
      return;
    }
    setStates((prevS) => ({ ...prevS, cardType: 'visa' }));
    return;
  }, [states.cardNumber]);
  function flipCard(status) {
    setStates((prevS) => ({ ...prevS, isCardFlipped: status }));
  }
  function editInput(event) {
    setStates((prevS) => ({
      ...prevS,
      cardNumber: formatNumber(event.target.value),
    }));
  }
  const formatNumber = (number) =>
    number.split('').reduce((seed, next, index) => {
      if (index !== 0 && !(index % 4)) seed += ' ';
      return seed + next;
    }, '');

  function focusInput(e) {
    setStates((prevS) => ({ ...prevS, isInputFocused: true }));
    let targetRef = e.target.dataset.ref;
    let target = refs[targetRef].current;
    let focusElementStyle = {
      width: `${target.offsetWidth}px`,
      height: `${target.offsetHeight}px`,
      transform: `translateX(${target.offsetLeft}px) translateY(${target.offsetTop}px)`,
    };
    setStates((prevS) => ({ ...prevS, focusElementStyle }));
  }

  function blurInput() {
    setTimeout(() => {
      setStates((prevS) => {
        return {
          ...prevS,
          focusElementStyle: prevS.isInputFocused
            ? prevS.focusElementStyle
            : null,
        };
      });
    }, 300);
    setStates((prevS) => ({ ...prevS, isInputFocused: false }));
  }

  useEffect(() => {
    const element = cardMonthRef.current;
    if (element) {
      element.classList.add('animate__animated', 'animate__fadeInDown');
      setTimeout(() => {
        element.classList.remove('animate__animated', 'animate__fadeInDown');
      }, 1000);
    }
  }, [states.cardMonth]);
  useEffect(() => {
    const element = cardYearRef.current;
    if (element) {
      element.classList.add('animate__animated', 'animate__fadeInDown');
      setTimeout(() => {
        element.classList.remove('animate__animated', 'animate__fadeInDown');
      }, 1000);
    }
  }, [states.cardYear]);

  return (
    <div className="wrapper" id="app">
      <div className="card-form">
        <div className="card-list">
          <div className={`card-item ${states.isCardFlipped ? '-active' : ''}`}>
            <div className="card-item__side -front">
              <div
                className={`card-item__focus ${
                  states.focusElementStyle ? '-active' : ''
                }`}
                style={states.focusElementStyle}
              ></div>
              <div className="card-item__cover">
                <img
                  src={
                    'https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/' +
                    states.currentCardBackground +
                    '.jpeg'
                  }
                  className="card-item__bg"
                  alt=""
                />
              </div>

              <div className="card-item__wrapper">
                <div className="card-item__top">
                  <img
                    src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png"
                    className="card-item__chip"
                    alt=""
                  />
                  <div className="card-item__type">
                    <div className="animate__animated animate__fadeInDown">
                      {states.cardType && (
                        <img
                          src={
                            'https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/' +
                            states.cardType +
                            '.png'
                          }
                          alt=""
                          className="card-item__typeImg"
                        />
                      )}{' '}
                    </div>
                  </div>
                </div>
                <label
                  htmlFor="cardNumber"
                  className="card-item__number"
                  ref={refs[0]}
                >
                  {states.cardType === 'amex' ? (
                    <>
                      {' '}
                      {amexCardMask.split('').map((n, index) => (
                        <span key={index}>
                          <div className="animate__animated animate__fadeInDown">
                            {index > 4 &&
                            index < 14 &&
                            states.cardNumber.length > index &&
                            n.trim() !== '' ? (
                              <div className="card-item__numberItem">*</div>
                            ) : states.cardNumber.length > index ? (
                              <div
                                className={`card-item__numberItem ${
                                  n.trim() === '' ? '-active' : ''
                                }`}
                              >
                                {states.cardNumber[index]}
                              </div>
                            ) : (
                              <div
                                className={`card-item__numberItem ${
                                  n.trim() === '' ? '-active' : ''
                                }`}
                              >
                                {n}
                              </div>
                            )}
                          </div>
                        </span>
                      ))}
                    </>
                  ) : (
                    <>
                      {otherCardMask.split('').map((n, index) => (
                        <span key={index}>
                          <div
                            className="animate__animated animate__fadeInDown"
                            key={index}
                          >
                            {index > 4 &&
                            index < 15 &&
                            states.cardNumber.length > index &&
                            n.trim() !== '' ? (
                              <div className="card-item__numberItem animate__animated animate__fadeInDown">
                                *
                              </div>
                            ) : states.cardNumber.length > index ? (
                              <div
                                className={`card-item__numberItem ${
                                  n.trim() === '' ? '-active' : ''
                                } animate__animated animate__fadeInDown`}
                                key={index}
                              >
                                {states.cardNumber[index]}
                              </div>
                            ) : (
                              <div
                                className={`card-item__numberItem ${
                                  n.trim() === '' ? '-active' : ''
                                } animate__animated animate__fadeInDown`}
                              >
                                {n}
                              </div>
                            )}
                          </div>
                        </span>
                      ))}
                    </>
                  )}
                </label>
                <div className="card-item__content">
                  <label
                    htmlFor="cardName"
                    className="card-item__info"
                    ref={refs[1]}
                  >
                    <div className="card-item__holder">Card Holder</div>
                    <div className="animate__animated animate__fadeInDown">
                      {states.cardName.length ? (
                        <div className="card-item__name" key="1">
                          <div className="animate__animated animate__fadeInDown">
                            {states.cardName
                              .replace(/\s\s+/g, ' ')
                              .split('')
                              .map((n, index) => (
                                <span
                                  className="card-item__nameItem animate__animated animate__fadeInRight"
                                  key={index + 1}
                                >
                                  {n}
                                </span>
                              ))}
                          </div>
                        </div>
                      ) : (
                        <div className="card-item__name" key="2">
                          Full Name
                        </div>
                      )}
                    </div>
                  </label>
                  <div className="card-item__date" ref={refs[2]}>
                    <label htmlFor="cardMonth" className="card-item__dateTitle">
                      Expires
                    </label>
                    <label htmlFor="cardMonth" className="card-item__dateItem">
                      {states.cardMonth ? (
                        <span ref={cardMonthRef}>{states.cardMonth}</span>
                      ) : (
                        <span key="2">MM</span>
                      )}
                    </label>
                    /
                    <label htmlFor="cardYear" className="card-item__dateItem">
                      <div className="animate__animated animate__fadeInDown">
                        {states.cardYear ? (
                          <span ref={cardYearRef}>
                            {String(states.cardYear).slice(2, 4)}
                          </span>
                        ) : (
                          <span key="2">YY</span>
                        )}
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-item__side -back">
              <div className="card-item__cover">
                <img
                  src={
                    'https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/' +
                    states.currentCardBackground +
                    '.jpeg'
                  }
                  className="card-item__bg"
                  alt=""
                />
              </div>
              <div className="card-item__band"></div>
              <div className="card-item__cvv">
                <div className="card-item__cvvTitle">CVV</div>
                <div className="card-item__cvvBand">
                  {states.cardCvv.split('').map((n, index) => (
                    <span key={index}>*</span>
                  ))}
                </div>
                <div className="card-item__type">
                  {states.cardType && (
                    <img
                      src={
                        'https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/' +
                        states.cardType +
                        '.png'
                      }
                      className="card-item__typeImg"
                      alt=""
                    />
                  )}{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-form__inner">
          <div className="card-input">
            <label htmlFor="cardNumber" className="card-input__label">
              Card Number
            </label>
            <input
              type="number"
              id="cardNumber"
              className="card-input__input"
              onChange={(e) => editInput(e)}
              onFocus={(e) => focusInput(e)}
              onBlur={() => blurInput()}
              data-ref={0}
              autoComplete="off"
            />
          </div>
          <div className="card-input">
            <label htmlFor="cardName" className="card-input__label">
              Card Holders
            </label>
            <input
              type="text"
              id="cardName"
              className="card-input__input"
              onChange={(e) =>
                setStates((prevS) => ({ ...prevS, cardName: e.target.value }))
              }
              onFocus={(e) => focusInput(e)}
              onBlur={() => blurInput()}
              data-ref={1}
              autoComplete="off"
            />
          </div>
          <div className="card-form__row">
            <div className="card-form__col">
              <div className="card-form__group">
                <label htmlFor="cardMonth" className="card-input__label">
                  Expiration Date
                </label>
                <select
                  className="card-input__input -select"
                  id="cardMonth"
                  onChange={(e) =>
                    setStates((prev) => ({
                      ...prev,
                      cardMonth: e.target.value,
                    }))
                  }
                  onFocus={(e) => focusInput(e)}
                  onBlur={() => blurInput()}
                  data-ref={2}
                  defaultValue="Month"
                >
                  <option value="Month" disabled>
                    Month
                  </option>
                  {months.map((n) => (
                    <option value={n < 10 ? '0' + n : n} key={n}>
                      {n < 10 ? '0' + n : n}
                    </option>
                  ))}
                </select>
                <select
                  className="card-input__input -select"
                  id="cardYear"
                  onChange={(e) =>
                    setStates((prevS) => ({
                      ...prevS,
                      cardYear: e.target.value,
                    }))
                  }
                  onFocus={(e) => focusInput(e)}
                  onBlur={() => blurInput()}
                  data-ref={2}
                  defaultValue="Year"
                >
                  <option value="Year" disabled>
                    Year
                  </option>
                  {states.minCardYear
                    .toString()
                    .split()
                    .map((n, index) => (
                      <option value={index + states.minCardYear} key={n}>
                        {index + states.minCardYear}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            <div className="card-form__col -cvv">
              <div className="card-input">
                <label htmlFor="cardCvv" className="card-input__label">
                  CVV
                </label>
                <input
                  type="text"
                  className="card-input__input"
                  id="cardCvv"
                  maxLength="3"
                  onChange={(e) =>
                    setStates((prevS) => ({
                      ...prevS,
                      cardCvv: e.target.value,
                    }))
                  }
                  onFocus={() => flipCard(true)}
                  onBlur={() => flipCard(false)}
                  autoComplete="off"
                />
              </div>
            </div>
          </div>

          <button className="card-form__button">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default CreditCard;
