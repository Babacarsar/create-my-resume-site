import { useEffect, useState } from "react";

interface TypingTextProps {
  text: string;
  speed?: number;
  startDelay?: number;
  className?: string;
  showCursor?: boolean;
}

const TypingText = ({
  text,
  speed = 80,
  startDelay = 0,
  className,
  showCursor = true,
}: TypingTextProps) => {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(startTimer);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length >= text.length) return;

    const timer = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1));
    }, speed);

    return () => clearTimeout(timer);
  }, [displayed, text, speed, started]);

  const isDone = displayed.length >= text.length;

  return (
    <span className={className} aria-label={text}>
      <span className="font-mono text-primary mr-1">{'>'}</span>
      <span>{displayed}</span>
      {showCursor && (
        <span
          className={`inline-block w-[2px] h-[1em] -mb-[0.15em] ml-1 bg-primary ${
            isDone ? "animate-pulse" : ""
          }`}
        />
      )}
    </span>
  );
};

export default TypingText;
