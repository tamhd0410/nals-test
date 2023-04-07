import { BlogParamsDTO } from '../Dto/Blog/BlogRequest.dto';
import HttpClient from '../Interceptors/HttpClient';

class BlogService {
  getBlogs = async (params?: BlogParamsDTO) => {
    const url = '/blogs';
    const res = await HttpClient.get(url, { params });
    return res;
  };

  getBlogDetail = async (id: string) => {
    const url = `/blogs/${id}`;
    const res = await HttpClient.get(url);
    return res;
  };
}

export default new BlogService();
