import { PageProvider } from '../../Context';

type LazyLoadHOC = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: React.LazyExoticComponent<any>;
};

export const LazyLoadComponent: React.FC<LazyLoadHOC> = ({
  component: Component,
  ...props
}) => {
  return (
    <PageProvider>
      <Component {...props} />
    </PageProvider>
  );
};
