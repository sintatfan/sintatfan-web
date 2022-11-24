import Image from 'next/image'
import styles from './page.module.css'
import LandingSection from "../components/home/landing";
import AboutSection from "../components/home/about";
import WorkSection from "../components/home/portfolio";
import ContactSection from "../components/home/contact";

export default function Home() {
  return (
    <div>
      <LandingSection />
      <AboutSection />
      <WorkSection />
      <ContactSection />
    </div>
  )
}
