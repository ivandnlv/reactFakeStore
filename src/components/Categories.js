import React, { useContext } from 'react';
import { CategoriesContext } from '../App';

const Categories = () => {
  const { categories } = useContext(CategoriesContext);

  return (
    <div className="mt-3 w-1/5 ml-10">
      <h2 className="font-semibold text-2xl">Категории</h2>
      <div className="flex flex-col mt-3">
        {categories &&
          categories.map((item) => (
            <p className="bg-slate-200 hover:bg-slate-100 active:bg-slate-300 transition-colors rounded-full p-2 text-slate-800 font-bold mb-3 text-center cursor-pointer">
              {item}
            </p>
          ))}
      </div>
    </div>
  );
};

export default Categories;
