"use client"
import Image from "next/image";
import React,{useEffect,useState} from "react";
import V12 from "./V12";

export default function Section_2() {
  const titleText = "Moon Light";
useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);
  return (
    <div id="section1-container"> 
     <div id="V12" style={{ padding: "20px 0 0 220px" ,textAlign:'center',fontWeight:'bold'}}>
        <label>Section_1 - V12</label>
      <V12 />
      </div>
    </div>
  );
}