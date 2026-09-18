export type Category = {
  slug: string;
  name: string;
  english: string;
  blurb: string;
};

export type Author = {
  id: string;
  name: string;
  role: string;
  bio: string;
};

export type Article = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  subcategory: string;
  authorId: string;
  publishedAt: string;
  image: string;
  imageAlt: string;
  source: string;
  tags: string[];
  readingTime: string;
  status: 'preview' | 'published';
  body: string[];
};

export const site = {
  name: 'Today Khabar',
  nepaliName: 'आजको खबर',
  tagline: 'आजको खबर, आजै',
  description: 'नेपाल र विश्वका महत्वपूर्ण विषयमा स्पष्ट, जिम्मेवार र सन्दर्भयुक्त समाचार।',
  url: 'https://todaykhabar.example',
  email: 'hello@todaykhabar.example',
  social: { facebook: 'https://www.facebook.com/profile.php?id=61594425535890', youtube: '', instagram: 'https://www.instagram.com/today.khabar.np/', tiktok: '', x: '' },
};

export const categories: Category[] = [
  { slug: 'national', name: 'राष्ट्रिय', english: 'National', blurb: 'नेपालभित्रका महत्वपूर्ण घटनाक्रम र सार्वजनिक सरोकारका विषय।' },
  { slug: 'politics', name: 'राजनीति', english: 'Politics', blurb: 'नीति, शासन र लोकतान्त्रिक प्रक्रियामाथि केन्द्रित समाचार।' },
  { slug: 'business', name: 'अर्थतन्त्र', english: 'Business', blurb: 'बजार, व्यवसाय, रोजगारी र आर्थिक नीतिका अपडेट।' },
  { slug: 'technology', name: 'प्रविधि', english: 'Technology', blurb: 'डिजिटल जीवन, नवप्रवर्तन र टेक उद्योगका कथा।' },
  { slug: 'sports', name: 'खेलकुद', english: 'Sports', blurb: 'खेल, खेलाडी र प्रतियोगिताका महत्वपूर्ण क्षण।' },
  { slug: 'entertainment', name: 'मनोरञ्जन', english: 'Entertainment', blurb: 'सिनेमा, संगीत, कला र सिर्जनशील संसार।' },
  { slug: 'world', name: 'विश्व', english: 'World', blurb: 'नेपाल बाहिरका घटनाले हाम्रो संसारमा पार्ने प्रभाव।' },
  { slug: 'health', name: 'स्वास्थ्य', english: 'Health', blurb: 'स्वास्थ्य, विज्ञान र जनजीवनसँग जोडिएका उपयोगी सामग्री।' },
  { slug: 'education', name: 'शिक्षा', english: 'Education', blurb: 'शिक्षा, सीप र सिकाइका नयाँ बहसहरू।' },
  { slug: 'lifestyle', name: 'जीवनशैली', english: 'Lifestyle', blurb: 'दैनिक जीवनलाई अर्थपूर्ण बनाउने विचार र अभ्यास।' },
  { slug: 'opinion', name: 'विचार', english: 'Opinion', blurb: 'स्पष्ट रूपमा छुट्याइएका विचार, विश्लेषण र टिप्पणी।' },
];

export const authors: Author[] = [
  { id: 'editorial-desk', name: 'सम्पादकीय डेस्क', role: 'Editorial Desk', bio: 'यो डेमो संस्करणका लागि संरचना र नमुना सामग्री व्यवस्थापन गर्ने डेस्क। वास्तविक प्रकाशनमा लेखक विवरण र स्रोत प्रमाणीकरण थपिनेछ।' },
  { id: 'newsroom', name: 'न्युजरुम', role: 'Newsroom', bio: 'Today Khabar को समाचार डेस्क। प्रकाशित सामग्रीमा सम्बन्धित स्रोत र अपडेट समय स्पष्ट रूपमा उल्लेख गरिनेछ।' },
];

export const tickerItems = [
  { label: 'SAMPLE BREAKING', title: 'Sample alert: newsroom verification workflow is ready for launch.' },
  { label: 'SAMPLE UPDATE', title: 'Sample alert: Today Khabar expands its bilingual digital desk.' },
  { label: 'SAMPLE NEWS', title: 'Sample alert: reader-first reporting standards published for review.' },
];

const cityImage = 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1400&q=85';
const deskImage = 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=80';
const techImage = 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80';
const cultureImage = 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80';

