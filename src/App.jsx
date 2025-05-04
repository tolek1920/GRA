
import { useState } from "react";

const villains = [
  {
    name: "Pan Kolejka",
    hint: "Czas się zatrzymał. Kolejka się nie przesuwa. Terminal się zawiesił. Kto za tym stoi?",
    image: "/images/zloczynca_2.png",
    explanation: "Pan Kolejka uosabia problemy z wolnym POS-em, zbyt małą liczbą kas i skomplikowanym interfejsem."
  },
  {
    name: "Madame Metlik",
    hint: "Oferta jest tak złożona, że klient nie wie, co wybrać. Rabaty, kombinacje, wyjątki...",
    image: "/images/zloczynca_3.png",
    explanation: "Madame Metlik symbolizuje chaos wynikający z przeładowanej oferty i nieintuicyjnego interfejsu."
  },
  {
    name: "Kapitan Niedoczas",
    hint: "Personel zmęczony, brakuje ludzi, presja rośnie. Obsługa pada na twarz...",
    image: "/images/zloczynca_4.png",
    explanation: "Kapitan Niedoczas reprezentuje problemy kadrowe, brak czasu i jakości obsługi."
  },
  {
    name: "Reklamator",
    hint: "Więcej serwisu niż sprzedaży. Formularze, dekodery, zgłoszenia...",
    image: "/images/zloczynca_5.png",
    explanation: "Reklamator pokazuje, jak punkt sprzedaży zmienia się w punkt serwisowy, utrudniając sprzedaż."
  },
  {
    name: "Rozdzielator",
    hint: "To nie tutaj! A może dział sprzedaży? Lepiej zadzwoń na infolinię...",
    image: "/images/zloczynca_6.png",
    explanation: "Rozdzielator to chaos informacyjny i brak spójności między działami."
  },
  {
    name: "Cisza Strefowa",
    hint: "Nie ma punktu. Nie ma klienta. Nie ma kontaktu z marką. Pustka...",
    image: "/images/zloczynca_7.png",
    explanation: "Cisza Strefowa to brak fizycznych POS-ów i widoczności marki."
  }
];

function App() {
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const next = () => {
    setShowAnswer(false);
    setIndex((prev) => (prev + 1) % villains.length);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', textAlign: 'center', fontFamily: 'Arial' }}>
      <h1>🎭 Zidentyfikuj Złoczyńcę POS</h1>
      <img src={villains[index].image} alt={villains[index].name} style={{ maxWidth: '100%', height: 'auto', margin: '20px 0' }} />
      <p><em>{villains[index].hint}</em></p>
      {showAnswer ? (
        <>
          <h2>✅ {villains[index].name}</h2>
          <p style={{ fontSize: '0.9em', color: '#555' }}>{villains[index].explanation}</p>
        </>
      ) : (
        <button onClick={() => setShowAnswer(true)}>Pokaż odpowiedź</button>
      )}
      <br /><br />
      <button onClick={next}>➡️ Następna zagadka</button>
    </div>
  );
}

export default App;
