import React from "react";
import { type NextPage } from "next";
import { api } from "../utils/api";
import Layout from "../components/layout";


const Events: NextPage = () => {
  const { data, isLoading } = api.events.getEvent.useQuery();
  return (
    <Layout>
      <div className="bg-gradient-to-b from-[#1e3a8a] to-[#312e81]">
      </div>
    </Layout>
  );
};

export default Events;