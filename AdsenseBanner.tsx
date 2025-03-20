import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

const AdsenseBanner = () => {
  const adHTML = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="margin:0; padding:0;">
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9822291009441043"
         crossorigin="anonymous"></script>
        <!-- Responsive Ad -->
        <ins class="adsbygoogle"
             style="display:inline-block;width:${Math.floor(width)}px;height:100px"
             data-ad-client="ca-pub-9822291009441043"
             data-ad-slot="1234567890"></ins>
        <script>
             (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
      </body>
    </html>
  `;
  return (
    <View style={styles.container}>
      <WebView
        style={styles.webview}
        originWhitelist={['*']}
        source={{ html: adHTML }}
        automaticallyAdjustContentInsets={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    alignSelf: 'center',
    width: width,
    height: 100,
  },
  webview: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});

export default AdsenseBanner;