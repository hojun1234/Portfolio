import React from 'react';

import Lottie from 'react-lottie-player';

import lottieJson from '/public/About.json';

export default function About() {
  return <Lottie loop animationData={lottieJson} play />;
}
