import Head from 'next/head';

import { PostData, loadBlogPosts } from '../loader';
import { PostCard } from '../components/PostCard';
import { generateRSS } from '../rssUtil';
// import { Markdown } from '../components/Markdown';
// import { config } from '../globals';

const sectionStyle = {
  width: '100%',
  padding: '100px 3vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
} as const;

const pStyle = { lineHeight: 1.7 };

const Home = (props: {
  posts: PostData[];
}) => {
  return (
    <div style={{ width: '100%' }}>
      <Head>
        <title>The Me Experience</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={sectionStyle}>
        <h2 style={{ margin: '4px 0px', fontSize: '34pt' }}>James Calingo</h2>
        <p style={{ maxWidth: '550px', paddingBottom: '30px', ...pStyle }}>
          The thoughts and ramblings of a fullstack developer, musician, video and board game enthusiast, and 1999 Newton Youth Soccer participant.
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(auto-fit, minmax(300px,1fr))`,
            gridRowGap: '8px',
            gridColumnGap: '8px',
            width: '100%',
            padding: '0px 7vw',
          }}
        >
          {props.posts.map((post, j) => {
            return <PostCard post={post} key={j} />;
          })}
        </div>
      </div>
      
    </div>
  );
};
export default Home;

export const getStaticProps = async () => {

  const posts = await loadBlogPosts();

  // comment out to turn off RSS generation
  // during build step.
  await generateRSS(posts);

  const props = { posts };
  return { props };
};
