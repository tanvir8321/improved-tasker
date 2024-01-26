import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import TaskContainer from "./Task/TaskContainer";
import Footer from "./Footer";
const Page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <TaskContainer />      
      <Footer />
    </>
  );
};

export default Page;
