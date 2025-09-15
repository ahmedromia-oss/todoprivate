// App.js - This registers your app
import { registerRootComponent } from 'expo';
import { ExpoRoot } from 'expo-router';

function App() {
  const ctx = require.context('./app');
  return <ExpoRoot context={ctx} />;
}

// This is the key line that was missing!
registerRootComponent(App);