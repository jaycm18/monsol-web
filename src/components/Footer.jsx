import React from "react"
import { FaGithub, FaEnvelope } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-footer text-text py-6 mt-10 font-retro">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Monsol. Kaikki oikeudet pidätetään.
        </p>
        <div className="mt-4 md:mt-0 flex space-x-6">
          {/* GitHub-linkki */}
          <a
            href="https://github.com/jaycm18"
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent transition"
          >
            <FaGithub size={28} />
          </a>

          {/* Contact-sivun linkki */}
          <a
            href="/contact"
            className="hover:text-accent transition"
          >
            <FaEnvelope size={28} />
          </a>
        </div>
      </div>
    </footer>
  )
}