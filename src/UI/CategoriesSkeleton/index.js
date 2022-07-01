import ContentLoader from 'react-content-loader';

const CategoriesSkeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={240}
      height={40}
      viewBox="0 0 240 40"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <rect x="0" y="0" rx="24" ry="24" width="240" height="40" />
      <rect x="331" y="142" rx="0" ry="0" width="101" height="38" />
    </ContentLoader>
  );
};

export default CategoriesSkeleton;
