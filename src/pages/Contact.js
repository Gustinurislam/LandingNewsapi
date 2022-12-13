import { useEffect } from "react"

export default function Contact() {
    useEffect(function (){
        document.title = 'Contact'
      }, [])
    return (
        <section className="section">
            <h1 className="section-title">Contact</h1>
            <p className="section-desc">kamu dapat menghubungi saya di bawah ini</p>
            <ul>
                <li>WA: 000000000000</li>
                <li>Email: gustinurislam@gmail.com</li>
            </ul>
            <p className="section-desc">Sosial media saya</p>
            <ul>
                <li><a href="https://www.facebook.com">Facebook</a></li>
                <li><a href="https://www.instagram.com">Instagram</a></li>
            </ul>
        </section>

    )
}