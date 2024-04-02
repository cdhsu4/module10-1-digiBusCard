import React from "react"

export default function App() {
    return (
    <>
        <div class="container-candidate-contact-info">
            <img class="profile-photo" src="./images/linkedin.jpg" alt="Portrait Photo of Job Candidate Christopher Hsu" />
            <h1>Christopher Hsu</h1>
            <p class="position-title">Frontend Developer</p>
            <p class="contact-email">www.christopherhsu.com</p>
            <div class="container-button">
                <button><i class="fa-solid fa-envelope"></i>Email</button>
                <button><i class="fa-brands fa-linkedin"></i>Linkedin</button>
            </div>
        </div>
        <div class="container-about-me">
            <h2>About Me</h2>
            <p>I am a frontend developer with a particular interest in making things simple and 
                automating daily tasks. I try to keep up with security and best practices, and am 
                always looking for new things to learn.</p>
            <h2>Interests</h2>    
            <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. 
                Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </div>
        <footer class="footer">
            <i class="fa-brands fa-square-twitter"></i>
            <i class="fa-brands fa-square-facebook"></i>
            <i class="fa-brands fa-square-instagram"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-square-github"></i>
        </footer>
    </>
    )
}