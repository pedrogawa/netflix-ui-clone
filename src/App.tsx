import "./App.css";

import Border from "./components/Border";
import Footer from "./components/Footer";
import PageContent from "./components/PageContent";
import FAQComponent from "./components/FAQComponent";
import TopContainer from "./components/TopContainer";
import ImageComponent from "./components/ImageComponent";
import VideoComponent from "./components/VideoComponent";

import tv from "./assets/tv.png";
import devicePile from "./assets/device-pile.png";
import videoDevice from "./assets/video-devices.m4v";
import video from "./assets/video-tv-0819.m4v";

function App() {
  return (
    <div className="App">
      <TopContainer />
      <Border />
      <PageContent
        title="Enjoy on your TV."
        label="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more."
        isVideo
        Component={
          <VideoComponent image={tv} video={video} isSmaller={false} />
        }
      />
      <Border />
      <PageContent
        title="Download your shows to watch offline."
        label="Save your favorites easily and always have something to watch."
        isVideo={false}
        Component={<ImageComponent isForKids={false} />}
      />
      <Border />
      <PageContent
        title="Watch everywhere."
        label="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more."
        isVideo
        Component={
          <VideoComponent
            image={devicePile}
            video={videoDevice}
            isSmaller={true}
          />
        }
      />
      <Border />
      <PageContent
        title="Crete profiles for kids."
        isVideo={false}
        label="Send kids on adventures with their favorite characters in a space made just for them— free with your membership."
        Component={<ImageComponent isForKids={true} />}
      />
      <Border />
      <FAQComponent />
      <Border />
      <Footer />

      {/* <header className="App-header">
        <img src={netflix} alt="Netflix" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
