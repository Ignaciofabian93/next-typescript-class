"use client";
import React, { useState } from "react";
import Header from "@/components/Header/Header";
import Layout from "./ui/Layout";
import Button from "@/components/Button/Button";

const Home = () => {
  const [count, setCount] = useState(10);

  const handleSum = (num: number) => {
    setCount(count + num);
  };

  const handleSubstrac = (num: number) => {
    setCount(count - num);
  };

  return (
    <Layout>
      <div>Home</div>
      <Header title={"Mi titulo"} color="#ec2484" />
      <Header title={"Mi titulo opcional"} />
      <p className="text-3xl">{count}</p>
      <Button text="Sumar de a 5" onClick={handleSum} ammount={5} />
      <Button text="Restar de a 10" onClick={handleSubstrac} ammount={10} />
    </Layout>
  );
};

export default Home;
