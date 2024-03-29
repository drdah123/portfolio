import gsap from 'gsap';
import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import './BooksRevies.css';

function BooksReview() {
  const first = useRef();
  const second = useRef();
  const third = useRef();
  const forth = useRef();
  const fifth = useRef();

  useEffect(() => {
    gsap.to(
      [
        first.current,
        second.current,
        third.current,
        forth.current,
        fifth.current,
      ],
      {
        height: '100%',
        opacity: 1,
        duration: 1.5,
        delay: 0.5,
        ease: 'expo.out',
        stagger: {
          ease: 'none',
          amount: 1.5,
        },
      }
    );
    gsap.to('.strip h1,.strip h2,.strip h3,.strip h4', {
      opacity: 1,
      duration: 1,
      delay: 1,
      stagger: {
        amount: 1.5,
      },
    });
  });
  return (
    <div className="wrap">
      <div ref={first} className="strip one">
        <p className="crown">&#9812;</p>
        <h1>Angels 3o'clock</h1>
        <h2>Jack Hartley</h2>
        <h3>Crown Press</h3>
        <div className="review">
          <p>
            When Jack wakes up at 3am one morning to find angels in his bedroom
            his life changes forever.
          </p>
          <p>
            <em>
              An extraordinary read and a fine first novel.
              <br />
              The Grauniad
            </em>
          </p>
        </div>
      </div>

      <div ref={second} className="strip two">
        <p className="crown">&#9812;</p>
        <h1>Cloud Bustin'</h1>
        <h2>Sian O'Brien</h2>
        <h3>Crown Press</h3>
        <div className="review">
          <p>
            Kate's father has a secret. When the Russians discover it she and
            her father have a race against time to stop it falling into the
            wrong hands.
          </p>
          <p>
            <em>
              I couldn't put this down. The story charges towards a thrilling
              climax.
              <br />
              Woman's Weekly
            </em>
          </p>
        </div>
      </div>

      <div ref={third} className="strip three">
        <p className="crown">&#9812;</p>
        <h1>Seven Deadly Bins</h1>
        <h2>Trash Norton</h2>
        <h3>Crown Press</h3>
        <div className="review">
          <p>
            Michael uncovers a plot to blow up the Australian Embassy in London.
            However, no one believes him and he must find a way to convince the
            authorities of the truth.
          </p>
          <p>
            <em>Following hot on the heels of his previous novel,</em> The
            Henchman's Basin
            <em>
              , this is a fine novel indeed.
              <br />
              Fishing Magazine Monthly
            </em>
          </p>
        </div>
      </div>

      <div ref={forth} className="strip four">
        <p className="crown">&#9812;</p>
        <h1>A Cuckoo Calls</h1>
        <h2>Erasmus Coach</h2>
        <h3>Crown Press</h3>
        <div className="review">
          <p>
            Expect the unexpected in this expertly woven tale of a birdwatcher.
          </p>
          <p>
            <em>
              Well, I certainly didn't expect this when I started reading.
              <br />
              Twitcher's Monthly
            </em>
          </p>
        </div>
      </div>

      <div ref={fifth} className="strip five">
        <p className="crown">&#9812;</p>
        <h1>A Steamy Romance</h1>
        <h2>Eliza Smalls</h2>
        <h3>Crown Press</h3>
        <div className="review">
          <p>
            Hubert and Molly have worked in the same clothes cleaner's for
            years. When they fall in love their loyalty to their boss is tested.
          </p>
          <p>
            <em>
              I cried buckets to this one and got the pages wet.
              <br />
              The Rock Garden Hobbyist
            </em>
          </p>
        </div>
      </div>
    </div>
  );
}

export default BooksReview;
