"use client";

import { useState } from "react";

export default function Home() {
  const [level, setLevel] = useState("S2");
  const [subject, setSubject] = useState("Mathematics");
  const [started, setStarted] = useState(false);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="flex items-center justify-between border-b border-white/10 px-5 py-5">
        <h1 className="text-xl font-bold text-violet-400">
          Shaloms AI
        </h1>
        <span className="rounded-full bg-violet-500/15 px-3 py-1 text-sm text-violet-300">
          AI Learning
        </span>
      </header>

      <section className="mx-auto max-w-3xl px-5 py-16">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-violet-400">
          Your smart study partner
        </p>

        <h2 className="text-4xl font-extrabold leading-tight sm:text-6xl">
          Learn smarter.
          <span className="block text-violet-400">
            Test yourself.
          </span>
        </h2>

        <p className="mt-5 max-w-xl text-slate-300">
          Practice quizzes, test your knowledge and track your
          learning progress with Shaloms AI.
        </p>

        <div className="mt-10 grid gap-5 rounded-2xl border border-white/10 bg-white/5 p-6">
          <label className="grid gap-2">
            <span className="text-sm text-slate-300">Class</span>
            <select
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="rounded-xl border border-white/10 bg-slate-900 p-4"
            >
              <option value="S2">Senior 2 (S2)</option>
              <option value="S3">Senior 3 (S3)</option>
            </select>
          </label>

          <label className="grid gap-2">
            <span className="text-sm text-slate-300">Subject</span>
            <select
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="rounded-xl border border-white/10 bg-slate-900 p-4"
            >
              <option value="Mathematics">Mathematics</option>
              <option value="Physics">Physics</option>
            </select>
          </label>

          <button
            onClick={() => setStarted(true)}
            className="rounded-xl bg-violet-600 px-5 py-4 font-bold hover:bg-violet-500"
          >
            Generate a quiz →
          </button>

          {started && (
            <div className="rounded-xl border border-violet-400/30 bg-violet-500/10 p-4">
              <h3 className="font-bold">Your study session</h3>
              <p className="mt-2 text-slate-300">
                Class: {level}
              </p>
              <p className="text-slate-300">
                Subject: {subject}
              </p>
              <p className="mt-3 text-sm text-violet-300">
                Frontend ready! AI quiz generation will be connected later.
              </p>
            </div>
          )}
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          Built for curious minds • Shaloms AI
        </p>
      </section>
    </main>
  );
}
