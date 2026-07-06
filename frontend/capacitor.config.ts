import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.abhyasengine.app',
  appName: 'Abhyas Engine',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
