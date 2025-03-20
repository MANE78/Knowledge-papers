import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ContactScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>اتصل بنا</Text>
        <Text style={styles.body}>
          إذا كانت لديك أي استفسارات أو تعليقات، يرجى التواصل معنا عبر البريد الإلكتروني:
        </Text>
        <TouchableOpacity onPress={() => Linking.openURL(`mailto:info@manaratalmaarefa.com`)}>
          <Text style={styles.email}>info@manaratalmaarefa.com</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'right', marginBottom: 15 },
  body: { fontSize: 16, textAlign: 'right', lineHeight: 24 },
  email: { fontSize: 16, color: '#007AFF', textAlign: 'right', marginTop: 10 }
});