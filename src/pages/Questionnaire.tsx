import { useState, useEffect, useRef } from 'react';
import { Camera, Share2, RotateCcw, Check } from 'lucide-react';
import html2canvas from 'html2canvas';
import { Question, Rating } from '../types';
import Legend from '../components/Legend';

interface QuestionnaireProps {
  questions: Question[];
  title: string;
  description: string;
  downloadFilename: string;
}

export default function Questionnaire({
  questions,
  title,
  description,
  downloadFilename,
}: QuestionnaireProps) {
  const [hasStarted, setHasStarted] = useState(false);
  const [showNSFW, setShowNSFW] = useState(false);
  const [responses, setResponses] = useState<Record<string, Rating>>({});
  const [isCapturing, setIsCapturing] = useState(false);
  const [shareSuccess, setShareSuccess] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const filteredQuestions = questions.filter(
    (q) => !q.hidden && (showNSFW || !q.nsfw)
  );

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const encodedResponses = params.get('r');

    if (encodedResponses) {
      try {
        const decoded = atob(encodedResponses);
        const parsed = JSON.parse(decoded);
        setResponses(parsed);
        setHasStarted(true);
      } catch (e) {
        console.error('Failed to decode responses', e);
      }
    }
  }, []);

  const handleRatingClick = (questionId: string, rating: Rating) => {
    setResponses((prev) => ({
      ...prev,
      [questionId]: rating,
    }));
  };

  const handleScreenshot = async () => {
    if (!contentRef.current) return;

    setIsCapturing(true);

    try {
      const canvas = await html2canvas(contentRef.current, {
        backgroundColor: '#323347',
        scale: 2,
      });

      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.download = downloadFilename;
          link.href = url;
          link.click();
          URL.revokeObjectURL(url);
        }
      });
    } catch (error) {
      console.error('Screenshot failed:', error);
    } finally {
      setTimeout(() => setIsCapturing(false), 500);
    }
  };

  const handleShare = () => {
    const encoded = btoa(JSON.stringify(responses));
    const url = `${window.location.origin}${window.location.pathname}?r=${encoded}`;

    navigator.clipboard.writeText(url).then(() => {
      setShareSuccess(true);
      setTimeout(() => setShareSuccess(false), 3000);
    });
  };

  const handleRestart = () => {
    setResponses({});
    setHasStarted(false);
    window.history.replaceState({}, '', window.location.pathname);
  };

  const getRatingLabel = (rating: Rating): string => {
    const labels: Record<Rating, string> = {
      0: 'Pas du tout',
      1: 'Un peu',
      2: 'Modérément',
      3: 'Bien',
      4: 'Beaucoup',
      5: 'Énormément',
    };
    return labels[rating];
  };

  const getRatingColor = (rating: Rating): string => {
    const colors: Record<Rating, string> = {
      0: 'bg-white',
      1: 'bg-pink-300',
      2: 'bg-green-400',
      3: 'bg-yellow-300',
      4: 'bg-orange-400',
      5: 'bg-pink-400',
    };
    return colors[rating];
  };

  if (!hasStarted) {
    return (
      <div className="min-h-screen bg-brand-dark flex items-center justify-center px-4">
        <div className="text-center max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-brand-accent mb-6">
            {title}
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            {description}
          </p>
          <button
            onClick={() => setHasStarted(true)}
            className="px-12 py-6 rounded-lg font-bold text-2xl bg-brand-accent text-brand-dark hover:shadow-lg hover:shadow-brand-accent/50 hover:scale-105 transition-all transform"
          >
            Répondre
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-dark">
      <Legend />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex justify-end items-center gap-4 mb-8">
          <div className="flex items-center gap-3">
            <label htmlFor="nsfw-toggle" className="text-gray-200 font-semibold text-sm">
              Contenu NSFW
            </label>
            <button
              id="nsfw-toggle"
              onClick={() => setShowNSFW(!showNSFW)}
              className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                showNSFW ? 'bg-brand-accent' : 'bg-gray-600'
              }`}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                  showNSFW ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          <button
            onClick={handleScreenshot}
            disabled={isCapturing}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-mid text-gray-200 hover:bg-brand-accent hover:text-brand-dark transition-all disabled:opacity-50"
            title="Capturer en image"
          >
            <Camera size={20} />
          </button>

          <button
            onClick={handleShare}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-mid text-gray-200 hover:bg-brand-accent hover:text-brand-dark transition-all relative"
            title="Partager le lien"
          >
            {shareSuccess ? <Check size={20} /> : <Share2 size={20} />}
            {shareSuccess && (
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-green-600 text-white px-3 py-1 rounded text-xs whitespace-nowrap">
                Lien copié!
              </span>
            )}
          </button>

          <button
            onClick={handleRestart}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-mid text-gray-200 hover:bg-red-600 hover:text-white transition-all"
            title="Recommencer"
          >
            <RotateCcw size={20} />
          </button>
        </div>

        <div ref={contentRef} className="bg-brand-mid rounded-lg p-8 animate-fadeIn">
          <h2 className="text-3xl font-bold text-brand-accent mb-6 text-center">
            {title}
          </h2>

          <div className="space-y-6">
            {(() => {
              const groupedQuestions = filteredQuestions.reduce((acc, question) => {
                const category = question.category || 'Général';
                if (!acc[category]) acc[category] = [];
                acc[category].push(question);
                return acc;
              }, {} as Record<string, Question[]>);

              return Object.entries(groupedQuestions).map(([category, categoryQuestions]) => (
                <div key={category} className="space-y-2">
                  <div className="bg-gray-600 rounded px-4 py-2">
                    <h3 className="text-white font-semibold text-sm">{category}</h3>
                  </div>
                  <div className="space-y-1">
                    {categoryQuestions.map((question) => {
                      const currentRating = responses[question.id];

                      return (
                        <div
                          key={question.id}
                          className="bg-gray-700 rounded flex items-center overflow-hidden hover:bg-gray-650 transition-colors"
                        >
                          <div className="flex gap-1 p-2">
                            {([0, 1, 2, 3, 4, 5] as Rating[]).map((rating) => (
                              <button
                                key={rating}
                                onClick={() => handleRatingClick(question.id, rating)}
                                className={`w-7 h-7 rounded-full border-2 transition-all ${
                                  currentRating === rating
                                    ? `${getRatingColor(rating)} border-gray-900`
                                    : 'bg-white border-gray-400 hover:border-gray-600'
                                }`}
                                title={`${rating} - ${getRatingLabel(rating)}`}
                              />
                            ))}
                          </div>
                          <div className="flex-1 px-4 py-2 text-gray-100 text-sm">
                            {question.label}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ));
            })()}
          </div>

          {filteredQuestions.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">
                Aucune question disponible avec ces filtres.
              </p>
            </div>
          )}
        </div>

        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>
            Répondez aux questions, puis utilisez les boutons en haut pour
            capturer une image ou partager vos résultats.
          </p>
        </div>
      </div>
    </div>
  );
}
