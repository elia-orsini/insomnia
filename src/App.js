import Menu from './Menu.jsx';
import Title from './Title.jsx';
import './output.css';
import Helmet from 'react-helmet';

function App() {
  return (
    <>
      <Helmet>
        <title>IN$0MN1A</title>
        <meta charSet="utf-8" />
        <meta name="description" content="INSOMNIA is music, events and culture. To enter our world, join our parties. Find more info on our main socials." />

        <meta property="og:title" content="IN$0MN1A" />
        <meta property="og:description" content="INSOMNIA is music, events and culture. To enter our world, join our parties. Find more info on our main socials." />
        <meta property="og:image" content="/favicon.ico" />
        <meta name="og:site_name" content="IN$0MN1A" />
        <meta property='twitter:title' content="IN$0MN1A" />
        <meta property='twitter:image' content="/favicon.ico"/>
        <meta name="twitter:card" content="summary_large_image"/>   

        <meta name="description" content="INSOMNIA is music, events and culture. To enter our world, join our parties. Find more info on our main socials." />
        <meta name="keywords" content="Brescia, music, events, club, hip hop, insomnia, sesto senso, le ninfee, rino bellandi" />
        <meta name="author" content="Rino Bellandi" />
      </Helmet>
      <div className='absolute top-0 left-0 bg-black h-screen w-screen'>
          <Title />
          <Menu />
      </div>
    </>
  );
}

export default App;
