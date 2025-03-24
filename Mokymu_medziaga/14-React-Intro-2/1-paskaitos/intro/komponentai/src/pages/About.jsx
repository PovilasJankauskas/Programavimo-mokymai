import Header from "../components/aboutComponents/Header";
import Footer from "../components/aboutComponents/Footer";
import "./About.css";
import ArticleVienas from "../components/Articles/ArticleVienas";
import ArticleDU from "../components/Articles/ArticleDu";

const About = () => {
  return (
    <div className="about">
      <Header />
      <ArticleDU />
      <ArticleDU />
      Mano about puslapis
      <ArticleDU />
      <ArticleVienas />
      <ArticleDU />
      <ArticleDU />
      <Footer />
    </div>
  );
};

export default About;
