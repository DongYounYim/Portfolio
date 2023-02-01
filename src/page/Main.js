import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Banner from "../components/Banner";
import Slider from "../components/Slider";

export default function Main() {
  return (
    <div>
      <Header />
      <hr />
      <Navigation />
      <div className="container">
        <Banner />
        <Slider id="intro">
          <div className="CardContent" id="content1">
            1
          </div>
          <div className="CardContent" style={{ backgroundColor: "green" }}>
            2
          </div>
          <div className="CardContent" style={{ backgroundColor: "blue" }}>
            3
          </div>
          <div className="CardContent" style={{ backgroundColor: "gray" }}>
            4
          </div>
        </Slider>
        <section style={{ height: "100vh" }}>
          <h1>ㄴㅇㄹㄹ</h1>
        </section>
      </div>
    </div>
  );
}
