import { useEffect } from "react"

export default function Profile() {
    useEffect(function (){
        document.title = 'Profile'
      }, [])
    return (
        <section className="section">
            <h1 className="section-title">Profile</h1>
            <p className="section-desc">Hallo, saya adalah seorang web developer dari google!</p>
        </section>
    )
}