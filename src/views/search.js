import Header from '../components/Header';
function Search() {
  return (
    <div className="grid-system">
      <Header />
      <input placholder="where are you?" type="text" />
      <button className="btn-search">VAD ÄR DET FÖR VÄDER?</button>
    </div>
  );
}

export default Search;
