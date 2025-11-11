import React from "react";
import AnnouncementBar from "./components/AnnouncementBar";
import Header from "./Header";

export default function App() {
  return (
    <div className="bg-white font-satoshi">
      <AnnouncementBar />
      <Header />
    </div>
  );
}
