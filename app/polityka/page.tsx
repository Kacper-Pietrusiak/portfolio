import React from 'react'

const page = () => {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24 text-gray-800">
      <h1 className="text-3xl font-bold text-green-600 mb-8">Polityka prywatności</h1>

      <p className="mb-6">
        Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych przekazanych przez Użytkowników w związku z korzystaniem z mojej strony internetowej.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">1. Administrator danych osobowych</h2>
      <p className="mb-6">
        Administratorem danych jest Kacper Pietrusiak, prowadzący stronę internetową dostępną pod adresem kacperpietrusiak.pl .<br />
        Kontakt: <strong>pietrusiak02@gmail.com</strong>
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">2. Zakres zbieranych danych</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>imię i adres e-mail (np. poprzez formularz kontaktowy lub mailto),</li>
        <li>inne dane dobrowolnie przesłane w wiadomości.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">3. Cel przetwarzania danych</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>odpowiedź na zapytanie,</li>
        <li>realizacja usług edukacyjnych lub współpracy,</li>
        <li>utrzymanie kontaktu.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">4. Podstawa prawna przetwarzania</h2>
      <p className="mb-6">
        Dane są przetwarzane zgodnie z art. 6 ust. 1 lit. a i b RODO – na podstawie zgody użytkownika oraz w celu wykonania umowy.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">5. Odbiorcy danych</h2>
      <p className="mb-6">Dane nie są przekazywane podmiotom trzecim, chyba że wymagają tego przepisy prawa.</p>

      <h2 className="text-xl font-semibold mt-8 mb-2">6. Okres przechowywania danych</h2>
      <p className="mb-6">
        Dane są przechowywane przez okres niezbędny do realizacji celu, a następnie usuwane zgodnie z obowiązującymi przepisami.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">7. Prawa użytkownika</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>dostępu do swoich danych,</li>
        <li>sprostowania, usunięcia lub ograniczenia przetwarzania,</li>
        <li>przenoszenia danych,</li>
        <li>sprzeciwu wobec przetwarzania,</li>
        <li>cofnięcia zgody,</li>
        <li>wniesienia skargi do PUODO.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">8. Pliki cookies</h2>
      <p className="mb-6">
        Strona nie używa plików cookies do celów marketingowych ani statystycznych. Jeżeli w przyszłości zostaną one wprowadzone, użytkownik zostanie poinformowany i poproszony o zgodę.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">9. Zmiany w polityce prywatności</h2>
      <p className="mb-6">
        Zastrzegam sobie prawo do wprowadzenia zmian w niniejszej Polityce. Nowa wersja będzie publikowana na tej stronie.
      </p>

      <p className="text-sm text-gray-500 mt-12">Data ostatniej aktualizacji: 12.04.2025</p>
    </main>
  )

}

export default page