import { memo } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { BlogItemResponseDTO } from '../../Dto/Blog';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

interface IProps {
  data?: BlogItemResponseDTO | null;
  onClickItem?: (id: string) => void;
  isDetail?: boolean;
}

export const BlogItem: React.FC<IProps> = memo(
  ({ data, isDetail, onClickItem }) => {
    const navigate = useNavigate();

    const size = isDetail ? '100%' : 100;
    return (
      <li
        className={classNames('d-flex gap-3 media my-4', {
          'flex-column': isDetail,
        })}
      >
        {data ? (
          <>
            <LazyLoadImage
              src={data.image}
              width={size}
              alt={data.title}
              placeholder={<Skeleton height={size} width={size} />}
            />
            <div className="media-body">
              <h5
                onClick={() => onClickItem && onClickItem(data.id)}
                className="mt-0 mb-1"
              >
                {data.title}
              </h5>
              <p>{data?.content}</p>
              {isDetail && <a onClick={() => navigate(-1)}>Back</a>}
            </div>
          </>
        ) : (
          <>
            <Skeleton circle={false} height={size} width={size} />
            <div className="media-body">
              <h5 className="mt-0 mb-1" style={{ width: 600 }}>
                <Skeleton width={'80%'} height={10} />
              </h5>
              <p>
                <Skeleton count={3} />
              </p>
            </div>
          </>
        )}
      </li>
    );
  }
);
