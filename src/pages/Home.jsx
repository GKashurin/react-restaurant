import React, {useState, useCallback} from "react";
import {MemoDelivery} from "../components/Delivery";
import {MemoNavigation} from "../components/Navigation";
import {Footer} from "../components/Footer";
import {MemoProducts} from "../components/Products";
import {Input} from "../components/UI/Input";

export const Home = () => {
  const [activeCategory, setActiveCategory] = useState("");
  const [query, setQuery] = useState("");
  const changeHandler = useCallback((e) => {
    setQuery(e.target.value);
  }, []);

  return (
    <>
      <MemoDelivery />
      <Input placeholder="Поиск" value={query} onChange={changeHandler} />
      <MemoNavigation activeCategory={activeCategory} />
      <MemoProducts setActiveCategory={setActiveCategory} query={query} />
      <Footer />
    </>
  );
};