export const articles: Article[] = [
  { id: 'preview-001', slug: 'responsible-newsroom-preview', title: 'विश्वसनीय समाचारका लागि नयाँ सम्पादकीय अभ्यास', excerpt: 'स्रोत, सन्दर्भ र पारदर्शितालाई केन्द्रमा राखेर डिजिटल समाचार कक्ष कसरी तयार हुन्छ भन्नेबारे नमुना सम्पादकीय सामग्री।', category: 'national', subcategory: 'सम्पादकीय अभ्यास', authorId: 'editorial-desk', publishedAt: '2026-09-18', image: cityImage, imageAlt: 'काठमाडौँ उपत्यकाको दृश्य', source: 'प्रकाशनपूर्व नमुना सामग्री', tags: ['सम्पादकीय', 'मिडिया', 'विश्वसनीयता'], readingTime: '४ मिनेट', status: 'preview', body: ['यो पृष्ठ Today Khabar को सार्वजनिक वेबसाइट संरचना प्रदर्शन गर्न तयार गरिएको प्रकाशनपूर्व नमुना हो। यसलाई वास्तविक समाचारका रूपमा उद्धृत गर्नु हुँदैन।', 'वास्तविक प्रकाशनमा समाचार कक्षले प्राथमिक स्रोत, आधिकारिक अभिलेख र सम्बन्धित पक्षको भनाइ जाँच गर्नेछ। प्रत्येक सामग्रीमा प्रकाशन मिति, लेखक, स्रोत र आवश्यक परे सुधार सूचना राखिनेछ।'] },
  { id: 'preview-002', slug: 'how-to-read-digital-news', title: 'डिजिटल समाचार पढ्दा ध्यान दिनुपर्ने पाँच कुरा', excerpt: 'शीर्षकभन्दा बाहिर गएर स्रोत, मिति र सन्दर्भ जाँच गर्ने सरल तरिका।', category: 'education', subcategory: 'मिडिया साक्षरता', authorId: 'newsroom', publishedAt: '2026-09-18', image: deskImage, imageAlt: 'नोटबुक र समाचारपत्र भएको डेस्क', source: 'प्रकाशनपूर्व नमुना सामग्री', tags: ['मिडिया साक्षरता', 'शिक्षा'], readingTime: '३ मिनेट', status: 'preview', body: ['यो डेमो सामग्रीले पाठकलाई समाचार बुझ्ने तरिका देखाउने उद्देश्य राख्छ। वास्तविक समाचारमा यहाँ प्रमाणित विवरण, उद्धृत स्रोत र सम्पादकीय सन्दर्भ रहनेछ।', 'कुनै सामग्री पढ्दा शीर्षक, प्रकाशन मिति, लेखक र स्रोतलाई सँगै हेर्नुहोस्। पुरानो सामग्रीलाई नयाँ घटनासँग नझुक्किनुहोस्।'] },
  { id: 'preview-003', slug: 'technology-and-everyday-life', title: 'प्रविधिले दैनिक जीवनलाई सरल बनाउने सम्भावना', excerpt: 'स्थानीय समस्या समाधानमा डिजिटल उपकरण र जिम्मेवार नवप्रवर्तनको भूमिका।', category: 'technology', subcategory: 'डिजिटल जीवन', authorId: 'editorial-desk', publishedAt: '2026-09-18', image: techImage, imageAlt: 'सर्किट बोर्ड र प्रविधिको विवरण', source: 'प्रकाशनपूर्व नमुना सामग्री', tags: ['प्रविधि', 'नवप्रवर्तन'], readingTime: '५ मिनेट', status: 'preview', body: ['यो सामग्री उत्पादनमा जानुअघि हुने सम्पादकीय प्रस्तुतीकरणको नमुना हो। तथ्य, तथ्याङ्क र व्यक्तिका भनाइ प्रकाशित गर्नुअघि प्रमाणीकरण आवश्यक हुन्छ।', 'Today Khabar को प्रविधि डेस्कले उपयोगिता, पहुँच र डिजिटल सुरक्षालाई सँगै हेर्नेछ।'] },
  { id: 'preview-004', slug: 'culture-nepal-creative-economy', title: 'सिर्जनशील उद्योग र नयाँ पुस्ताको सांस्कृतिक संवाद', excerpt: 'कला, सिनेमा र सिर्जनशील कामले समाजमा बनाउने नयाँ संवादमाथि एक नमुना विश्लेषण।', category: 'entertainment', subcategory: 'कला र संस्कृति', authorId: 'newsroom', publishedAt: '2026-09-18', image: cultureImage, imageAlt: 'सिनेमा हलको पर्दा', source: 'प्रकाशनपूर्व नमुना सामग्री', tags: ['कला', 'संस्कृति', 'मनोरञ्जन'], readingTime: '६ मिनेट', status: 'preview', body: ['यो प्रकाशनपूर्व नमुना विश्लेषण हो, कुनै वास्तविक कलाकार वा घटनासँग सम्बन्धित दाबी होइन। वास्तविक संस्करणमा सम्बन्धित स्रोत, अन्तर्वार्ता र अभिलेख जोडिनेछ।', 'सिर्जनशील उद्योगबारे लेख्दा योगदान, श्रम र विविध आवाजलाई सम्मान गर्ने सम्पादकीय नीति अपनाइनेछ।'] },
];

export function getCategory(slug: string) { return categories.find((category) => category.slug === slug); }
export function getAuthor(id: string) { return authors.find((author) => author.id === id) ?? authors[0]; }
export function getArticle(slug: string) { return articles.find((article) => article.slug === slug); }
export function categoryArticles(slug: string) { return articles.filter((article) => article.category === slug); }
export function formatDate(date: string) { return new Intl.DateTimeFormat('ne-NP', { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(date)); }
