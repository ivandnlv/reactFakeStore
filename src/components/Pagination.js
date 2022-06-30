import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const Pagination = () => {
  const productsToShow = 6;

  return (
    <div className="flex">
      <button className="mr-2 bg-sky-600  p-2 pr-4 pl-4 rounded-md cursor-pointer font-bold">
        1
      </button>
      <button className="mr-2 bg-slate-400 hover:bg-slate-300 active:bg-slate-500 p-2 pr-4 pl-4 rounded-md cursor-pointer font-bold transition-colors">
        2
      </button>
    </div>
  );
};

export default Pagination;
