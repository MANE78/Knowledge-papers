import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  Image, 
  TouchableOpacity, 
  Dimensions, 
  TextInput, 
  ScrollView 
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const blogPosts = [
  // Nature category (5 articles)
  {
    id: '1',
    title: 'سحر الطبيعة في جبال الألب',
    description: 'رحلة استكشافية في قلب جبال الألب الساحرة وحياتها البرية المتنوعة',
    image: 'https://api.a0.dev/assets/image?text=majestic%20alps%20mountains%20with%20wildlife&aspect=16:9',
    category: 'طبيعة',
    likes: 324,
    comments: 45,
    author: 'سارة الأحمد',
    readTime: '7 دقائق'
  },
  {
    id: '2',
    title: 'أسرار الغابات الاستوائية',
    description: 'استكشف كنوز الطبيعة المخبأة وسط ظلال الغابات الاستوائية الكثيفة',
    image: 'https://api.a0.dev/assets/image?text=tropical%20rainforest%20adventure&aspect=16:9',
    category: 'طبيعة',
    likes: 289,
    comments: 39,
    author: 'أمل الرحاب',
    readTime: '6 دقائق'
  },
  {
    id: '3',
    title: 'بحيرات طبيعية خلابة',
    description: 'جمال لا يوصف لطبيعة البحيرات الصافية المحاطة بالجبال',
    image: 'https://api.a0.dev/assets/image?text=serene%20lakes%20in%20mountains&aspect=16:9',
    category: 'طبيعة',
    likes: 415,
    comments: 52,
    author: 'فاطمة المنصف',
    readTime: '8 دقائق'
  },
  {
    id: '4',
    title: 'سهول ووديان خضراء',
    description: 'رحلة بين السهول الواسعة والوديان العميقة التي تحكي قصة الأرض',
    image: 'https://api.a0.dev/assets/image?text=green%20meadows%20and%20valleys&aspect=16:9',
    category: 'طبيعة',
    likes: 370,
    comments: 48,
    author: 'مازن السالم',
    readTime: '7 دقائق'
  },
  {
    id: '5',
    title: 'صخور وتكوينات طبيعية مدهشة',
    description: 'استمتع بالمشاهد الطبيعية الفريدة التي أبدعتها قوى الطبيعة عبر الزمن',
    image: 'https://api.a0.dev/assets/image?text=amazing%20natural%20rock%20formations&aspect=16:9',
    category: 'طبيعة',
    likes: 298,
    comments: 33,
    author: 'سعاد الهادي',
    readTime: '5 دقائق'
  },
  // Food category (5 articles)
  {
    id: '6',
    title: 'المطبخ الشامي الأصيل',
    description: 'أسرار وتقنيات الطبخ الشامي التقليدي مع وصفات حصرية متوارثة',
    image: 'https://api.a0.dev/assets/image?text=traditional%20syrian%20cuisine%20and%20dishes&aspect=16:9',
    category: 'طعام',
    likes: 542,
    comments: 89,
    author: 'محمد الشيف',
    readTime: '10 دقائق'
  },
  {
    id: '7',
    title: 'رحلة إلى مطبخ بغداد',
    description: 'تعرّف على النكهات الغنية للمطبخ العراقي المميز وتعاليمه الشرقية',
    image: 'https://api.a0.dev/assets/image?text=baghdad%20food%20delights&aspect=16:9',
    category: 'طعام',
    likes: 460,
    comments: 76,
    author: 'ليلى الطباخة',
    readTime: '8 دقائق'
  },
  {
    id: '8',
    title: 'أطباق مصرية تقليدية',
    description: 'استكشف أشهر الأطباق المصرية التي تجمع بين البساطة والغنى بالنكهات',
    image: 'https://api.a0.dev/assets/image?text=egyptian%20traditional%20dishes&aspect=16:9',
    category: 'طعام',
    likes: 512,
    comments: 82,
    author: 'عمرو الشيف',
    readTime: '9 دقائق'
  },
  {
    id: '9',
    title: 'المطبخ الخليجي الراقي',
    description: 'تذوّق روائع المطبخ الخليجي مع لمسة عصرية تجمع بين التقليد والابتكار',
    image: 'https://api.a0.dev/assets/image?text=gulf%20cuisine%20modern&aspect=16:9',
    category: 'طعام',
    likes: 480,
    comments: 70,
    author: 'فاطمة المطهرة',
    readTime: '7 دقائق'
  },
  {
    id: '10',
    title: 'أسرار تحضير الحلاوة العربية',
    description: 'دليل شامل لتحضير أشهى الحلويات العربية التقليدية بمذاق لا يقاوم',
    image: 'https://api.a0.dev/assets/image?text=arabic%20sweets%20delicious&aspect=16:9',
    category: 'طعام',
    likes: 530,
    comments: 65,
    author: 'خالد الحلواني',
    readTime: '6 دقائق'
  },
  // Technology category (5 articles)
  {
    id: '11',
    title: 'ثورة الذكاء الاصطناعي',
    description: 'كيف يغير الذكاء الاصطناعي حياتنا اليومية وآفاق المستقبل',
    image: 'https://api.a0.dev/assets/image?text=artificial%20intelligence%20future%20technology&aspect=16:9',
    category: 'تكنولوجيا',
    likes: 892,
    comments: 156,
    author: 'د. أحمد التقني',
    readTime: '5 دقائق'
  },
  {
    id: '12',
    title: 'مستقبل الاتصالات اللاسلكية',
    description: 'استكشاف أحدث التطورات في تكنولوجيا الاتصالات وتأثيرها على عالمنا الحديث',
    image: 'https://api.a0.dev/assets/image?text=future%20wireless%20communications&aspect=16:9',
    category: 'تكنولوجيا',
    likes: 750,
    comments: 120,
    author: 'سامي التقني',
    readTime: '7 دقائق'
  },
  {
    id: '13',
    title: 'الابتكار في عالم الحوسبة السحابية',
    description: 'كيف تُحدث تقنيات الحوسبة السحابية ثورة في مجال التكنولوجيا والأعمال',
    image: 'https://api.a0.dev/assets/image?text=cloud%20computing%20innovation&aspect=16:9',
    category: 'تكنولوجيا',
    likes: 680,
    comments: 110,
    author: 'رانيا المهندسة',
    readTime: '6 دقائق'
  },
  {
    id: '14',
    title: 'تحديات الأمن السيبراني في العصر الحديث',
    description: 'دراسة معمقة لأحدث التهديدات وأساليب حماية البيانات في عالم متصل',
    image: 'https://api.a0.dev/assets/image?text=cybersecurity%20challenges&aspect=16:9',
    category: 'تكنولوجيا',
    likes: 830,
    comments: 132,
    author: 'أيمن الحارس',
    readTime: '8 دقائق'
  },
  {
    id: '15',
    title: 'تطور تقنيات الواقع الافتراضي والمعزز',
    description: 'كيف تغير تقنيات الواقع الافتراضي والمعزز طريقة تفاعلنا مع العالم الرقمي',
    image: 'https://api.a0.dev/assets/image?text=virtual%20and%20augmented%20reality&aspect=16:9',
    category: 'تكنولوجيا',
    likes: 790,
    comments: 125,
    author: 'ليلى الرقمية',
    readTime: '7 دقائق'
  },
  // Culture category (5 articles)
  {
    id: '16',
    title: 'روائع الخط العربي',
    description: 'رحلة في جماليات الخط العربي وأسراره عبر العصور',
    image: 'https://api.a0.dev/assets/image?text=arabic%20calligraphy%20art&aspect=16:9',
    category: 'ثقافة',
    likes: 423,
    comments: 67,
    author: 'ليلى الفنانة',
    readTime: '8 دقائق'
  },
  {
    id: '17',
    title: 'الفنون الشعبية والتراث',
    description: 'استعراض لمظاهر الفنون الشعبية التراثية وروح الأصالة العربية',
    image: 'https://api.a0.dev/assets/image?text=folklore%20and%20traditional%20arts&aspect=16:9',
    category: 'ثقافة',
    likes: 510,
    comments: 80,
    author: 'سعيد التراث',
    readTime: '7 دقائق'
  },
  {
    id: '18',
    title: 'الموسيقى العربية الأصيلة',
    description: 'قصص وألحان تعكس تاريخ الموسيقى العربية وأدبها الشعري',
    image: 'https://api.a0.dev/assets/image?text=authentic%20arabic%20music&aspect=16:9',
    category: 'ثقافة',
    likes: 480,
    comments: 75,
    author: 'حسين الصوت',
    readTime: '6 دقائق'
  },
  {
    id: '19',
    title: 'عالم السينما العربية',
    description: 'استعراض لأبرز الأفلام والنجوم الذين أثروا في تاريخ السينما العربية',
    image: 'https://api.a0.dev/assets/image?text=arabic%20cinema%20highlights&aspect=16:9',
    category: 'ثقافة',
    likes: 530,
    comments: 88,
    author: 'منى الممثلة',
    readTime: '8 دقائق'
  },
  {
    id: '20',
    title: 'المعارض الفنية والمهرجانات الثقافية',
    description: 'تغطية شاملة لأحدث المعارض الفنية والمهرجانات التي تحتفي بالثقافة العربية',
    image: 'https://api.a0.dev/assets/image?text=art%20exhibitions%20and%20cultural%20festivals&aspect=16:9',
    category: 'ثقافة',
    likes: 470,
    comments: 70,
    author: 'عماد الفنون',
    readTime: '7 دقائق'
  }
];

