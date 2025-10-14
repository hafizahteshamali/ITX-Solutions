import { FaPhone } from "react-icons/fa"
import { MdOutlineMailOutline } from "react-icons/md"
import MapEmbed from "../../../components/MapEmbed"

const Banner = ()=> {
  return (
    <section className="w-full bg-cover bg-no-repeat">
      <div className="container mx-auto px-5">
        {/* Title */}
        <div className="flex flex-col items-center text-center pt-16 md:pt-24 mt-[100px]">
          <h1 className="text-3xl md:text-6xl font-semibold text-[#03278D] tracking-tight">Kontakt</h1>
          <p className="mt-4 max-w-3xl text-base md:text-lg leading-7 text-[#03278D]">
            Haben Sie Fragen zu unseren Dienstleistung oder möchten Sie ein unverbindliches Beratungsgespräch
            vereinbaren? Unser Team von ITX-Solution steht Ihnen gerne zur Verfügung.
          </p>
          <p className="mt-3 max-w-3xl text-base md:text-lg leading-7 text-[#03278D]">
            Sie erreichen uns telefonisch oder per E-Mail – wir melden uns so schnell wie möglich bei Ihnen zurück.
          </p>
          <p className="mt-6 max-w-3xl text-base md:text-lg leading-7 text-[#03278D]">
            Wir freuen uns auf Ihre Nachricht und darauf, gemeinsam mit Ihnen die passende IT-Lösung für Ihr Unternehmen
            zu finden.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Phone Card */}
          <div className="group relative overflow-hidden rounded-2xl border border-gray-300 p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#03278D]/10">
                <FaPhone className="text-2xl text-[#03278D]" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <h2 className="text-lg md:text-xl font-semibold text-[#03278D]">Telefon</h2>
                <p className="mt-1 text-sm md:text-base text-[#03278D]">+43 677 62376793</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="tel:+4367762376793"
                className="inline-flex items-center justify-center rounded-lg border border-[#03278D] px-4 py-2 text-sm font-medium text-[#03278D] transition-colors hover:bg-[#03278D] hover:text-white"
                aria-label="Jetzt anrufen: +43 677 62376793"
              >
                Jetzt anrufen
              </a>
              <a
                href="https://wa.me/4367762376793"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-[#03278D]/10 px-4 py-2 text-sm font-medium text-[#03278D] transition-colors hover:bg-[#03278D]/20"
                aria-label="Per WhatsApp kontaktieren"
              >
                WhatsApp
              </a>
            </div>
            <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#03278D]/5 transition-transform group-hover:scale-110" />
          </div>

          {/* Email Card */}
          <div className="group relative overflow-hidden rounded-2xl border border-gray-300 bg-[color:var(--color-card)] p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#03278D]/10">
                <MdOutlineMailOutline className="text-2xl text-[#03278D]" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <h2 className="text-lg md:text-xl font-semibold text-[#03278D]">E-Mail</h2>
                <p className="mt-1 text-sm md:text-base text-[#03278D]">office@itx-solutions.com</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="mailto:office@itx-solutions.com"
                className="inline-flex items-center justify-center rounded-lg border border-[#03278D] px-4 py-2 text-sm font-medium text-[#03278D] transition-colors hover:bg-[#03278D] hover:text-white"
                aria-label="E-Mail schreiben an office@itx-solutions.com"
              >
                E-Mail schreiben
              </a>
              <a
                href="mailto:office@itx-solutions.com?subject=Anfrage%20ITX-Solution&body=Hallo%20Team%20ITX-Solution%2C%0A%0Aich%20habe%20folgende%20Frage%3A%20"
                className="inline-flex items-center justify-center rounded-lg bg-[#03278D]/10 px-4 py-2 text-sm font-medium text-[#03278D] transition-colors hover:bg-[#03278D]/20"
                aria-label="Schnell-Anfrage per E-Mail"
              >
                Schnell-Anfrage
              </a>
            </div>
            <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#03278D]/5 transition-transform group-hover:scale-110" />
          </div>
        </div>

        {/* Helper line */}
        <div className="mt-10 md:mt-12 flex items-center justify-center">
          <span className="rounded-full bg-[#03278D]/10 px-4 py-2 text-sm text-[#03278D]">
            Antwort innerhalb von 24 Stunden
          </span>
        </div>

        <div className="h-[500px] w-full mt-[50px]">
            <MapEmbed />
        </div>
      </div>
    </section>
  )
}

export default Banner