import Head from "next/head";
import { Transition } from "@headlessui/react"; //for smooth transition b/w elements
import { Link } from "react-scroll"; // for smooth scroll throughout the page
import Navbar from "../components/Navbar";
import HomePage from "./homePage";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Design-Portfolio</title>
      </Head>
      <Navbar />
      <HomePage />
    </div>
  );
}
