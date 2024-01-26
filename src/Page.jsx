import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import TaskContainer from "./Task/TaskContainer";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Page = () => {
  return (
    <>
      <Header />
      <ToastContainer />
      <Hero />
      <TaskContainer />
      <Footer />
    </>
  );
};

export default Page;
