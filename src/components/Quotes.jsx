import { useContext } from "react";
import { QuoteContext } from "../contextApi/QuoteContext";

const Quotes = () => {
  const { quotes } = useContext(QuoteContext);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100 p-6">
      <h1 className="text-4xl font-bold text-center text-teal-700 mb-10">Inspiring Quotes ✨</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {quotes.map((quote) => (
          <div
            key={quote.id}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-200 border-l-4 border-teal-400"
          >
            <p className="text-lg text-gray-800 italic mb-4">
              “{quote.quote}”
            </p>
            <p className="text-right text-sm font-semibold text-teal-600">
              — {quote.author}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quotes;