const BlogCard = ({ title, description, image, category, likes, comments, author, readTime, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
    <Image source={{ uri: image }} style={styles.cardImage} />
    <View style={styles.cardContent}>
      <View style={styles.topRow}>
        <View style={styles.categoryContainer}>
          <Text style={styles.category}>{category}</Text>
        </View>
        <Text style={styles.readTime}>{readTime}</Text>
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.bottomRow}>
        <View style={styles.authorContainer}>
          <Image 
            source={{ uri: `https://api.a0.dev/assets/image?text=profile%20${author}&aspect=1:1` }} 
            style={styles.authorImage} 
          />
          <Text style={styles.authorName}>{author}</Text>
        </View>
        <View style={styles.statsContainer}>
          <TouchableOpacity style={styles.statItem}>
            <FontAwesome name="heart" size={16} color="#FF4444" />
            <Text style={styles.statText}>{likes}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.statItem}>
            <FontAwesome name="comment" size={16} color="#666" />
            <Text style={styles.statText}>{comments}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.statItem}>
            <FontAwesome name="share" size={16} color="#666" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

export default function HomeScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('الكل');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  const categories = ['الكل', 'طبيعة', 'طعام', 'تكنولوجيا', 'ثقافة'];

  useEffect(() => {
    const filtered = blogPosts.filter(post => {
      const matchesSearch = post.title.includes(searchQuery) || 
                          post.description.includes(searchQuery);
      const matchesCategory = selectedCategory === 'الكل' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
    setFilteredPosts(filtered);
  }, [searchQuery, selectedCategory]);

  const renderItem = ({ item }) => (
    <BlogCard
      {...item}
      onPress={() => navigation.navigate('BlogDetail', { post: item })}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>المدونة العربية</Text>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="ابحث عن مقالات..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor="#999"
          />
          <FontAwesome name="search" size={20} color="#666" style={styles.searchIcon} />
        </View>
      </View>
      
      <View style={styles.categoriesContainer}>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesList}
        >
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              style={[
                styles.categoryButton,
                selectedCategory === category && styles.categoryButtonActive
              ]}
              onPress={() => setSelectedCategory(category)}
            >
              <Text style={[
                styles.categoryButtonText,
                selectedCategory === category && styles.categoryButtonTextActive
              ]}>
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <FlatList
        data={filteredPosts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'right',
    color: '#333',
    marginBottom: 15,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 45,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    textAlign: 'right',
    marginRight: 10,
    color: '#333',
  },
  searchIcon: {
    marginLeft: 10,
  },
  categoriesContainer: {
    backgroundColor: '#fff',
    paddingVertical: 10,
  },
  categoriesList: {
    paddingHorizontal: 15,
  },
  categoryButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    marginHorizontal: 5,
  },
  categoryButtonActive: {
    backgroundColor: '#007AFF',
  },
  categoryButtonText: {
    fontSize: 14,
    color: '#666',
  },
  categoryButtonTextActive: {
    color: '#fff',
  },
  listContainer: {
    padding: 16,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    marginBottom: 20,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  cardImage: {
    width: '100%',
    height: 200,
  },
  cardContent: {
    padding: 16,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  categoryContainer: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },
  category: {
    color: '#666',
    fontSize: 14,
    fontWeight: '500',
  },
  readTime: {
    color: '#666',
    fontSize: 14,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
    textAlign: 'right',
  },
  description: {
    fontSize: 15,
    color: '#666',
    lineHeight: 22,
    textAlign: 'right',
    marginBottom: 12,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginLeft: 8,
  },
  authorName: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
  },
  statText: {
    marginLeft: 5,
    color: '#666',
    fontSize: 14,
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'right',
    color: '#333',
  },
  listContainer: {
    padding: 16,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    marginBottom: 20,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardImage: {
    width: '100%',
    height: 200,
  },
  cardContent: {
    padding: 15,
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
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
    textAlign: 'right',
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    textAlign: 'right',
  },
});