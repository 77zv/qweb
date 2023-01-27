import React from "react";
import { type NextPage } from "next";
import { api } from "../utils/api";


const Events: NextPage = () => {
  const { data, isLoading} = api.events.getAll.useQuery();
  return (
    <div>
      {!isLoading && data && data.map((event) => (
        <div key={event.id}>
          <h1>{event.title}</h1>
          <p>{event.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Events;