import { useEffect, useState } from 'react';
import { BlogItem, Pagination } from '../../Components';
import { useAppDispatch, useAppSelector } from '../../Redux/hook';
import { getBlogs } from '../../Redux/BlogSlice';
import { BlogParamsDTO } from '../../Dto/Blog';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [params, setParams] = useState<BlogParamsDTO>({
    page: 1,
    limit: 7,
    search: '',
  });
  const { blogs, isLoading } = useAppSelector((state) => state.blog);

  const onChangePage = (page: number) => {
    setParams((prev) => ({ ...prev, page }));
  };
  useEffect(() => {
    dispatch(getBlogs(params));
  }, [dispatch, params.page]);

  return (
    <div className="container">
      <div className="d-flex flex-column align-items-center jus">
        <ul className="list-unstyled" style={{ maxWidth: 800 }}>
          {isLoading
            ? Array.from({ length: 5 }).map((_, i) => <BlogItem key={i} />)
            : blogs.map((blog) => (
                <BlogItem
                  onClickItem={(id: string) => navigate(`/blog/${id}`)}
                  key={blog.id}
                  data={blog}
                />
              ))}
        </ul>
        <div className="d-flex justify-content-start">
          <Pagination
            currentPage={params.page}
            totalPages={10}
            onChangePage={onChangePage}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
