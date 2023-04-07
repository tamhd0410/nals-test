import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { LazyLoadComponent } from '../Components';
import { PageProvider } from '../Context';

const HomePage = lazy(() => import('../Pages/Home'));
const BlogDetailPage = lazy(() => import('../Pages/BlogDetail'));
const BLOG_DETAIL = '/blog/:id';
export const Routing = () => {
  return (
    <React.Fragment>
      <PageProvider>
        <Routes>
          <Route index element={<LazyLoadComponent component={HomePage} />} />
          <Route
            path={BLOG_DETAIL}
            element={<LazyLoadComponent component={BlogDetailPage} />}
          />
        </Routes>
      </PageProvider>
    </React.Fragment>
  );
};
