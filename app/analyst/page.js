"use client";
import { useState } from "react";

export default function AnalystPage() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleAsk() {
    if (!question.trim()) return;
    setLoading(true);
    setAnswer(null);

    const response = await fetch("/api/analyst", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question }),
    });

    const data = await response.json();
    setAnswer(data.answer);
    setLoading(false);
  }

  return (
    <main className="flex-1 bg-gray-950 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-2 text-[#034694]">
        AI Football Analyst
      </h1>
      <p className="text-center text-gray-400 mb-8">
        Ask anything about Chelsea tactics and performance
      </p>

      <div className="max-w-2xl mx-auto flex flex-col gap-4">
        <textarea
          className="w-full bg-gray-900 border border-gray-700 rounded-xl p-4 text-white placeholder-gray-500 resize-none focus:outline-none focus:border-blue-500"
          rows={4}
          placeholder="e.g. How should Chelsea set up against a high press?"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <button
          onClick={handleAsk}
          disabled={loading}
          className="bg-[#034694] hover:bg-blue-700 disabled:bg-gray-700 text-white font-semibold py-3 rounded-xl transition-colors"
        >
          {loading ? "Analysing..." : "Ask the Analyst"}
        </button>

        {answer && (
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
            <p className="text-sm text-blue-400 mb-2 font-semibold">Analysis</p>
            <p className="text-gray-200 leading-relaxed whitespace-pre-wrap">{answer}</p>
          </div>
        )}
      </div>
    </main>
  );
}
