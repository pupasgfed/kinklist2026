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

    await new Promise(resolve => setTimeout(resolve, 100));

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
      0: 'Ne sais pas',
      1: 'Kiff++',
      2: 'Oui j\'aime bien',
      3: 'Okay',
      4: 'A discuter',
      5: 'Pas du tout',
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-accent mb-4 md:mb-6 px-2">
            {title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 md:mb-12 px-4">
            {description}
          </p>
          <button
            onClick={() => setHasStarted(true)}
            className="px-8 py-4 sm:px-10 sm:py-5 md:px-12 md:py-6 rounded-lg font-bold text-xl sm:text-2xl bg-brand-accent text-brand-dark hover:shadow-lg hover:shadow-brand-accent/50 hover:scale-105 transition-all transform active:scale-95"
          >
            Répondre
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-dark pb-20 md:pb-8">
      <Legend />
      <div className="max-w-4xl mx-auto px-3 sm:px-4 py-4 md:py-8">
        <div className="flex flex-wrap justify-end items-center gap-2 sm:gap-3 md:gap-4 mb-4 md:mb-8">
          <div className="flex items-center gap-2 sm:gap-3">
            <label htmlFor="nsfw-toggle" className="text-gray-200 font-semibold text-xs sm:text-sm">
              NSFW
            </label>
            <button
              id="nsfw-toggle"
              onClick={() => setShowNSFW(!showNSFW)}
              className={`relative inline-flex h-7 w-12 sm:h-8 sm:w-14 items-center rounded-full transition-colors ${
                showNSFW ? 'bg-brand-accent' : 'bg-gray-600'
              }`}
            >
              <span
                className={`inline-block h-5 w-5 sm:h-6 sm:w-6 transform rounded-full bg-white transition-transform ${
                  showNSFW ? 'translate-x-6 sm:translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          <button
            onClick={handleScreenshot}
            disabled={isCapturing}
            className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg bg-brand-mid text-gray-200 hover:bg-brand-accent hover:text-brand-dark transition-all disabled:opacity-50 active:scale-95"
            title="Capturer en image"
          >
            <Camera size={18} className="sm:w-5 sm:h-5" />
            <span className="hidden sm:inline text-sm">Image</span>
          </button>

          <button
            onClick={handleShare}
            className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg bg-brand-mid text-gray-200 hover:bg-brand-accent hover:text-brand-dark transition-all relative active:scale-95"
            title="Partager le lien"
          >
            {shareSuccess ? <Check size={18} className="sm:w-5 sm:h-5" /> : <Share2 size={18} className="sm:w-5 sm:h-5" />}
            <span className="hidden sm:inline text-sm">Partager</span>
            {shareSuccess && (
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-green-600 text-white px-3 py-1 rounded text-xs whitespace-nowrap z-10">
                Lien copié!
              </span>
            )}
          </button>

          <button
            onClick={handleRestart}
            className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg bg-brand-mid text-gray-200 hover:bg-red-600 hover:text-white transition-all active:scale-95"
            title="Recommencer"
          >
            <RotateCcw size={18} className="sm:w-5 sm:h-5" />
            <span className="hidden sm:inline text-sm">Recommencer</span>
          </button>
        </div>

        <div ref={contentRef} className="bg-brand-mid rounded-lg p-4 sm:p-6 md:p-8 animate-fadeIn">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-accent mb-4 sm:mb-6 text-center">
            {title}
          </h2>

          <div className="space-y-4 sm:space-y-6">
            {(() => {
              const groupedQuestions = filteredQuestions.reduce((acc, question) => {
                const category = question.category || 'Général';
                if (!acc[category]) acc[category] = [];
                acc[category].push(question);
                return acc;
              }, {} as Record<string, Question[]>);

              return Object.entries(groupedQuestions).map(([category, categoryQuestions]) => (
                <div key={category} className="space-y-2">
                  <div className="bg-gray-600 rounded px-3 sm:px-4 py-2">
                    <h3 className="text-white font-semibold text-xs sm:text-sm">{category}</h3>
                  </div>
                  <div className="space-y-3 sm:space-y-1.5">
                    {categoryQuestions.map((question) => {
                      const currentRating = responses[question.id];

                      return (
                        <div key={question.id}>
                          {!isCapturing && (
                            <div className="md:hidden bg-gray-700/50 rounded-lg border-l-4 border-brand-accent/60 p-4">
                              <div className="text-gray-100 text-base font-medium mb-3">
                                {question.label}
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                {([0, 1, 2, 3, 4, 5] as Rating[]).map((rating) => (
                                  <button
                                    key={rating}
                                    onClick={() => handleRatingClick(question.id, rating)}
                                    className={`
                                      px-3 py-2.5 rounded-lg text-sm font-medium
                                      border-2 transition-all active:scale-95
                                      ${
                                        currentRating === rating
                                          ? `${getRatingColor(rating)} border-gray-900 text-gray-900 shadow-md`
                                          : 'bg-gray-700 border-gray-600 hover:border-gray-500 text-gray-200'
                                      }
                                    `}
                                    title={`${rating} - ${getRatingLabel(rating)}`}
                                  >
                                    {rating} - {getRatingLabel(rating)}
                                  </button>
                                ))}
                              </div>
                            </div>
                          )}

                          <div className={isCapturing ? 'flex' : 'hidden md:flex'} style={{ backgroundColor: '#35354a', borderRadius: '0.25rem', alignItems: 'center', overflow: 'hidden' }}>
                            <div className="flex gap-1 p-2 justify-start">
                              {([0, 1, 2, 3, 4, 5] as Rating[]).map((rating) => (
                                <button
                                  key={rating}
                                  onClick={() => handleRatingClick(question.id, rating)}
                                  className={`w-7 h-7 md:w-8 md:h-8 rounded-full border-2 transition-all ${
                                    currentRating === rating
                                      ? `${getRatingColor(rating)} border-gray-900`
                                      : 'bg-white border-gray-400 hover:border-gray-600'
                                  }`}
                                  title={`${rating} - ${getRatingLabel(rating)}`}
                                />
                              ))}
                            </div>
                            <div className="flex-1 px-4 py-2 text-white text-base font-medium">
                              {question.label}
                            </div>
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
            <div className="text-center py-8 sm:py-12">
              <p className="text-gray-400 text-base sm:text-lg">
                Aucune question disponible avec ces filtres.
              </p>
            </div>
          )}
        </div>

        <div className="mt-6 sm:mt-8 text-center text-gray-400 text-xs sm:text-sm px-4">
          <p>
            Répondez aux questions, puis utilisez les boutons en haut pour
            capturer une image ou partager vos résultats.
          </p>
        </div>
      </div>
    </div>
  );
}
