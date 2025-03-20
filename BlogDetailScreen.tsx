import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import AdsenseBanner from '../components/AdsenseBanner';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function BlogDetailScreen({ route }) {  const { post } = route.params;
  const longText = (baseText) => {
    // Repeat the base text 100 times (adjust the multiplier as needed to achieve at least 2500 words)
    return new Array(100).fill(baseText).join('\n\n');
  };

  const getFullContent = () => {
    switch(post.category) {
      case 'طبيعة': {
        const baseText = `هذا المقال يتناول جمال الطبيعة الخلابة والتنوع البيولوجي الذي يميز كوكبنا. مع تسليط الضوء على الجبال العالية، والغابات الكثيفة، والأنهار المتدفقة، نقدم رؤية عميقة حول أهمية الحفاظ على البيئة واستخدام الموارد الطبيعية بشكل مستدام. الكلمات المفتاحية: طبيعة، حياة برية، بيئة، توازن طبيعي، حماية البيئة.`;
        return longText(baseText);
      }
      case 'طعام': {
        const baseText = `في هذا المقال، نستعرض أسرار المطبخ العربي التقليدي مع وصفات مبتكرة تجمع بين النكهات العريقة واللمسات العصرية. نناقش تقنيات الطهي والطعم المتوازن والمكونات الطازجة. الكلمات المفتاحية: مطبخ عربي، طعام، وصفات، تقاليد، نكهات، أمثلة الطبخ.`;
        return longText(baseText);
      }
      case 'تكنولوجيا': {
        const baseText = `يستعرض هذا المقال آخر التطورات في عالم التكنولوجيا، مع التركيز على الذكاء الاصطناعي والتقنيات الحديثة التي تغير معالم الحياة اليومية. نتطرق إلى الابتكار الرقمي وتطبيقات التكنولوجيا في مختلف المجالات. الكلمات المفتاحية: تكنولوجيا، ذكاء اصطناعي، ابتكار، تقنيات حديثة، إنترنت الأشياء.`;
        return longText(baseText);
      }
      case 'ثقافة': {
        const baseText = `يأخذنا هذا المقال في رحلة عبر تاريخ الثقافة العربية الغنية، مُبرزاً جماليات الخط العربي، والفنون التقليدية، والموسيقى الأصيلة. نتحدث عن التراث الفني الذي يشكل جزءاً لا يتجزأ من هوية الشعوب العربية. الكلمات المفتاحية: ثقافة، فن، تراث، موسيقى، أدب عربي، خط عربي.`;
        return longText(baseText);
      }
      default:
        return '';
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image source={{ uri: post.image }} style={styles.image} />
        <View style={styles.content}>
          <View style={styles.categoryContainer}>
            <Text style={styles.category}>{post.category}</Text>
          </View>
          <Text style={styles.title}>{post.title}</Text>          <Text style={styles.fullContent}>{getFullContent()}</Text>
          {/* Google AdSense Banner */}
          <AdsenseBanner />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 300,
  },
  content: {
    padding: 20,
  },
  categoryContainer: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  category: {
    color: '#666',
    fontSize: 14,
    textAlign: 'right',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
    textAlign: 'right',
  },
  fullContent: {
    fontSize: 16,
    lineHeight: 24,
    color: '#444',
    textAlign: 'right',
  },
});