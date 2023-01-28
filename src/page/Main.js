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
        <section id="intro">
          <div className="CardContent" id="content1"></div>
          <div
            className="CardContent"
            style={{ backgroundColor: "#f44" }}
          ></div>
        </section>
        <section>
          <h1>ㄴㅇㄹㄹ</h1>
        </section>
      </div>
    </div>
  );
}
