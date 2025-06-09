import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('https://chefu-academy-real-website.onrender.com.onrender.com/api/post/getPosts', {
  credentials: 'include',
});
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div className='flex flex-col gap-6 p-10  px-3 max-w-6xl mx-auto '>
        <h1 className='text-3xl font-bold lg:text-6xl pt-10'>Welcome to CheFu Academy</h1>
        <p className='text-gray-500 text-xs sm:text-sm'>
  At CheFu Academy, we’re committed to empowering developers, tech enthusiasts, and lifelong learners through high-quality content and practical knowledge. Whether you're just starting your journey or looking to sharpen your skills, you’ll find something valuable here.
</p>

<ul className='list-disc pl-4 text-gray-500 text-xs sm:text-sm space-y-1'>
  <li>📚 In-depth tutorials on web and mobile development</li>
  <li>💻 Hands-on guides for React, Next.js, Node.js, and Django</li>
  <li>☁️ Cloud & DevOps: Firebase, AWS, CI/CD, Docker, GitHub Actions</li>
  <li>🔐 Cybersecurity basics & best practices</li>
  <li>🤖 AI & Machine Learning projects</li>
  <li>📊 DSA & coding interview prep</li>
  <li>🛠️ Productivity tooling (VS Code, Git, terminal)</li>
  <li>🎯 Freelancing & career guidance</li>
  <li>📱 React Native & Flutter app dev</li>
  <li>🌐 Tech trends & industry news</li>
</ul>

<p className='text-gray-500 text-xs sm:text-sm'>
  Whether you're building your first app, scaling a SaaS product, or just staying up to date — CheFuAcademy is here to guide you every step of the way.
</p>
        <Link
          to='/search'
          className='text-xs sm:text-sm text-teal-500 font-bold hover:underline'
        >
          View all posts
        </Link>
        <div className='p-3 bg-amber-100 dark:bg-slate-700'>
          <CallToAction />
        </div>
      </div>

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-3'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Recent Posts</h2>
            <div className='flex flex-wrap gap-3'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-teal-500 hover:underline text-center'
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
