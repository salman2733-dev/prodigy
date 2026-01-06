"use client"

import {Navbar} from "@/components/Navbar";
import Main  from "@/components/Main";
import Trusted from "@/components/Trusted";
import JobPortal from "@/components/JobPortal";
import Discover from "@/components/Discover";
import Connected from "@/components/Connected";
import Community from "@/components/Community";
import Footer from "@/components/Footer";



export default function Home(){
  return(
    <>
    <Navbar/>
    <Main/>
    <Trusted/>
    <JobPortal/>
    <Discover/>
    <Connected/>
    <Community/>
    <Footer/>
    </>
  )
}