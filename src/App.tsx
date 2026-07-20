import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { GrocerySection } from './components/GrocerySection';
import { GallerySection } from './components/GallerySection';
import { StoreSection } from './components/StoreSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-cong-ivoryWhite">
      {/* Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-grow pt-0 animate-fadeIn">
        {/* 1. Hero Section (Video Banner) */}
        <Hero />

        {/* 2. Thực Đơn Cộng (5 groups) */}
        <MenuSection />

        {/* 3. Góc Tạp Hoá (5 categories) */}
        <GrocerySection />

        {/* 4. Gallery Không Gian */}
        <GallerySection />

        {/* 5. Hệ thống cửa hàng + Google Maps */}
        <StoreSection />

        {/* Final CTA Section */}
        <FinalCTA />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
