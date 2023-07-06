import { h } from '@stencil/core';

export const SvgSprite = () => (
  <svg aria-hidden="true" style={{ display: 'none' }}>
    <symbol id="pi-close" viewBox="0 0 32 32">
      <path
        fill="currentColor"
        d="M22.6 23.5L16 17l-6.5 6.6-.9-.9 6.5-6.6-6.6-6.7.9-.9 6.6 6.6 6.5-6.6.9.9L17 16l6.6 6.6-1 .9z"
      />
    </symbol>
    <symbol id="pi-search" viewBox="0 0 32 32">
      <path
        fill="currentColor"
        d="M32 28.2l-11-11c1.1-1.7 1.7-3.7 1.7-5.9C22.7 5.1 17.6 0 11.3 0 5.1 0 0 5.1 0 11.3c0 6.3 5.1 11.3 11.3 11.3 2.2 0 4.2-.6 5.9-1.7l11 11 3.8-3.7zM1.3 11.3c0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10-10-4.4-10-10zm17.2 8.8c.1 0 .1-.1.2-.1.6-.5 1.1-1 1.6-1.6l9.8 9.8-1.9 1.9-9.8-9.8c0-.1.1-.1.1-.2z"
      />
    </symbol>
    <symbol id="pi-arrow-down" viewBox="0 0 32 32">
      <path
        fill="currentColor"
        d="M23.6,13.2l-7.5,7.6l-7.6-7.6l0.9-0.9l6.6,6.6l6.6-6.6L23.6,13.2z"
      />
    </symbol>
    <symbol id="pi-menu" viewBox="0 0 32 32">
      <path
        fill="currentColor"
        d="M26.7 8v1.3H5.4V8h21.3zM5.4 17.3h21.3V16H5.4v1.3zm0 8.1h21.3V24H5.4v1.4z"
      />
    </symbol>
    <symbol id="pi-pointy-arrow-right" viewBox="0 0 32 32">
      <path
        fill="currentColor"
        d="M29.4 17.4H0V16h29.5L18.8 5.3h1.9L32 16.7 20.6 28h-1.9l10.7-10.6z"
      />
    </symbol>
    <symbol id="8004_facebook" viewBox="0 0 32 32">
      <path
        fill="currentColor"
        d="M22.8 10.5l-.5 5.4h-4.5V32h-6.4V15.9H8v-5.5h3.4V6.1c0-4 2.2-6.2 7-6.2h4.5v5.6h-3.5c-1.2 0-1.5.5-1.5 1.8v3.1h4.9z"
      />
    </symbol>
    <symbol id="8007_instagram" viewBox="0 0 32 32">
      <path
        fill="currentColor"
        d="M23.1 0H8.9C4 0 0 4 0 8.9v14.2C0 28 4 32 8.9 32h14.2c4.9 0 8.9-4 8.9-8.9V8.9C32 4 28 0 23.1 0zM29 23.1c0 3.3-2.7 5.9-5.9 5.9H8.9C5.6 29 3 26.4 3 23.1V8.9C3 5.6 5.6 3 8.9 3h14.2C26.4 3 29 5.6 29 8.9v14.2zM16 7.5c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5zm0 14c-3 0-5.5-2.5-5.5-5.5s2.5-5.5 5.5-5.5 5.5 2.5 5.5 5.5-2.5 5.5-5.5 5.5zM26.5 7.3c0 1-.8 1.9-1.9 1.9-1 0-1.9-.8-1.9-1.9s.8-1.9 1.9-1.9c1 .1 1.9.9 1.9 1.9z"
      />
    </symbol>
    <symbol id="8002_youtube" viewBox="0 0 32 32">
      <path
        fill="currentColor"
        d="M12.7 20.1v-9l8.6 4.5-8.6 4.5zm19-10.5s-.3-2.2-1.3-3.2c-1.2-1.3-2.6-1.3-3.2-1.4-4.5-.3-11.2-.3-11.2-.3s-6.7 0-11.2.3c-.6.1-2 .1-3.2 1.4C.6 7.4.3 9.6.3 9.6S0 12.2 0 14.8v2.4c0 2.6.3 5.2.3 5.2s.3 2.2 1.3 3.2c1.2 1.3 2.8 1.2 3.5 1.4 2.6.2 10.9.2 10.9.2s6.7 0 11.2-.3c.6-.1 2-.1 3.2-1.4 1-1 1.3-3.2 1.3-3.2s.3-2.6.3-5.2v-2.4c0-2.5-.3-5.1-.3-5.1"
      />
    </symbol>
    <symbol id="8017_snapchat" viewBox="0 0 32 32">
      <path
        d="M16.328.714h.003c1.396 0 6.121.389 8.35 5.385.721 1.619.616 4.076.488 6.144.081-.031.17-.068.265-.113a2.415 2.415 0 0 1 1.008-.213c.356 0 .71.07.964.178.956.338 1.584 1.122 1.6 1.996.015.717-.35 1.722-2.165 2.44a8.441 8.441 0 0 1-.498.17c-.23.072-.812.257-1.015.424.011.048.037.13.095.248l.023.047.014.032c.016.039 1.684 3.838 5.202 4.418a1.648 1.648 0 0 1 1.377 1.723c-.013.218-.064.43-.148.624-.436 1.02-1.671 1.66-4.085 2.1l-.004.017c-.056.254-.113.504-.19.765-.226.776-.87 1.257-1.712 1.257-.236 0-.522-.033-.874-.103a6.86 6.86 0 0 0-1.399-.15c-.315 0-.644.028-.975.083-.526.087-1.079.478-1.72.931-1.132.801-2.541 1.798-4.705 1.798-.07 0-.14-.002-.21-.004a3.37 3.37 0 0 1-.16.004c-2.163 0-3.572-.996-4.704-1.797-.642-.453-1.196-.845-1.72-.932a6.011 6.011 0 0 0-.976-.083c-.57 0-1.028.09-1.397.162h-.002c-.3.059-.582.114-.874.114-.827 0-1.483-.486-1.712-1.267a11.05 11.05 0 0 1-.19-.772l-.004-.02C1.864 25.88.628 25.238.19 24.21a1.869 1.869 0 0 1-.146-.622 1.644 1.644 0 0 1 1.378-1.719c3.517-.579 5.185-4.379 5.2-4.413l.02-.05.018-.034c.058-.119.084-.2.095-.248-.202-.167-.784-.352-1.019-.426a8.141 8.141 0 0 1-.497-.17c-2.147-.849-2.256-2.091-2.13-2.756.219-1.15 1.425-1.837 2.465-1.837.327 0 .633.065.91.195.166.077.31.133.433.173-.129-2.083-.242-4.57.486-6.203C9.63 1.108 14.347.72 15.737.72l.518-.005h.073Z"
        fill="currentColor"
      />
    </symbol>
    <symbol id="8000_twitter" viewBox="0 0 32 32">
      <path
        fill="currentColor"
        d="M32 6.4c-.9 1.3-2 2.5-3.3 3.4.4 9.2-6.5 19.5-18.7 19.5-3.7 0-7.2-1.1-10.1-2.9 3.5.4 7-.6 9.7-2.7-2.9-.1-5.3-2-6.1-4.6 1 .2 2 .1 3-.1a6.6 6.6 0 01-5.3-6.5c.9.5 1.9.8 3 .8a6.6 6.6 0 01-2-8.8c3.2 4 8.1 6.6 13.5 6.9a6.6 6.6 0 016.4-8.1c1.9 0 3.6.8 4.8 2.1 1.5-.3 2.9-.8 4.2-1.6a6.5 6.5 0 01-2.9 3.6c1.4-.1 2.6-.5 3.8-1z"
      />
    </symbol>
    <symbol id="8001_xing" viewBox="0 0 32 32">
      <path
        fill="currentColor"
        d="M13.9 12.7l-5.5 9.7H1.8l5.5-9.7-3.7-6.4h6.6l3.7 6.4zM30 0h-6.6L12.7 19.1 19.8 32h6.5l-7-12.9L30 0z"
      />
    </symbol>
    <symbol id="8005_linkedin" viewBox="0 0 32 32">
      <path
        fill="currentColor"
        d="M7.8 3.9c0 2.2-1.7 3.9-3.9 3.9A3.8 3.8 0 010 3.9a3.9 3.9 0 017.8 0zM.6 32h6.6V10.7H.6V32zm23.6-22c-4.5 0-6.4 3.5-6.4 3.5v-2.9h-6.3V32h6.3V20.8c0-3 1.4-4.8 4-4.8 2.4 0 3.6 1.7 3.6 4.8V32H32V18.5c0-5.7-3.3-8.5-7.8-8.5z"
      />
    </symbol>
    <symbol id="8008_kununu" viewBox="0 0 32 32">
      <path
        fill="currentColor"
        d="M27.2 26l-.1 5.1c0 .4-.4.8-.8.8h-5c-.5 0-.8-.4-.8-.8v-6.7c0-1.8-1.5-3.2-3.3-3.2h-1.8c-1.8 0-3.3 1.4-3.3 3.2v6.7c0 .4-.4.8-.8.8h-5c-.5 0-.8-.4-.8-.8V.8c-.2-.4.2-.8.7-.8h5c.4 0 .8.4.8.8v14.3c1-.4 2.2-.6 3.3-.6H17c1.8 0 3.3-1.4 3.3-3.2l.1-1.6c.1-.4.4-.7.8-.7h5c.4 0 .8.3.8.7v1.6c0 2.5-1 4.8-2.5 6.5 1.6 1.7 2.6 4 2.6 6.6V26z"
      />
    </symbol>
    <symbol id="2064_arrow-enter" viewBox="0 0 32 32">
      <path
        fill="currentColor"
        d="M32 0v32H13.3v-1.3h17.3V1.3H13.3V0H32zM12.3 9.3h-1.9l6.7 6.7H0v1.3h17.1L10.4 24h1.9l7.3-7.3-7.3-7.4z"
      />
    </symbol>
    <symbol id="pi-home" viewBox="0 0 32 32">
      <path
        fill="currentColor"
        d="M16 .7L0 16h5.3v16h8V21.3h5.3V32h8V16H32L16 .7zm9.3 14v16H20V20h-8V30.6H6.7V14.7H3.4L16 2.5l12.7 12.2h-3.4z"
      />
    </symbol>
    <symbol id="3033_question-mark" viewBox="0 0 32 32">
      <path
        fill="currentColor"
        d="M22.7 10.7c0 3.2-2.7 5-4.7 6.2-.9.6-2 1.3-2 1.8v4h-1.3v-4c0-1.2 1.2-1.9 2.6-2.9 1.9-1.3 4.1-2.7 4.1-5.1 0-2.9-2.4-5.3-5.3-5.3s-5.3 2.4-5.3 5.3H9.3C9.3 7 12.3 4 16 4s6.7 3 6.7 6.7zm-8 17.3H16v-2.7h-1.3V28z"
      />
    </symbol>
    <symbol id="3073_phone" viewBox="0 0 32 32">
      <path
        fill="currentColor"
        d="M5.5 2.1c.1 0 .1 0 0 0 .3 0 .5.1.6.3l2.8 4.8c.1.3.1.6-.1.8L7.2 9.6l-.7.7.5 1c3.4 5.6 8.2 10.4 13.8 13.8l.9.6.7-.8 1.5-1.5c.1-.1.3-.2.5-.2.1 0 .2 0 .3.1l4.8 2.8c.2.1.3.3.3.5s0 .4-.2.6l-2 2-.8.8C13.9 28.6 3.4 18.1 2.2 5.1l.9-.9 2-2c.1 0 .3-.1.4-.1m0-1.3c-.5 0-1 .2-1.4.6l-2 2L.9 4.6v.1c1 14 12.3 25.4 26.4 26.5h.1l1.3-1.3 2-2c.4-.4.7-1.1.6-1.7-.1-.6-.4-1.2-1-1.5l-4.8-2.8c-.3-.2-.7-.3-1-.3-.5 0-1 .2-1.4.6l-1.5 1.5c-5.4-3.3-10-7.9-13.4-13.4L9.7 9c.6-.6.8-1.6.3-2.4L7.3 1.8C7 1.2 6.4.9 5.8.8h-.3z"
      />
    </symbol>
    <symbol id="pi-place" viewBox="0 0 32 32">
      <path
        fill="currentColor"
        d="M16 1.3c5.1 0 9.3 4.2 9.3 9.3 0 1.6-.4 3.3-1.3 4.7l-8.1 14-8-14c-.8-1.4-1.2-3-1.2-4.6 0-5.2 4.2-9.4 9.3-9.4M16 0C10.1 0 5.3 4.8 5.3 10.7c0 1.8.5 3.7 1.4 5.3L16 32l9.2-16c.9-1.6 1.4-3.5 1.4-5.4C26.7 4.8 21.9 0 16 0zm0 8c1.5 0 2.7 1.2 2.7 2.7s-1.2 2.7-2.7 2.7-2.7-1.2-2.7-2.7S14.5 8 16 8m0-1.3c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"
      />
    </symbol>
    <symbol id="pi-letter-parcel" viewBox="0 0 32 32">
      <path
        fill="currentColor"
        d="M20.667 2.667l-4 4h5.867l4-4h-5.867zM22 5.333h-2.133L21.2 4h2.133L22 5.333z"
      />
      <path
        fill="currentColor"
        d="M12.4 0L4 8.4v8.933H0V32h21.333v-4H23.6l8.4-8.4V0H12.4zm6.667 18.667L11.2 26.534a.644.644 0 0 1-.933 0l-8-7.867h16.8zM1.333 19.6L6.4 24.667l-5.067 5.067V19.601zm.934 11.067L7.334 25.6l1.867 1.867c.8.8 2 .8 2.8 0l1.867-1.867 5.067 5.067H2.268zM20 29.733l-5.067-5.067L20 19.599v10.133zm2.667-3.066h-1.333v-9.333h-16v-8h17.333v17.333zM23.067 8h-16.8l6.667-6.667h16.8L23.067 8zm7.6 11.067L24 25.734v-16.8l6.667-6.667v16.8z"
      />
    </symbol>
    <symbol id="pi-login" viewBox="0 0 32 32">
      <path fill="currentColor" d="M13.333 0v1.333h17.333v29.333H13.333v1.333H32v-32z" />
      <path
        fill="currentColor"
        d="M12.267 9.333H10.4L17.067 16H0v1.333h17.067L10.4 24h1.867l7.333-7.333z"
      />
    </symbol>
  </svg>
);
