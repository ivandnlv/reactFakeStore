import React, { useState } from 'react';
import Skeleton from './Skeleton';

const ProductsItem = ({ image, id, title, price, description, category, loading }) => {
  const [descr, setDescr] = useState(loading ? null : descriptionNormalize());

  function descriptionNormalize() {
    const arr = description.split(' ');
    const newArr = arr.filter((item, index) => index < 10 && item);
    const str = newArr.join(' ');
    return str + '...';
  }

  const onClickReadMore = () => {
    if (descr.length === description.length) {
      setDescr(descriptionNormalize());
    } else {
      setDescr(description);
    }
  };

  return (
    <>
      {loading ? (
        <Skeleton />
      ) : (
        <div className="p-8 rounded-lg bg-slate-400 flex flex-col items-center">
          <p className="bg-slate-200 rounded-full p-2 text-slate-800 font-bold inline-block m-auto">
            {category}
          </p>
          <img
            src={image}
            alt={'product' + id}
            className="w-40 h-40 mt-3 p-2 bg-white rounded-lg"
          />
          <h2 className="self-start	mt-2">
            <b>Название: </b>
            <br />
            {title}
          </h2>
          <p className="flex-1">
            <b>Описание: </b>
            <br />
            {descr}
            <span onClick={onClickReadMore} className="underline cursor-pointer">
              <br />
              {description.length === descr.length ? 'скрыть' : 'читать подробнее'}
            </span>
          </p>
          <div className="flex w-full justify-between items-center">
            <b>Цена: </b>
            <b className="text-xl">{price}$</b>
          </div>
          <button
            className="text-lg font-semibold p-3 pl-8 pr-8 bg-sky-600 hover:bg-sky-500 active:bg-sky-700 mt-3 rounded-lg"
            style={{ transition: '0.2s background ease-in-out' }}>
            В корзину
          </button>
        </div>
      )}
    </>
  );
};

export default ProductsItem;
