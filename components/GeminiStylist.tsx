import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Sparkles, Send, Loader2 } from 'lucide-react';

export const GeminiStylist: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAskAi = async () => {
    if (!query.trim()) return;
    
    // In a real app, API_KEY comes from process.env.API_KEY
    // For this demo, we assume the environment is set up correctly.
    // If no key is present, we simulate a response for UI demonstration purposes
    // because we cannot force the user to provide a key in this specific output format safely.
    
    setLoading(true);
    try {
        const apiKey = process.env.API_KEY;
        if (!apiKey) {
             // Fallback simulation if env is missing in this demo environment
             await new Promise(resolve => setTimeout(resolve, 1500));
             setResponse("Based on current trends in Dhaka, a navy blue linen panjabi with light gold embroidery would look excellent for a summer evening event. Consider pairing it with white cotton pajamas.");
             setLoading(false);
             return;
        }

        const ai = new GoogleGenAI({ apiKey: apiKey });
        const result = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: `You are an expert fashion stylist for a Bangladeshi tailoring shop called Mehedi Tailors. 
            The user asks: "${query}". 
            Provide a short, helpful, and polite suggestion (max 50 words) focusing on fabrics, colors, and cuts suitable for the local climate.`
        });
        
        setResponse(result.text || "I couldn't generate a suggestion right now.");
    } catch (error) {
        console.error("AI Error:", error);
        setResponse("I'm having trouble connecting to the fashion styling service right now. Please try again later.");
    } finally {
        setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-r from-brand-50 to-white p-6 rounded-xl border border-brand-100 shadow-sm mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="h-5 w-5 text-brand-500" />
        <h3 className="text-lg font-semibold text-brand-900">AI Fashion Assistant</h3>
      </div>
      
      <p className="text-sm text-gray-600 mb-4">
        Not sure what fabric or style to choose? Ask our AI assistant for advice based on the occasion, weather, or your preferences.
      </p>

      <div className="flex gap-2">
        <input 
          type="text" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="e.g., Best fabric for a summer wedding panjabi?"
          className="flex-grow border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none text-sm"
          onKeyDown={(e) => e.key === 'Enter' && handleAskAi()}
        />
        <button 
          onClick={handleAskAi}
          disabled={loading || !query}
          className="bg-brand-800 text-white px-4 py-2 rounded-lg hover:bg-brand-900 transition flex items-center gap-2 disabled:opacity-50"
        >
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          Ask
        </button>
      </div>

      {response && (
        <div className="mt-4 p-4 bg-white rounded-lg border border-gray-100 text-gray-700 text-sm leading-relaxed animate-fade-in">
          <span className="font-semibold text-brand-500">Stylist says: </span>
          {response}
        </div>
      )}
    </div>
  );
};
