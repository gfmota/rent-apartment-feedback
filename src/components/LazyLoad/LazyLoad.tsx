import React, { Suspense } from 'react';
import { Loading } from '../Loading';

export const withLazyLoad = <T extends object>(Component: React.FC<T>) => {
  const LazyLoadedComponent = (props: T) => (
    <Suspense fallback={<Loading />}>
      <Component {...props} />
    </Suspense>
  );
  LazyLoadedComponent.displayName = `LazyLoad(${
    Component.displayName || Component.name || 'Component'
  })`;
  return LazyLoadedComponent;
};
