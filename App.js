import * as React from "react";
import { StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";
import { Camera, CameraType } from "expo-camera";

export default function App() {
  const [hasPermission, setHasPermission] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      console.log(status);
      setHasPermission(status === "granted");
    })();
  }, []);
  return (
    <WebView
      style={styles.container}
      source={{
        uri: "https://mgjb5hzl-5500.brs.devtunnels.ms/test.html",
      }}
      originWhitelist={["*"]}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      startInLoadingState={true}
      allowFileAccess={true}
      scalesPageToFit={true}
      onNavigationStateChange={() => {}}
      mediaPlaybackRequiresUserAction={false}
      mediaCapturePermissionGrantType="grantIfSameHostElsePrompt"
    />
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },
});
