import React, { useState, useEffect } from "react";
import LinkForm from "./components/LinkForm";
import LinkList from "./components/LinkList";

const App = () => {
  const [links, setLinks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const storedLinks = JSON.parse(localStorage.getItem("links"));
    if (storedLinks) {
      setLinks(storedLinks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(links));
  }, [links]);

  const addLink = (url) => {
    setLinks([...links, url]);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredLinks = links.filter((link) =>
    link.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>URL Link App</h1>
      <input
        type="text"
        placeholder="Search links"
        value={searchTerm}
        onChange={handleSearch}
      />
      <LinkForm addLink={addLink} />
      <LinkList links={filteredLinks} />
    </div>
  );
};

export default App;
