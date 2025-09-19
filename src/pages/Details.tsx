import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Content from "../components/Content";
import RelatedPosts from "../components/RelatedPosts";
import Breadcrumbs from "../components/Breadcrumbs";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";
import { fetchPostById } from "../store/slices/postsSlice";

const Details: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const { post, loading, error } = useSelector(
    (state: RootState) => state.posts
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchPostById(Number(id)));
    }
    window.scrollTo(0, 0);
  }, [dispatch, id]);

  if (loading) return <p className="text-2xl text-center">Loading...</p>;
  if (error) return <p className="text-2xl text-center">Error: {error}</p>;
  if (!post) return <p className="text-2xl text-center">No post found</p>;

  return (
    <div className="min-h-screen text-[#333]">
      <Breadcrumbs />
      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Blog Content */}
        <div className="lg:col-span-2">
          <Content {...post} />
        </div>

        {/* Sidebar */}
        <aside>
          <RelatedPosts />
        </aside>
      </div>
    </div>
  );
};

export default Details;
