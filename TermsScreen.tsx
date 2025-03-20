import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TermsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>شروط الاستخدام</Text>
        <Text style={styles.body}>
          هذه هي شروط الاستخدام الخاصة بموقع منارة المعرفة. باستخدام هذا الموقع، فإنك توافق على الالتزام بكافة الشروط والأحكام.
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