import { useEffect } from "react";

interface FlowerConfettiProps {
  duration?: number;
}

export default function FlowerConfetti({ duration = 3000 }: FlowerConfettiProps) {
  useEffect(() => {
    const flowers = ["🌸", "🌺", "🌻", "🌷", "🌼", "🌹", "💐", "🪷"];
    const confettiCount = 50;
    const confettiElements: HTMLElement[] = [];

    // Create confetti elements
    for (let i = 0; i < confettiCount; i++) {
      const confetti = document.createElement("div");
      const flower = flowers[Math.floor(Math.random() * flowers.length)];
      confetti.textContent = flower;
      confetti.style.position = "fixed";
      confetti.style.left = `${Math.random() * 100}%`;
      confetti.style.top = "-10px";
      confetti.style.fontSize = `${Math.random() * 20 + 20}px`;
      confetti.style.opacity = "1";
      confetti.style.pointerEvents = "none";
      confetti.style.zIndex = "9999";
      confetti.style.userSelect = "none";
      
      // Random animation duration
      const animDuration = Math.random() * 2 + 2;
      const delay = Math.random() * 0.5;
      
      confetti.style.animation = `fall ${animDuration}s ease-in ${delay}s forwards`;
      confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
      
      document.body.appendChild(confetti);
      confettiElements.push(confetti);
    }

    // Add animation keyframes if not already present
    if (!document.getElementById("flower-confetti-styles")) {
      const style = document.createElement("style");
      style.id = "flower-confetti-styles";
      style.textContent = `
        @keyframes fall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    }

    // Cleanup after animation
    const cleanup = setTimeout(() => {
      confettiElements.forEach((el) => {
        if (el.parentNode) {
          el.parentNode.removeChild(el);
        }
      });
    }, duration);

    return () => {
      clearTimeout(cleanup);
      confettiElements.forEach((el) => {
        if (el.parentNode) {
          el.parentNode.removeChild(el);
        }
      });
    };
  }, [duration]);

  return null;
}

