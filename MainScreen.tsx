import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  Image, 
  TouchableOpacity,
  Dimensions 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';

const MainScreen = ({ navigation }) => {
  const featuredCategories = [
    {
      id: '1',
      title: 'العلوم والتكنولوجيا',
      icon: 'microchip',
      color: '#4A90E2',
      count: 45
    },
    {
      id: '2',
      title: 'الأدب والثقافة',
      icon: 'book',
      color: '#D35400',
      count: 38
    },
    {
      id: '3',
      title: 'الصحة والطب',
      icon: 'heartbeat',
      color: '#27AE60',
      count: 29
    },
    {
      id: '4',
      title: 'الفن والإبداع',
      icon: 'paint-brush',
      color: '#8E44AD',
      count: 33
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.logoText}>منارة المعرفة</Text>
          <Text style={styles.slogan}>نافذتك إلى عالم المعرفة والإبداع</Text>
        </View>

        {/* Hero Section */}
        <View style={styles.heroSection}>
          <Image 
            source={{ uri: 'https://api.a0.dev/assets/image?text=knowledge%20and%20learning%20arabic%20library&aspect=16:9' }}
            style={styles.heroImage}
          />
          <View style={styles.heroContent}>
            <Text style={styles.heroTitle}>اكتشف عالماً من المعرفة</Text>
            <Text style={styles.heroDescription}>
              منصة عربية رائدة تجمع بين المحتوى الهادف والتصميم العصري
            </Text>
            <TouchableOpacity 
              style={styles.heroButton}
              onPress={() => navigation.navigate('Articles')}
            >
              <Text style={styles.heroButtonText}>استكشف المقالات</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Categories Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>الأقسام الرئيسية</Text>
          <View style={styles.categoriesGrid}>
            {featuredCategories.map((category) => (
              <TouchableOpacity 
                key={category.id}
                style={styles.categoryCard}
                onPress={() => navigation.navigate('Articles', { category: category.title })}
              >
                <View style={[styles.categoryIcon, { backgroundColor: category.color }]}>
                  <FontAwesome name={category.icon} size={24} color="white" />
                </View>
                <Text style={styles.categoryTitle}>{category.title}</Text>
                <Text style={styles.categoryCount}>{category.count} مقال</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Developer Section */}
        <View style={styles.developerSection}>
          <Image 
            source={{ uri: 'https://api.a0.dev/assets/image?text=professional%20arab%20developer%20portrait&aspect=1:1' }}
            style={styles.developerImage}
          />
          <View style={styles.developerInfo}>
            <Text style={styles.developerName}>محمد خيري</Text>
            <Text style={styles.developerTitle}>مطور ومؤسس منارة المعرفة</Text>
            <Text style={styles.developerBio}>
              مطور برمجيات متميز بخبرة تمتد لأكثر من عشر سنوات في تطوير المواقع والتطبيقات. 
              شغوف بنشر المعرفة وتطوير المحتوى العربي الرقمي. 
              حاصل على العديد من الجوائز في مجال التطوير والابتكار التقني.
            </Text>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <View style={styles.footerLinks}>
            <TouchableOpacity onPress={() => navigation.navigate('Privacy')}>
              <Text style={styles.footerLink}>سياسة الخصوصية</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Terms')}>
              <Text style={styles.footerLink}>شروط الاستخدام</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
              <Text style={styles.footerLink}>اتصل بنا</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.copyright}>
            جميع الحقوق محفوظة © 2025 منارة المعرفة
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logoText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 5,
  },
  slogan: {
    fontSize: 16,
    color: '#7F8C8D',
    textAlign: 'center',
  },
  heroSection: {
    marginBottom: 30,
  },
  heroImage: {
    width: '100%',
    height: 250,
  },
  heroContent: {
    padding: 20,
    backgroundColor: 'rgba(44, 62, 80, 0.9)',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'right',
    marginBottom: 10,
  },
  heroDescription: {
    fontSize: 16,
    color: '#ECF0F1',
    textAlign: 'right',
    marginBottom: 15,
  },
  heroButton: {
    backgroundColor: '#E74C3C',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    alignSelf: 'flex-end',
  },
  heroButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  sectionContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2C3E50',
    textAlign: 'right',
    marginBottom: 20,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: '48%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    alignItems: 'center',
  },
  categoryIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 5,
  },
  categoryCount: {
    fontSize: 14,
    color: '#7F8C8D',
  },
  developerSection: {
    padding: 20,
    backgroundColor: '#F8F9FA',
    marginTop: 20,
  },
  developerImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: 'center',
    marginBottom: 15,
  },
  developerInfo: {
    alignItems: 'center',
  },
  developerName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 5,
  },
  developerTitle: {
    fontSize: 16,
    color: '#7F8C8D',
    marginBottom: 10,
  },
  developerBio: {
    fontSize: 15,
    color: '#34495E',
    textAlign: 'center',
    lineHeight: 22,
  },
  footer: {
    padding: 20,
    backgroundColor: '#2C3E50',
    marginTop: 30,
  },
  footerLinks: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15,
  },
  footerLink: {
    color: '#ECF0F1',
    marginHorizontal: 15,
    fontSize: 14,
  },
  copyright: {
    color: '#BDC3C7',
    textAlign: 'center',
    fontSize: 12,
  },
});

export default MainScreen;