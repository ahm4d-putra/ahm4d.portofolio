import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { RotateCcw, CheckCircle } from "lucide-react";

// daftar kata (snippet)
const codeSnippets = [
  `const greeting = "Hello World";`,
  `import { motion } from "framer-motion";`,
  `function sum(a, b) { return a + b; }`,
  `const [count, setCount] = useState(0);`,
  `console.log("Portfolio is awesome!");`,
  `ahmadgantengbgt lohya`,
];

export default function Playground() {
  const [snippet, setSnippet] = useState("");
  const [userInput, setUserInput] = useState("");
  const [status, setStatus] = useState("idle"); 
  const [startTime, setStartTime] = useState(null);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const inputRef = useRef(null);

  // Setup snippet pertama kali saat komponen dimuat
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * codeSnippets.length);
    setSnippet(codeSnippets[randomIndex]);
  }, []);

  // Menghitung WPM dan Akurasi secara real-time
  useEffect(() => {
    if (status === "typing" && startTime) {
      const currentTime = new Date().getTime();
      const timeTaken = (currentTime - startTime) / 1000 / 60; 

      // perhitungan wpm
      const wordsTyped = userInput.length / 5;
      const currentWpm = Math.round(wordsTyped / timeTaken) || 0;
      setWpm(currentWpm);

      // Hitung akurasi karakter yang benar
      let correctChars = 0;
      for (let i = 0; i < userInput.length; i++) {
        if (userInput[i] === snippet[i]) correctChars++;
      }
      setAccuracy(Math.round((correctChars / snippet.length) * 100) || 100);
    }
  }, [userInput, status, startTime]);

  // Fungsi untuk mereset game
  const resetGame = () => {
    const randomIndex = Math.floor(Math.random() * codeSnippets.length);
    setSnippet(codeSnippets[randomIndex]);
    setUserInput("");
    setStatus("idle");
    setStartTime(null);
    setWpm(0);
    setAccuracy(100);
    inputRef.current?.focus(); // Boleh focus pas reset karena user lagi main
  };

  // Handler saat user mengetik
  const handleChange = (e) => {
    const value = e.target.value;

    // Mulai timer saat huruf pertama diketik
    if (status === "idle") {
      setStatus("typing");
      setStartTime(new Date().getTime());
    }

    // Cek jika sudah selesai
    if (value === snippet) {
      setStatus("finished");
    }

    setUserInput(value);
  };

  // Render tampilan snippet dengan warna (Hijau = bener, Merah = salah)
  const renderSnippet = () => {
    return snippet.split("").map((char, index) => {
      let colorClass = "text-muted"; // inikalo belum diketik

      if (index < userInput.length) {
        if (userInput[index] === char) {
          colorClass = "text-accent"; // Bener -> Hijau
        } else {
          colorClass = "text-red-500 bg-red-500/20"; // Salah -> Merah
        }
      }

      // Animasi Cursor blinking di posisi ketik
      if (index === userInput.length && status !== "finished") {
        return (
          <span key={index} className={`${colorClass} relative`}>
            <span className="absolute w-0.5 h-full bg-accent animate-pulse -left-0.5 top-0" />
            {char}
          </span>
        );
      }

      return (
        <span key={index} className={colorClass}>
          {char}
        </span>
      );
    });
  };

  return (
    <section id="playground" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="font-display text-3xl font-bold text-light">
                Interactive Playground
              </h2>
              <p className="text-muted mt-1">
                Test your coding speed. Type the code below.
              </p>
            </div>
            <button
              onClick={resetGame}
              className="p-2 text-muted hover:text-accent transition-colors"
              aria-label="Restart"
            >
              <RotateCcw size={20} />
            </button>
          </div>

          {/* Code Editor Card */}
          <div className="glass rounded-xl overflow-hidden border border-muted/10 shadow-xl">
            {/* Editor Top Bar (MacOS Style) */}
            <div className="bg-dark/50 px-4 py-3 flex items-center justify-between border-b border-muted/10">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs text-muted font-mono">script.js</span>
              <div className="w-14"></div> {/* Spacer */}
            </div>

            {/* Editor Body */}
            <div className="relative p-6 font-mono text-lg leading-relaxed min-h-[150px] cursor-text">
              {/* Layer 1: The Code Text (Visible) */}
              <pre className="absolute top-6 left-6 pointer-events-none select-none">
                <code>{renderSnippet()}</code>
              </pre>

              {/* Layer 2: Hidden Input (Type catcher) */}
              <input
                ref={inputRef}
                type="text"
                value={userInput}
                onChange={handleChange}
                disabled={status === "finished"}
                // Input transparan biar keliatan kode di belakangnya
                className="absolute inset-0 w-full h-full p-6 bg-transparent text-transparent caret-transparent outline-none z-10"
                // Hapus autoFocus di sini
              />
            </div>

            {/* Stats Footer */}
            <div className="px-6 py-4 bg-dark/30 border-t border-muted/10 flex justify-between items-center">
              <div className="flex gap-6">
                <div>
                  <span className="text-muted text-xs block">Speed</span>
                  <span className="text-light font-bold text-lg">
                    {wpm}{" "}
                    <span className="text-xs font-normal text-muted">WPM</span>
                  </span>
                </div>
                <div>
                  <span className="text-muted text-xs block">Accuracy</span>
                  <span className="text-light font-bold text-lg">
                    {accuracy}%
                  </span>
                </div>
              </div>

              {status === "finished" && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="flex items-center gap-2 text-accent"
                >
                  <CheckCircle size={20} />
                  <span className="font-semibold">Perfect!</span>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
