import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DeveloperScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>عن المطور</Text>
        <Image 
          source={{ uri: 'https://api.a0.dev/assets/image?text=professional%20arab%20developer%20portrait&aspect=1:1' }} 
          style={styles.image}
        />
        <Text style={styles.name}>محمد خيري</Text>
        <Text style={styles.subtitle}>مطور ومؤسس منارة المعرفة</Text>
        <Text style={styles.bio}>
          محمد خيري هو مطور برمجيات مبدع ذو رؤية فريدة، يمتلك خبرة تزيد عن عشر سنوات في تطوير المواقع والتطبيقات. يمتاز بشغفه لنشر المعرفة وتطوير المحتوى العربي الرقمي، وقد حصل على عدة جوائز تقديرية في مجال الابتكار التقني.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { padding: 20, alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'right', alignSelf: 'stretch', marginBottom: 15 },
  image: { width: 120, height: 120, borderRadius: 60, marginBottom: 15 },
  name: { fontSize: 22, fontWeight: 'bold', color: '#2C3E50', marginBottom: 5, textAlign: 'center' },
  subtitle: { fontSize: 16, color: '#7F8C8D', marginBottom: 10, textAlign: 'center' },
  bio: { fontSize: 16, textAlign: 'right', lineHeight: 24 }
});