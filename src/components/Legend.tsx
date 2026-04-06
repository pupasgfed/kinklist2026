import { Rating } from '../types';

export default function Legend() {
  const legendItems: Array<{ rating: Rating; label: string; color: string }> = [
    { rating: 0, label: "Ne sais pas", color: "bg-white" },
    { rating: 1, label: "Kiff++", color: "bg-pink-300" },
    { rating: 2, label: "Oui j'aime bien", color: "bg-green-400" },
    { rating: 3, label: "Okay", color: "bg-yellow-300" },
    { rating: 4, label: "A discuter", color: "bg-orange-400" },
    { rating: 5, label: "Pas du tout", color: "bg-pink-400" },
  ];

  return (
    <div className="fixed right-8 top-[550px] z-50 bg-brand-mid rounded-lg shadow-xl p-6 border border-gray-600 max-w-xs">
      <h3 className="text-white font-bold text-lg mb-4 text-center">
        Les bonnes questions à se poser et à partager à son hypnotiseur avant la session
      </h3>
      <div className="space-y-3">
        {legendItems.map((item) => (
          <div key={item.rating} className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-full border-2 border-gray-800 ${item.color} flex-shrink-0`} />
            <span className="text-gray-100 text-sm font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
