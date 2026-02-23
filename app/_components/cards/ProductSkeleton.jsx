const ProductSkeleton = () => (
  <div className="w-80 h-100 bg-gray-200 animate-pulse rounded-2xl">
    <div className="h-2/3 bg-gray-300 rounded-t-2xl" />
    <div className="p-4 space-y-3">
      <div className="h-4 bg-gray-300 rounded w-3/4" />
      <div className="h-4 bg-gray-300 rounded w-1/2" />
    </div>
  </div>
);

export default ProductSkeleton;
