import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCategories } from '../features/categoriesSlice';
import { useDispatch } from 'react-redux';
import CategoriesSkeleton from './CategoriesSkeleton';

const Categories = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const { categories, loading, error } = useSelector((state) => state.categories);

  return (
    <div className="mt-3 w-1/5 ml-10">
      <h2 className="font-semibold text-2xl">Категории</h2>
      {loading ? (
        [...Array(3)].map((item) => (
          <div className="flex flex-col mt-3">
            <CategoriesSkeleton />
          </div>
        ))
      ) : error ? (
        <div className="flex flex-col mt-3">
          <p>"Не удалось загрузить список категорий, попробуйте обновить страницу"</p>
        </div>
      ) : (
        categories.map((item) => (
          <div className="flex flex-col mt-3">
            <p
              className="bg-slate-200 hover:bg-slate-100 active:bg-slate-300 transition-colors rounded-full p-2 text-slate-800 font-bold mb-3 text-center cursor-pointer show"
              key={item}>
              {item}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default Categories;
