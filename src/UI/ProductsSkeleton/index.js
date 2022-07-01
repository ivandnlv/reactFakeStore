import ContentLoader from 'react-content-loader';

import styles from './ProductsSkeleton.module.scss';

const ProductsSkeleton = () => {
  return (
    <div className={styles.skeleton + ' p-8 rounded-lg bg-slate-400 flex flex-col items-center'}>
      <ContentLoader
        speed={1}
        width={350}
        height={480}
        viewBox="0 0 350 480"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb">
        <rect x="101" y="56" rx="0" ry="0" width="0" height="5" />
        <rect x="103" y="3" rx="20" ry="20" width="125" height="40" />
        <rect x="83" y="60" rx="13" ry="13" width="164" height="137" />
        <rect x="30" y="220" rx="5" ry="5" width="125" height="18" />
        <rect x="30" y="246" rx="5" ry="5" width="238" height="29" />
        <rect x="32" y="287" rx="5" ry="5" width="125" height="18" />
        <rect x="30" y="313" rx="5" ry="5" width="238" height="29" />
        <rect x="33" y="380" rx="5" ry="5" width="125" height="18" />
        <rect x="244" y="379" rx="5" ry="5" width="64" height="28" />
        <rect x="115" y="427" rx="7" ry="7" width="107" height="40" />
      </ContentLoader>
    </div>
  );
};

export default ProductsSkeleton;
