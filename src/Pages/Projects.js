import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "../Components/ProjectCards/ProjectCards";
import Particle from "../Components/Particles/Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <h5 style={{ color: "white" }}>
          * Here are a few projects related to <strong className="purple"> Dashboards</strong> I've worked on recently.
        </h5>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>



          {/* DATA ANALYST PROJECTS  */}
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://github.com/Asif0401/road_vision/assets/84279029/f662a9f7-3665-47f0-acac-1ea57b024807"
              title="Road Accident Dashboard - Tableau"
              description="The Road Vision Insights Tableau dashboard aims to enhance road safety by conducting a comprehensive analysis of
              road accident data. By leveraging Tableau’s capabilities, the dashboard uncovers valuable patterns and trends, providing actionable insights
              for better road safety measures"              link="https://github.com/Asif0401/road_vision"
            />
          </Col>


          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://github.com/Asif0401/Airbnb_dasboards/assets/84279029/16136410-6238-4847-a842-8744a0e52dbd"
              title="Airbnb Dashboard - Tableau"
              description="An interactive visual tool for Airbnb hosts and guests. It offers insights on occupancy, pricing, guest demographics, and more. Built with Tableau using Airbnb's data. Helps hosts optimize earnings and guests find ideal listings."              link="https://github.com/Asif0401/Airbnb_dasboards"
            />
          </Col>


          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://github.com/Asif0401/Ecommerce_dashboard/assets/84279029/1fbe6fa4-18f9-4628-b60f-eb16447b3d71"
              title="E-Commerce Dashboard"
              description="Led a successful data extraction project for an e-commerce business, 
              building a robust data model and implementing a SQL database.Developed effective SQL queries to create aggregate tables and connected them to a 
              dashboarding tool. "              link="https://github.com/Asif0401/Ecommerce_dashboard"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://github.com/Asif0401/Hospitality_Insights/assets/84279029/effc2dab-6d60-4da8-be1f-26ef023a6830"
              title="Hospitality Insights - Dashboard"
              description="Enhanced a 5-year SQL database in the Hospitality Industry, incorporating additional entities and relationships for
              in-depth analysis using Python (Pandas) and data modeling expertise .Crafted interactive Power BI dashboards featuring key KPIs."              link="https://github.com/Asif0401/Hotel_Bookings_Insights"
            />
          </Col>
        
    
          {/* EDA */}
          <h5 style={{ color: "white" }}>
          * Here are a few projects related to <strong className="purple"> Exploratory Data Analysis (EDA)</strong> I've worked on recently.
        </h5>

        <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://github.com/Asif0401/Skyline-Insights/assets/84279029/f94a8576-96e6-4607-9179-870b7445df80"
              title="Skyline Insights - EDA"
              description="This project involves conducting an Exploratory Data Analysis (EDA) on airline data to uncover meaningful insights. It aims to gain a deep understanding of various aspects of the airline industry, including passenger behavior, flight patterns, delays, and other relevant factors. The EDA process will involve data cleaning, visualization, and statistical analysis to identify trends, correlations, and potential areas for improvement within the airline operations."              link="https://github.com/Asif0401/Skyline-Insights"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://github.com/Asif0401/TMDB_EDA/assets/84279029/161771bc-c6e6-4f06-b841-790ff60ded1d"
              title="The Movie Database - EDA"
              description=" This project focuses on conducting an Exploratory Data Analysis (EDA) on a comprehensive movie database. The objective is to extract meaningful insights from the dataset, including trends in genres, ratings, box office performance, and other relevant factors. The EDA process encompasses data cleaning, visualization, and statistical analysis to reveal patterns, correlations, and potential areas for further analysis within the movie industry."              link="https://github.com/Asif0401/TMDB_EDA"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://github.com/Asif0401/Google_Playstore_EDA/assets/84279029/3840f6cc-24ce-4329-8c2e-1c88de87152e"
              title="Google Playstore - EDA"
              description="This project centers around performing an Exploratory Data Analysis (EDA) on the Google Play Store dataset. The primary goal is to extract valuable insights related to app categories, user ratings, pricing models, and other pertinent metrics. Through data cleaning, visualization, and statistical analysis, this EDA endeavor aims to uncover trends, correlations, and potential areas for app developers and marketers to enhance their offerings. "              link="https://github.com/Asif0401/Google_Playstore_EDA"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://github.com/Asif0401/Glassdoor_EDA/assets/84279029/692a0d58-c924-4ac5-9f1f-d25838ca6af2"
              title="Glassdoor - EDA"
              description="This project revolves around conducting an Exploratory Data Analysis (EDA) on the Glassdoor dataset. The primary objective is to extract valuable insights related to job listings, salaries, company ratings, and other relevant metrics. Through data cleaning, visualization, and statistical analysis, this EDA endeavor aims to uncover trends, correlations, and potential areas for job seekers and employers to make informed decisions."              link="https://github.com/Asif0401/Glassdoor_EDA"
            />
          </Col>



        {/* EDA */}
        <h5 style={{ color: "white" }}>
          * Here are a few projects related to <strong className="purple"> Frontend Development</strong> I've worked on recently.
        </h5>

        <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://user-images.githubusercontent.com/84279029/154837602-71703752-66e6-43dd-b65a-8cecba847cbf.png"
              title="Crypto Hunter"
              description="Crypto Hunter is a Crypto Currency Tracker web app created using ReactJS, ChartJS, MatrerialUI and CoinGecko API where
              user can get all the information regarding their favourite coin.It is compatable in mobile, web, and iOS platforms, Completely responsive design using Material UI."              link="https://cypto-hunter.herokuapp.com/"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://user-images.githubusercontent.com/84279029/154533116-8174d7b0-7ab0-4e92-9f7e-0afbfef53739.png"
              title="Inshorts Clone"
              description="This project is a replica of Inshorts News app using ReactJS, MaterialUI and news API where user can read news in
              less than 60 words, related to business, sports, bollywood and technology in India and around the world"
              link="https://github.com/Asif0401/inshorts-clone"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://user-images.githubusercontent.com/84279029/154533505-9978ae28-2b33-404d-ad0b-937bbc12a886.png"
              title="QuickCab"
              description="This is an user interface website created using NextJS, TailwindCSS where user can request a ride by choosing his pickup
              and dropoff locations.Also Included Mapbox API which provides Real time map, allows us to choose our pickup and dropoff points and
              gives time duration between our locations"              link="https://github.com/Asif0401/quickCab"
            />
          </Col>
          {/* <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://user-images.githubusercontent.com/91063960/139381648-76a0d2e5-9375-4f5a-8399-030888d8065e.png"
              title="Tesla Clone"
              description="In this small project you can play trailers of the Movies..,but I will be provide regualar updates with more features and functionalities because the entertainment industry is one of the largest online service businesses. The number of people seeking online entertainment is increasing rapidly. Increased leisure time and easier access to entertainment is driving the market forward."              link="https://github.com/sijeeshmiziha/netflix"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}
export default Projects;
