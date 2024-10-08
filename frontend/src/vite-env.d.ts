declare module 'vanta/dist/vanta.globe.min' {
    import { Vanta } from 'vanta';
  
    export default function VANTA_GLOBE(options: {
      el: HTMLElement;
      mouseControls?: boolean;
      touchControls?: boolean;
      gyroControls?: boolean;
      minHeight?: number;
      minWidth?: number;
      scale?: number;
      scaleMobile?: number;
      backgroundColor?: number;
      color1?: number;
      color2?: number;
      colorMode?: string;
      speedLimit?: number;
      cohesion?: number;
      // Add other options as needed
    }): Vanta;
  }
  