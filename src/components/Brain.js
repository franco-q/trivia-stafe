import React from "react";

export default function Brain({ level, g, className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 686.29 651.14"
      className={className}
    >
      <g data-name="Capa 2">
        <g data-name="4">
          {g === "M" && (
            <>
              {" "}
              <path
                fill="#354352"
                d="M477.54 498.37c8.68-65.46 57.59-104.62 86.46-159.64 47.61-90.73 16.23-217.61-64.41-279.2-40.22-30.72-91-45.08-141.36-49.71C307.1 5.13 254.4 10 207.08 30c-45.32 19.1-82 53.59-107 95.56-25.48 42.52-48.28 98.11-36.99 148.07.66 2.89 1.41 5.84 1 8.77-.5 3.9-2.92 7.23-5.24 10.41a643.43 643.43 0 00-48.36 77.36 19.42 19.42 0 00-2.31 7.47c-1 12.36 11.2 16.19 21.18 18.64 8.46 2.07 18.46 6.36 19.2 15.05.47 5.54-3.25 10.5-4.52 15.91-2.9 12.39 10.59 25.37 22.85 22C61 451 54.82 452.82 50.9 458a11.11 11.11 0 00-2.34 7.76c1 9.65 13.9 10.08 17.27 17.92 2.2 5.1-.66 10.81-3.06 15.82-8 16.69-10.74 37.83.07 52.82 10.7 14.84 31.24 19 49.47 17.45s36-7.42 54.27-7.81c7.82-.17 16.66 1.23 21.17 7.62 2.65 3.77 3.25 8.56 3.77 13.14q1.14 10 2.33 19.91A37.42 37.42 0 00231 635.48h230.36a29.75 29.75 0 0028.35-38.62c-9.98-32.28-16.57-65.31-12.17-98.49z"
              ></path>
              <path
                fill="#fff"
                d="M461.36 643.62H231a45.59 45.59 0 01-45.24-40c-.85-7-1.66-14-2.34-20-.38-3.38-.82-7.21-2.34-9.37-2.71-3.84-10.15-4.26-14.34-4.17-9.47.2-18.86 2-28.8 3.92a236.48 236.48 0 01-25 3.87c-25 2.07-45.71-5.51-56.74-20.8C45 541.43 44.64 518.6 55.43 496l.2-.43c1.36-2.83 3.4-7.1 2.73-8.66-.46-1.06-3-2.56-5-3.75-4.77-2.84-12-7.13-12.93-16.56a19.16 19.16 0 013.94-13.49c.44-.58.9-1.13 1.37-1.66-.55-.45-1.08-.93-1.61-1.43-7-6.78-10-16-8-24.63a44.45 44.45 0 012.51-7.2c1-2.41 1.94-4.68 1.82-6.17-.25-2.93-5.24-5.93-13-7.83-7.94-1.95-29-7.11-27.37-27.22a27.42 27.42 0 013.23-10.61A653.27 653.27 0 0152.3 288c1.73-2.36 3.51-4.8 3.75-6.65a18.29 18.29 0 00-.75-5.29l-.15-.65C42.86 221 69 161.62 93 121.37c27.29-45.62 65.63-79.81 110.88-98.89S301.34-3.58 359 1.71c59 5.42 108 22.7 145.53 51.35 40.78 31.14 70.36 78.47 83.28 133.27 13.07 55.41 7.17 110.87-16.6 156.18-10.3 19.62-23.06 37.27-35.41 54.33-23 31.84-44.79 61.91-50.19 102.6-3.64 27.39 0 56.69 11.88 95a37.89 37.89 0 01-36.13 49.17zM167.8 553.81c12.47 0 21.42 3.73 26.6 11.09 3.92 5.56 4.67 12.12 5.21 16.91.68 5.94 1.48 12.94 2.33 19.85A29.28 29.28 0 00231 627.34h230.36a21.3 21.3 0 0017.31-8.74 21.56 21.56 0 003.26-19.34c-12.58-40.67-16.42-72.12-12.47-102 5.94-44.77 29.94-77.93 53.15-110 12-16.6 24.43-33.77 34.18-52.35 45-85.72 16.52-208.88-62.14-268.95-35-26.76-81.19-42.94-137.17-48.07-54.94-5-104.48 1.54-147.23 19.56-42 17.72-77.74 49.62-103.23 92.24-22.55 37.7-47.09 93-36 142.1l.15.62a30.78 30.78 0 011 11c-.77 6-4.07 10.51-6.73 14.15A638 638 0 0017.71 374a11.35 11.35 0 00-1.39 4.32c-.27 3.3.67 6.55 15 10.06 19.82 4.85 24.74 14.79 25.37 22.27.46 5.45-1.46 10.08-3 13.8A32.92 32.92 0 0052 429.1c-.82 3.53 1.25 7 3.46 9.18s5.82 4.06 9.3 3.1l4.44 15.67c-5.71 1.67-9.62 3-11.8 5.86a3.17 3.17 0 00-.74 2c.11 1.09 1.42 2.06 5.06 4.23 4 2.4 9 5.39 11.59 11.29 3.6 8.36-.21 16.32-3 22.14l-.2.42c-6.31 13.23-9.81 31.88-.67 44.55 7.5 10.4 23.27 15.67 42.19 14.1a220.34 220.34 0 0023.24-3.64c10.17-2 20.68-4 31.53-4.21z"
              ></path>
            </>
          )}

          {g === "F" && (
            <>
              {" "}
              <path
                fill="#354352"
                d="M673.35 218.68a29.64 29.64 0 00-2.1-3.06c-2.86-3.65-4-9.08-4-13.66-.11-13.15-.3-26.28-2.3-39.35-3.89-25.38-24.54-47.42-49.76-51.71-14.4-2.45-27.74.76-38.54 11.22-6.58 6.37-9 14.86-10.41 23.6-1.8 11.4-1.1 22.91-1.23 34.39 0 2.6.22 5.25-.81 7.82-1.64-.26-1.94-1.7-2.47-2.8-6.38-13.46-12.64-27-19.07-40.42C530.91 120.3 516.33 97.8 498 77.8c-13.39-14.61-29.47-25.56-46.71-35C417.91 24.37 382.05 14 344.37 9.64c-21.12-2.44-42.28-1.58-63.37.29-19.11 1.69-38.1 4.36-56.45 9.92-24.82 7.52-46.55 20.41-63.4 40.39-9 10.63-16.11 22.64-22.3 35.14-1.2 2.42-2.42 4.87-2.43 7.71 0 1.42-1.27 2.26-2.06 3.25C115.05 130.7 100.91 158 89 186.53c-3.83 9.21-7.61 18.39-10.23 28.05A44.85 44.85 0 0081 245c3.92 9.17 4.54 18.94 2.83 28.79A29.85 29.85 0 0176.9 288c-11.15 13.25-24.26 24.47-37.11 36-8 7.19-16.42 14-23.64 22.08-4.46 5-8 10.37-8 17.42a14.62 14.62 0 004 10.43c3.49 3.76 7.77 6.39 12.11 9a75.59 75.59 0 019.14 5.88c6.68 5.41 10.06 13.49 4.07 22.69-2.2 3.38-4.34 6.74-5.31 10.77-1.14 4.75.29 8.53 3.76 11.69s7.53 4.92 11.56 6.86c-1.41 1.56-2.69 3.09-4.08 4.49a22.08 22.08 0 00-6.19 13.16 9.64 9.64 0 003.06 8.48c5.31 5.24 12.08 8.57 18.17 12.77a1.27 1.27 0 01.25 1.88c-8.19 10-14.93 20.78-15.41 33.6C42.51 535 56.34 552 77 557.26c19.31 4.9 39 7.08 58.81 8.51 15.47 1.11 31 1.45 46.35 4.12 6.19 1.08 10.11 4.51 12.47 10.16 2.1 5 3.31 10.34 4.76 15.57 3.22 11.54 8.82 22 14.29 32.57q1.26 2.43 2.43 4.91a17.39 17.39 0 0015.71 9.9h230.89a25.66 25.66 0 0023.52-35.91c-16.74-38.42-31.35-72.42-35.48-84.46-.83-2.43-4.56-8.18-1.27-10 1.33-.73 2.95-.56 4.47-.5 7.15.26 14-2.39 20.79-4.75 14.36-5 29.11-8.79 43.52-13.67 21.32-7.23 44.21-17.37 56.9-37a218.71 218.71 0 0027-58.8c7.27-25.36 5.23-50.18-3-74.85-.36-1.08-1.18-2.11-.79-3.57 3.94.88 7.82 1.79 11.78 2.31 25.08 3.32 50.58-14 60.17-36.09 1.29-3 2.53-6.06 3.61-9.08 1.15-3.24 1.45-7.06 2-10.44a188.66 188.66 0 002.07-21.43 65.86 65.86 0 00-.86-16.06 31.86 31.86 0 00-3.79-10.02z"
              ></path>
              <path
                fill="#fff"
                d="M462.71 651.14H231.83a25.61 25.61 0 01-23.06-14.55c-.76-1.6-1.54-3.16-2.31-4.65l-.82-1.58c-5.31-10.21-10.8-20.78-14.08-32.55-.33-1.18-.64-2.36-1-3.55a87.8 87.8 0 00-3.48-11.08c-1.36-3.27-3.08-4.7-6.35-5.27-11.05-1.92-22.11-2.58-33.82-3.27-3.83-.23-7.8-.47-11.72-.75-17.81-1.28-38.9-3.32-60.22-8.73-24.33-6.16-40.73-26.91-39.84-50.38.49-13 6.3-23.79 12.56-32.41a72.43 72.43 0 01-13.15-9.75 17.65 17.65 0 01-5.41-15.33 31 31 0 015.43-14.24 33.69 33.69 0 01-4.14-3.19c-5.84-5.33-8-12.11-6.19-19.6 1.33-5.52 4.14-9.85 6.4-13.32 1.28-2 4.27-6.55-2.36-11.92a54.63 54.63 0 00-6.7-4.34l-1.46-.86c-5-2.94-9.77-5.95-13.94-10.43a22.74 22.74 0 01-6.17-16c0-10.29 5.41-17.6 10.08-22.82a213 213 0 0118.75-17.85c1.85-1.61 3.7-3.23 5.53-4.87l4.6-4.11c11.45-10.19 22.26-19.81 31.71-31a21.8 21.8 0 005.16-10.36c1.54-8.88.77-17-2.29-24.2A52.62 52.62 0 0171 212.44c2.8-10.34 6.93-20.27 10.57-29 14-33.69 28.76-59.78 46.46-82.11.15-.2.31-.38.45-.55a28.1 28.1 0 013.1-8.93C138.88 77 146.53 65 154.93 55c16.93-20.09 39.54-34.53 67.2-42.93 16.42-5 34.34-8.14 58.1-10.24 17.76-1.57 41.21-3 65.07-.27 40.34 4.66 77.33 16.12 109.92 34.07C476.1 47.11 491.6 58.77 504 72.29c18 19.63 33.45 42.82 46 68.9 2.36 4.93 4.72 9.92 7 14.87a107.34 107.34 0 011.15-11.61c1.38-8.69 4.07-19.74 12.79-28.18 12.14-11.77 27.89-16.4 45.56-13.4 28.25 4.8 52 29.41 56.45 58.51 2 13.21 2.28 26.17 2.39 40.52 0 3.53.94 6.94 2.31 8.69a37.13 37.13 0 012.69 3.91 40 40 0 014.81 12.55 74.58 74.58 0 011 18 195.73 195.73 0 01-2.23 22.4c-.12.75-.22 1.53-.33 2.31a47.62 47.62 0 01-2 9.59c-1.07 3-2.35 6.23-3.81 9.6-11.63 26.74-40.79 44.27-68 41 6.64 24.56 6.71 47.61.23 70.2a228.15 228.15 0 01-28 61c-14.36 22.17-40.21 33.16-61.12 40.25-7 2.36-14.05 4.48-20.91 6.54-7.45 2.23-15.16 4.54-22.54 7.11l-1.58.56c-5.26 1.84-11.07 3.88-17.33 4.48 4.25 12.33 20.16 49.22 35.18 83.71a33.8 33.8 0 01-31 47.3zM316.63 16.28c-12.81 0-24.84.86-35 1.76-22.6 2-39.51 5-54.81 9.61-24.6 7.46-44.61 20.19-59.48 37.83-7.55 9-14.5 19.93-21.24 33.52-.82 1.66-1.58 3.19-1.58 4.12a11.52 11.52 0 01-3.64 8.1l-.24.25C124 132.52 110 157.38 96.56 189.65c-3.62 8.72-7.36 17.73-9.9 27.06a36.5 36.5 0 001.85 25c4.32 10.11 5.45 21.35 3.36 33.38a37.54 37.54 0 01-8.74 18.06c-10.21 12.12-22 22.59-33.34 32.71L45.22 330c-1.87 1.68-3.77 3.34-5.66 5a196.36 196.36 0 00-17.35 16.45c-4.19 4.69-5.91 8.17-5.93 12a6.49 6.49 0 001.84 4.87c2.67 2.89 6.23 5.1 10.28 7.49l1.39.82a67.65 67.65 0 018.72 5.74c11.13 9 13.34 21.83 5.77 33.46-2.07 3.19-3.59 5.65-4.21 8.23-.36 1.49-.25 2.34 1.32 3.77 2.19 2 5.26 3.46 8.51 5l10.91 5.24-7.3 8.08c-.42.47-.84.93-1.24 1.39-1 1.11-2 2.25-3.11 3.39a13.86 13.86 0 00-3.89 8.46c-.06.46-.11.83.71 1.64 3 2.95 6.81 5.33 10.85 7.84 2 1.27 4.15 2.59 6.23 4A9.41 9.41 0 0165 486.65c-9.17 11.17-13.23 19.77-13.57 28.74-.6 16 10.49 29.64 27.61 34 20.09 5.1 40.29 7 57.39 8.28 3.82.27 7.73.51 11.51.73 11.65.69 23.69 1.41 35.66 3.49 8.81 1.53 15.06 6.59 18.58 15a101.11 101.11 0 014.18 13.15c.3 1.13.6 2.25.92 3.38 2.82 10.14 7.69 19.5 12.84 29.41l.82 1.59c.87 1.66 1.73 3.4 2.57 5.17a9.26 9.26 0 008.35 5.25h230.85a17.52 17.52 0 0016.05-24.52c-16-36.68-31.36-72.38-35.71-85.07-.06-.16-.31-.72-.5-1.12a27.52 27.52 0 01-2.29-6.45c-1.17-6.2 2-10.37 5.31-12.19a15 15 0 018.25-1.52h.43c5.05.19 10.46-1.71 16.19-3.73l1.62-.57c7.72-2.68 15.6-5 23.22-7.33 6.72-2 13.67-4.1 20.36-6.37 19.56-6.63 41.12-15.81 52.68-33.67a211.81 211.81 0 0026-56.62c6.36-22.17 5.42-45-2.86-69.92l-.08-.2a11.83 11.83 0 01-.9-8.13l2-7.57 9.06 2c3.36.75 6.53 1.46 9.67 1.87 22.51 3 43.93-13.56 51.63-31.27 1.32-3 2.46-5.91 3.4-8.56a35.44 35.44 0 001.25-6.36c.12-.89.24-1.77.37-2.62a181.69 181.69 0 002-20.55 60.14 60.14 0 00-.7-14.09 23.9 23.9 0 00-2.84-7.47 21.09 21.09 0 00-1.52-2.21c-5.14-6.56-5.76-15.21-5.78-18.62-.11-13.71-.35-26.05-2.21-38.18-3.43-22.37-21.54-41.26-43.08-44.92-12.52-2.13-23.12.91-31.5 9-4.16 4-6.56 9.72-8 19-1.24 7.89-1.19 15.94-1.14 24.46v10a23.82 23.82 0 01-1.4 9.51l-2.42 6-6.4-1c-3.88-.61-6.73-3-8.46-7.12l-.1-.24q-3.89-8.22-7.76-16.48c-3.68-7.85-7.49-16-11.29-23.9-12-25-26.13-46.23-43.28-64.93-11.16-12.18-25.34-22.8-44.62-33.42-31.16-17.04-65.16-27.55-103.93-32.03a233.38 233.38 0 00-26.8-1.45z"
              ></path>
            </>
          )}

          <path
            fill={level >= 10 ? "red" : "#9e9e9e"}
            id="l10"
            d="M417.45 121.31c-2.31.54-2.89-.27-4-1.91-9.84-14.9-20.81-19.08-37.84-14.57-1.9.5-3.45 1.11-5.44-.38C353.89 92.27 337 94.09 320.09 103c-2.94 1.55-5 1.89-8.29.59-17.17-6.76-33.58-2.92-44.08 10.58-2.78 3.59-5 4-8.94 3-12.59-3.39-28.94 1.43-39.14 10.53h228c-7.64-8.25-16.09-9.7-30.19-6.39z"
          ></path>
          <path
            fill={level >= 9 ? "#e81701" : "#9e9e9e"}
            id="l9"
            d="M462.15 141.31c-3.75-.53-6-1.71-8.1-5.07a55.34 55.34 0 00-6.37-8.56h-228a32.34 32.34 0 00-6.44 7.69c-2.25 3.87-4.49 5.73-9.25 6.18-10.26 1-19.09 8.9-19.75 16.83h295c-1.03-9.38-7.13-15.64-17.09-17.07z"
          ></path>
          <path
            fill={level >= 8 ? "#bb4402" : "#9e9e9e"}
            id="l8"
            d="M496.59 180.41A34.31 34.31 0 00483 166.68c-2.7-1.47-3.55-3.05-3.62-6.05 0-.77-.07-1.52-.15-2.25h-295a10.83 10.83 0 000 2.13c.39 3.56-.59 4.77-3.35 6.48-10 6.21-17.23 14-21.75 23.25h340.66a24.43 24.43 0 00-3.2-9.83z"
          ></path>
          <path
            fill={level >= 7 ? "#8e7103" : "#9e9e9e"}
            id="l7"
            d="M498.28 208.7c-2-2.54-2.85-4-1.07-7.19a19 19 0 002.58-11.27H159.11q-5.91 12.07-5.67 27.42a29.13 29.13 0 00.33 3.86h353a93 93 0 00-8.49-12.82z"
          ></path>
          <path
            fill={level >= 6 ? "#778803" : "#9e9e9e"}
            id="l6"
            d="M506.78 221.52h-353c1.56 10.75 8.78 19.68 18.23 21.51 3.56.68 4 1.7 3.56 4.75a22.68 22.68 0 00-.25 4.44h340.9a77.18 77.18 0 00-9.44-30.7z"
          ></path>
          <path
            fill={level >= 5 ? "#619e04" : "#9e9e9e"}
            id="l5"
            d="M516.22 252.22H175.31c.31 7 4.27 12.23 10.6 16.31 8.86 5.7 19.09 6.83 29.05 8.77 13.59 2.65 27.3 4.47 42 4.24l-.95 2h256.92a86.77 86.77 0 003.29-31.32z"
          ></path>
          <path
            fill={level >= 4 ? "#4ab504" : "#9e9e9e"}
            id="l4"
            d="M492.23 312.62c-.39-3-.3-4.51 2.86-6.23a34.84 34.84 0 0017.16-20.5c.25-.8.46-1.59.68-2.39H256c-.5 1-.92 1.9-1.31 2.75-5.28 11.44-3.39 21.23 5.47 29.11H492.5c-.07-.91-.15-1.82-.27-2.74z"
          ></path>
          <path
            fill={level >= 3 ? "#33cc05" : "#9e9e9e"}
            id="l3"
            d="M490 331.82a34.14 34.14 0 002.54-16.46H260.16c.88.79 1.81 1.56 2.83 2.31 9.36 6.85 20 10.07 31.31 12 12.75 2.15 23.85 6.63 31.25 16.41h152.66q7.49-4.48 11.79-14.26z"
          ></path>
          <path
            fill={level >= 2 ? "#1de205" : "#9e9e9e"}
            id="l2"
            d="M444.3 356.19c2.2-9.1 2.12-9.09 11-7.33a45.81 45.81 0 005.83.76c6.66.46 12.33-.76 17-3.56H325.55a40.72 40.72 0 015.67 10.49c2.57 6.93 5.2 13.83 7.65 20.79h33.46c.53-2.39 1.07-4.84 1.62-7.42 2.45 3 4.14 5.42 5.85 7.42h54.81c4.83-6.04 7.8-13.34 9.69-21.15z"
          ></path>
          <path
            fill={level >= 1 ? "#06f906" : "#9e9e9e"}
            id="l1"
            d="M344.89 396.46c3.4 12.67 3.43 12.48 15.48 12.53 4.31 0 5.9-1.21 6.62-5.68 1.35-8.3 3.25-16.52 5.34-26h-33.46c2.22 6.33 4.29 12.69 6.02 19.15zM379.8 377.34a26.56 26.56 0 001.84 2c12.86 12.24 31.93 14.76 44.93 5.62a38.79 38.79 0 008-7.58z"
          ></path>
        </g>
      </g>
    </svg>
  );
}