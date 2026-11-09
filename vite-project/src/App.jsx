
import React, { useState } from "react";
import "./App.css";

const hearts = Array.from({ length: 25 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  delay: Math.random() * 8,
  duration: 5 + Math.random() * 7,
  size: 15 + Math.random() * 25
}));

export default function App() {
  const [opened, setOpened] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [noCount, setNoCount] = useState(0);
  const [music, setMusic] = useState(false);
  const [position, setPosition] = useState({
    left: 65,
    top: 50
  });

  const moveNo = () => {
    setNoCount(prev => prev + 1);
    setPosition({
      left: 5 + Math.random() * 65,
      top: 5 + Math.random() * 65
    });
  };

  const playMusic = () => {
    const audio = document.getElementById("loveMusic");

    if (!audio) return;

    if (music) {
      audio.pause();
      setMusic(false);
    } else {
      audio.play().then(() => {
        setMusic(true);
      }).catch(() => {
        alert("Добавь музыку в public/music.mp3");
      });
    }
  };

  const sayYes = () => {
    setAccepted(true);
  };

  return (
    <div className="love-app">

      <audio id="loveMusic" loop>
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>

      <button className="music-btn" onClick={playMusic}>
        {music ? "🔊 Music ON" : "🎵 Play Music"}
      </button>

      <div className="heart-rain">
        {hearts.map(heart => (
          <span
            key={heart.id}
            style={{
              left: `${heart.left}%`,
              animationDelay: `${heart.delay}s`,
              animationDuration: `${heart.duration}s`,
              fontSize: `${heart.size}px`
            }}
          >
            {["❤️", "💕", "💗", "💖"][heart.id % 4]}
          </span>
        ))}
      </div>

      {!opened ? (

        <section className="intro">
          <div className="sparkle">✨ 💗 ✨</div>

          <p className="small-title">A SPECIAL MESSAGE FOR YOU</p>

          <h1>
            Hey, My Love
            <span> ❤️</span>
          </h1>

          <p className="intro-text">
            Я приготовил для тебя кое-что особенное...
          </p>

          <div
            className="envelope"
            onClick={() => setOpened(true)}
          >
            <div className="env-back"></div>
            <div className="env-letter">
              <span>To My Princess</span>
              <h2>❤️</h2>
            </div>
            <div className="env-front"></div>
            <div className="env-flap"></div>
            <div className="env-seal">♥</div>
          </div>

          <button
            className="main-btn"
            onClick={() => setOpened(true)}
          >
            OPEN MY LETTER 💌
          </button>
        </section>

      ) : accepted ? (

        <section className="final-screen">

          <div className="fireworks">🎆 ✨ 🎇 ✨ 🎆</div>

          <h1>YOU ARE MY WORLD ❤️</h1>

          <div className="big-heart">💖</div>

          <h2>Я очень сильно тебя люблю!</h2>

          <p>
            Спасибо, что ты появилась в моей жизни.
            <br />
            Ты — моя улыбка, моё счастье
            <br />
            и мой самый любимый человек.
          </p>

          <div className="photo-final">
            <img src="/images/photo1.jpg" alt="Our memory"
              onError={e => e.currentTarget.style.display = "none"} />
          </div>

          <h3>FOREVER & ALWAYS 💍</h3>

          <p className="signature">Yours forever ❤️</p>

        </section>

      ) : (

        <section className="story">

          <p className="small-title">JUST FOR YOU, MY PRINCESS</p>

          <h1 className="story-title">
            Моей любимой девушке
            <span> ❤️</span>
          </h1>

          <div className="photo-gallery">

            <div className="photo photo-one">
              <img
                src="/images/photo1.jpg"
                alt="Our first photo"
                onError={e => e.currentTarget.style.display = "none"}
              />
              <p>My favorite person 💗</p>
            </div>

            <div className="photo photo-two">
              <img
                src="/images/photo2.jpg"
                alt="Beautiful memory"
                onError={e => e.currentTarget.style.display = "none"}
              />
              <p>My happiness ❤️</p>
            </div>

            <div className="photo photo-three">
              <img
                src="/images/photo3.jpg"
                alt="Our memories"
                onError={e => e.currentTarget.style.display = "none"}
              />
              <p>My forever 💕</p>
            </div>

          </div>

          <div className="love-card">

            <div className="card-decoration">💗 ✨ 💗</div>

            <h2>Моё признание тебе</h2>

            <p>
              Моя любимая,
              <br /><br />
              Я не всегда умею красиво выражать свои чувства,
              но сегодня хочу сказать тебе самое важное.
              <br /><br />
              С того момента, как ты появилась в моей жизни,
              многое стало прекраснее.
              Твоя улыбка делает мой день лучше,
              твой голос дарит спокойствие,
              а твои глаза для меня особенные.
              <br /><br />
              Я хочу дарить тебе цветы,
              обнимать тебя, поддерживать,
              радовать и быть рядом не только
              в счастливые, но и в трудные моменты.
              <br /><br />
              Я не обещаю быть идеальным,
              но обещаю искренне стараться
              делать тебя счастливой.
              <br /><br />
              Я очень тебя люблю! ❤️
            </p>

            <div className="signature">
              С любовью, твой парень ❤️
            </div>

          </div>

          <h2 className="question">
            Will you stay with me forever? 💍
          </h2>

          <div className="answer-area">

            <button className="yes-btn" onClick={sayYes}>
              YES, MY LOVE ❤️
            </button>

            <button
              className="no-btn"
              style={{
                left: `${position.left}%`,
                top: `${position.top}%`
              }}
              onMouseEnter={moveNo}
              onTouchStart={moveNo}
              onClick={moveNo}
            >
              {noCount === 0
                ? "DECLINE 💔"
                : ["Really? 🥺", "Think again! 💗", "Please! ❤️"][Math.min(noCount - 1, 2)]}
            </button>

          </div>

          <p className="bottom-text">
            Made with all my love ❤️
          </p>

        </section>

      )}

    </div>
  );
}
