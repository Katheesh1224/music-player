import { useSelector } from 'react-redux';
import { Route, Routes, BrowserRouter } from 'react-router-dom'; // Import BrowserRouter

import { Searchbar, Sidebar, MusicPlayer, TopPlay, Header } from './components';
import { ArtistDetails, TopArtists, AroundYou, Discover, Search, SongDetails, TopCharts } from './pages';

const App = () => {
  const { activeSong, isLoading } = useSelector((state) => state.player); // Assuming isLoading is added to the store for loading state

  return (
    <BrowserRouter>  {/* Wrap everything with BrowserRouter */}
      <div className="relative flex">
        <Sidebar />
        <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]">
          {/* <Header /> Added Header Component */}

          <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
            {/* Main Content Area */}
            <div className="flex-1 h-fit pb-40">
              {/* Handling Loading State */}
              {isLoading ? (
                <div className="text-white text-center">Loading...</div>
              ) : (
                <Routes>
                  <Route path="/" element={<Discover />} />
                  <Route path="/top-artists" element={<TopArtists />} />
                  <Route path="/top-charts" element={<TopCharts />} />
                  <Route path="/around-you" element={<AroundYou />} />
                  <Route path="/artists/:id" element={<ArtistDetails />} />
                  <Route path="/songs/:songid" element={<SongDetails />} />
                  <Route path="/search/:searchTerm" element={<Search />} />
                </Routes>
              )}
            </div>
            {/* TopPlay Component, Sticky on the right */}
            <div className="xl:sticky relative top-0 h-fit">
              <TopPlay />
            </div>
          </div>
        </div>

        {/* Music Player Footer */}
        {activeSong?.title && !isLoading && (
          <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
            <MusicPlayer />
          </div>
        )}
      </div>
    </BrowserRouter>  
  );
};

export default App;
