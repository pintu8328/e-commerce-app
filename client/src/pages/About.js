import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
           
Hi There
An aspiring full-stack developer with a specialization in MERN stack. Enthusiastic, hard-working, and passionate about coding. With the ability to contribute toward the organizational goal, looking forward to working as a software developer, and developing skills in a challenging work environment.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
