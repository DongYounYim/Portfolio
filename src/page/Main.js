import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Banner from "../components/Banner";

export default function Main() {
  return (
    <div>
      <Header />
      <hr />
      <Navigation />
      <div className="container">
        <Banner />
        <div id="content1">
          <h2>아이구 여기에 이제 하나씩 채워볼까</h2>
        </div>
        <div id="content2">
          <h2>여기는 뭘 채울까</h2>
        </div>
      </div>
    </div>
  );
}
