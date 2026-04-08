import { Rating } from "../types";
import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function Legend() {
  const [isOpen, setIsOpen] = useState(false);

  const legendItems: Array<{ rating: Rating; label: string; color: string }> = [
    { rating: 0, label: "Ne sais pas", color: "bg-white" },
    { rating: 1, label: "Kiff++", color: "bg-pink-300" },
    { rating: 2, label: "Oui j'aime bien", color: "bg-green-400" },
    { rating: 3, label: "Okay", color: "bg-yellow-300" },
    { rating: 4, label: "A discuter", color: "bg-orange-400" },
    { rating: 5, label: "Pas du tout", color: "bg-pink-400" },
  ];

  return (
    <>
      <div className="hidden md:block fixed right-8 bottom-8 z-50 bg-brand-mid rounded-lg shadow-xl p-6 border border-gray-600 max-w-xs">
        <h3 className="text-white font-bold text-lg mb-4 text-center">
          Les bonnes questions à se poser et à partager à son hypnotiseur avant
          la session
        </h3>
        <div className="space-y-3">
          {legendItems.map((item) => (
            <div key={item.rating} className="flex items-center gap-3">
              <div
                className={`w-8 h-8 rounded-full border-2 border-gray-800 ${item.color} flex-shrink-0`}
              />
              <span className="text-gray-100 text-sm font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-brand-mid border-t border-gray-600 shadow-2xl">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-4 py-3 flex items-center justify-between text-white font-semibold text-sm active:bg-gray-700 transition-colors"
        >
          <span>Légende</span>
          {isOpen ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
        </button>
        {isOpen && (
          <div className="px-4 pb-4 pt-2 space-y-2 max-h-64 overflow-y-auto">
            {legendItems.map((item) => (
              <div key={item.rating} className="flex items-center gap-3">
                <div
                  className={`w-8 h-8 rounded-full border-2 border-gray-800 ${item.color} flex-shrink-0`}
                />
                <span className="text-gray-100 text-sm font-medium">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
