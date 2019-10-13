import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure()
    .useReactNative()
    .connect({
      enabled: true,
      host: '192.168.0.12', // server ip
      port: 9090,
    });

  console.tron = tron;

  tron.clear();
}
