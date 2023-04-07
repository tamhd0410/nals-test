import { useEffect } from 'react';
import { BlogItem } from '../../Components';
import { useAppDispatch, useAppSelector } from '../../Redux/hook';
import { getBlogDetail } from '../../Redux/BlogSlice';
import { useParams } from 'react-router-dom';

const BlogDetailPage = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const { blogItem } = useAppSelector((state) => state.blog);

  useEffect(() => {
    if (id) {
      dispatch(getBlogDetail(id));
    }
  }, [dispatch, id]);

  return (
    <div className="container">
      <div className="d-flex flex-column align-items-center">
        <ul className="list-unstyled" style={{ maxWidth: 800 }}>
          {<BlogItem data={blogItem} isDetail />}
        </ul>
      </div>
    </div>
  );
};

export default BlogDetailPage;
