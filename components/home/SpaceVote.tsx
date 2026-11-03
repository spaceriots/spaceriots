
"use client";

import { useEffect, useState } from "react";

const options = [
  "Solar Eclipse 2027",
  "Artemis III",
  "Tesla Roadster",
];

const STORAGE_KEY = "space-riots-voted";

export default function SpaceVote() {
  const [selected, setSelected] = useState("");
  const [voted, setVoted] = useState(false);
  const [checking, setChecking] = useState(true);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setVoted(localStorage.getItem(STORAGE_KEY) === "true");
    setChecking(false);
  }, []);

  async function submitVote() {
    if (!selected || voted || loading || checking) return;

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/vote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          vote: selected,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Could not submit your vote."
        );
      }

      localStorage.setItem(STORAGE_KEY, "true");

      setVoted(true);
      setSelected("");
      setMessage("Thank you! Your vote has been submitted.");
    } catch (error) {
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  function resetVote() {
    localStorage.removeItem(STORAGE_KEY);
    setVoted(false);
    setSelected("");
    setMessage("Voting has been reset. You can vote again.");
  }

  return (
    <section
      aria-labelledby="space-vote-title"
      className="border-t border-white/5 bg-[#050608] px-5 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent sm:text-sm">
            Space Riots Community
          </p>

          <h2
            id="space-vote-title"
            className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Which event are you most excited about?
          </h2>

          <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
            Choose your favourite upcoming space-related event
            and cast your vote.
          </p>
        </div>

        {/* Voting options */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {options.map((option) => {
            const isSelected = selected === option;

            return (
              <button
                key={option}
                type="button"
                disabled={voted || loading || checking}
                onClick={() => {
                  setSelected(option);
                  setMessage("");
                }}
                aria-pressed={isSelected}
                className={`min-h-32 border p-5 text-left transition-colors ${
                  isSelected
                    ? "border-accent bg-accent/10"
                    : "border-white/10 bg-white/[0.02] hover:border-white/30"
                } disabled:cursor-not-allowed disabled:opacity-60`}
              >
                <span className="flex items-center justify-between gap-3">
                  <span className="text-sm font-medium text-foreground">
                    {option}
                  </span>

                  <span
                    aria-hidden="true"
                    className={`flex size-5 shrink-0 items-center justify-center rounded-full border text-xs ${
                      isSelected
                        ? "border-accent bg-accent text-white"
                        : "border-white/30 text-transparent"
                    }`}
                  >
                    ✓
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Submit and feedback */}
        <div className="mt-8 flex flex-col items-center">
          <button
            type="button"
            onClick={submitVote}
            disabled={
              !selected || voted || loading || checking
            }
            className="inline-flex min-h-12 w-full max-w-xs items-center justify-center rounded-md bg-[#f04444] px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-red-500/10 transition-colors hover:bg-[#dc3535] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f04444] disabled:cursor-not-allowed disabled:bg-white/10 disabled:text-white/40 disabled:shadow-none"
          >
            {checking
              ? "Loading..."
              : loading
                ? "Submitting..."
                : voted
                  ? "Already Voted"
                  : "Submit Vote"}
          </button>

          {/* Testing reset */}
          {voted && !loading && (
            <button
              type="button"
              onClick={resetVote}
              className="mt-4 text-xs text-muted underline underline-offset-4 transition-colors hover:text-foreground"
            >
              Reset vote (change vote)
            </button>
          )}

          {/* Status message */}
          {message && (
            <p
              role="status"
              aria-live="polite"
              className="mt-5 text-center text-sm text-muted"
            >
              {message}
            </p>
          )}

          {/* Privacy message */}
          <p className="mt-5 text-center text-xs text-muted">
            Your vote is private. Results are not displayed publicly.
          </p>
        </div>
      </div>
    </section>
  );
}
