import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function PrivacyScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>سياسة الخصوصية</Text>
        <Text style={styles.body}>
          هذه هي سياسة الخصوصية الخاصة بموقع منارة المعرفة. نحن نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'right', marginBottom: 15 },
  body: { fontSize: 16, textAlign: 'right', lineHeight: 24 }
});