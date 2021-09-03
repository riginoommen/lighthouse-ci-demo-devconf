import { Component } from '@angular/core';
import ConfettiGenerator from 'canvas-confetti';

const randomInRange = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'lighthouse-ci-demo-devconf';

  photos = [
    {
      url: 'nilesh.jpg',
      name: 'Nilesh Patil',
    },
    {
      url: 'rigin.png',
      name: 'Rigin Oommen',
    },
    {
      url: 'sayak.png',
      name: 'Sayak Sarkar',
    },
    {
      url: 'mayur.png',
      name: 'Mayur Deshmukh',
    },
    {
      url: 'ghanshyam.jpg',
      name: 'Ghanshyam Lohar',
    },
    {
      url: 'diwanshi.png',
      name: 'Diwanshi Pandey',
    },
    {
      url: 'shruti.jpg',
      name: 'Shruti Pandey',
    },
    {
      url: 'deepesh.png',
      name: 'Deepesh Nair',
    },
    {
      url: 'sumeet.jpg',
      name: 'Sumeet Ingole',
    },
    {
      url: 'akhil.jpg',
      name: 'Akhil Mohan',
    },
    {
      url: 'smaran.jpg',
      name: 'Smaran Ponnappa',
    },
    {
      url: 'gautam.jpg',
      name: 'Gautam Krishna R',
    },
    {
      url: 'arkoo.jpg',
      name: 'Arkaprovo Bhattacharjee',
    },
    {
      url: 'shivani.jpg',
      name: 'Shivani Kale',
    },
    {
      url: 'soumyadip.jpg',
      name: 'Soumyadeep Chowdhary',
    },
    {
      url: 'shruti-anand.jpg',
      name: 'Shruti Anand',
    },
    {
      url: 'avatar.svg',
      name: 'Kishori Patil',
    },
  ];

  pop() {
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    let skew = 1;

    (function frame() {
      var timeLeft = animationEnd - Date.now();
      var ticks = Math.max(200, 500 * (timeLeft / duration));
      skew = Math.max(0.8, skew - 0.001);

      ConfettiGenerator({
        particleCount: 1,
        startVelocity: 0,
        ticks: ticks,
        origin: {
          x: Math.random(),
          // since particles fall down, skew start toward the top
          y: Math.random() * skew - 0.2,
        },
        colors: ['#ee0000', '#000000'],
        shapes: ['circle', 'square'],
        gravity: randomInRange(0.4, 0.6),
        scalar: randomInRange(0.4, 1),
        drift: randomInRange(-0.4, 0.4),
      });

      if (timeLeft > 0) {
        requestAnimationFrame(frame);
      }
    })();
  }

  ngOnInit() {
    this.pop();
  }
}
