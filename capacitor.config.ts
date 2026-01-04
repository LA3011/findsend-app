import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'findsend',
  webDir: 'www',
  plugins: {
    StatusBar: {
      backgroundColor: "#0000",
      style: "DARK",
      overlaysWebView: false
    },
    SplashScreen: {
      launchAutoHide: true,
      launchShowDuration: 0, 
      splashImmersive: true,
    },
  }
};

export default config;
