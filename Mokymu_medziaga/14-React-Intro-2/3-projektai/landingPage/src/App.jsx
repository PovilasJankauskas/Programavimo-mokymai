import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import JsonData from "./data/data.json";
import { useEffect, useState } from "react";
import Navigation from "./components/navigation/Navigation";
import Header from "./pages/Header/Header";
import Features from "./pages/features/Features";
import AboutUs from "./pages/AboutUs/AboutUs";
import Service from "./pages/Service/Service";
import Gallery from "./pages/Gallery/Gallery";
import Feedbacks from "./pages/Feedbacks/Feedbacks";
import Team from "./pages/Team/Team";
import Contacts from "./pages/Contacts/Contacts";
import Footer from "./components/footer/Footer";

function App() {
  const [landingPageData, setLandingPageData] = useState(null);

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <>
      {landingPageData && (
        <>
          <Navigation
            title={landingPageData.navigation.title}
            navItems={landingPageData.navigation.navigationItems}
          />
          <Header
            title={landingPageData.header.title}
            subtitle={landingPageData.header.subtitle}
            button={landingPageData.header.button}
          />
          <Features
            title={landingPageData.features.title}
            featuresItems={landingPageData.features.featuresItems}
          />
          <AboutUs
            title={landingPageData.aboutUs.title}
            description={landingPageData.aboutUs.description}
            whyChooseUsTitle={landingPageData.aboutUs.whyChooseUsTitle}
            whyChooseUsItems={landingPageData.aboutUs.whyChooseUsItems}
          />
          <Service
            title={landingPageData.services.title}
            description={landingPageData.services.description}
            servicesItems={landingPageData.services.servicesItems}
          />
          <Gallery
            title={landingPageData.gallery.title}
            description={landingPageData.gallery.description}
            images={landingPageData.gallery.images}
          />
          <Feedbacks
            title={landingPageData.feedback.title}
            feedback={landingPageData.feedback.feedback}
          />
          <Team
            title={landingPageData.team.team}
            description={landingPageData.team.description}
            teamItems={landingPageData.team.members}
          />
          <Contacts
            title={landingPageData.contacts.title}
            subtitle={landingPageData.contacts.subtitle}
            contactInfo={landingPageData.contacts.contactInfo}
            contactInfoItems={landingPageData.contacts.contactInfoItems}
          />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
