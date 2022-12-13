import { useEffect } from "react";

export default function Home() {
  useEffect(function (){
    document.title = 'Home'
  }, [])
  return (
    <section className="section">
      <h1 className="section=title">Selamat Datang Di Beranda</h1>
      <p className="section-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos voluptatum obcaecati sequi libero. Quis, ullam quasi. Totam nobis at neque?</p>
    </section>
  );
}
