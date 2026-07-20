export interface MenuItem {
  id: string;
  name: string;
  price?: string;
  description: string;
  image: string;
}

export interface MenuCategory {
  id: string;
  title: string; // E.g. CÀ PHÊ VIỆT NAM
  description: string;
  image: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'vietnamese-coffee',
    title: 'CÀ PHÊ VIỆT NAM',
    description: 'Robusta Buôn Ma Thuột rang xay theo bí quyết thủ công độc đáo.',
    image: '/images/menu/cafe-den.jpg',
    items: [
      {
        id: 'cafe-den',
        name: 'Cà Phê Đen',
        description: 'Vị đắng nguyên bản đậm đà của hạt Robusta rang sẫm màu.',
        image: '/images/menu/cafe-den.jpg'
      },
      {
        id: 'cafe-nau',
        name: 'Cà Phê Nâu (Sữa Đá)',
        description: 'Sự kết hợp giữa vị đắng nồng nàn và ngọt ngào của sữa đặc.',
        image: '/images/menu/cafe-nau.jpg'
      },
      {
        id: 'bac-xiu',
        name: 'Bạc Xỉu',
        description: 'Đặc trưng Sài Gòn xưa, nhiều sữa đá phảng phất hương cà phê.',
        image: '/images/menu/bac-xiu.jpg'
      }
    ]
  },
  {
    id: 'ancient-tea',
    title: 'TRÀ SHAN TUYẾT CỔ THỤ',
    description: 'Lá chè thu hoạch thủ công từ những gốc cổ thụ cổ kính vùng Tây Bắc.',
    image: '/images/menu/tra-cam-que.jpg',
    items: [
      {
        id: 'tra-cam-que',
        name: 'Trà Cam Quế Chi',
        description: 'Trà Shan Tuyết ấm áp, thơm nồng hương quế và cam ngọt.',
        image: '/images/menu/tra-cam-que.jpg'
      },
      {
        id: 'tra-gung',
        name: 'Trà Gừng Mật Ong',
        description: 'Vị gừng già ấm nồng kết hợp mật ong tự nhiên ngọt dịu.',
        image: '/images/menu/tra-gung.jpg'
      }
    ]
  },
  {
    id: 'cong-specialties',
    title: 'ĐẶC SẢN CỘNG',
    description: 'Thức uống dừa đá xay mát lạnh trứ danh tạo nên thương hiệu Cộng.',
    image: '/images/menu/cafe-cot-dua.jpg',
    items: [
      {
        id: 'cafe-cot-dua',
        name: 'Cà Phê Cốt Dừa',
        description: 'Cốt dừa đá xay ngọt ngào béo ngậy rót thêm espresso đậm đà.',
        image: '/images/menu/cafe-cot-dua.jpg'
      },
      {
        id: 'cot-dua-cacao',
        name: 'Cốt Dừa Cacao',
        description: 'Vị đắng thơm béo đặc trưng của cacao nguyên chất hòa cùng cốt dừa đá xay.',
        image: '/images/menu/cot-dua-cacao.jpg'
      },
      {
        id: 'cot-dua-com-xanh',
        name: 'Cốt Dừa Cốm Xanh',
        description: 'Sự kết hợp thơm mát dẻo bùi của cốm non Hà Nội và cốt dừa xay mịn.',
        image: '/images/menu/cot-dua-com-xanh.jpg'
      }
    ]
  },
  {
    id: 'fresh-fruits',
    title: 'TRÁI CÂY TƯƠI TRẺ',
    description: 'Nguồn nước ép quả tươi nguyên bản thanh nhiệt, bổ dưỡng.',
    image: '/images/menu/tra-chanh-tuyet.jpg',
    items: [
      {
        id: 'tra-chanh-tuyet',
        name: 'Trà Chanh Tuyết',
        description: 'Vị trà cổ thụ kết hợp chanh tươi tuyết xay mát lạnh.',
        image: '/images/menu/tra-chanh-tuyet.jpg'
      }
    ]
  },
  {
    id: 'local-beverages',
    title: 'ĐỒ ĐỊA PHƯƠNG',
    description: 'Thức uống truyền thống quen thuộc lưu giữ phong vị quê nhà.',
    image: '/images/menu/phin-coffee-group.jpg',
    items: [
      {
        id: 'me-da',
        name: 'Nước Đá Mẹ',
        description: 'Nước đá chua ngọt mát lạnh thân thương ngày hè.',
        image: '/images/menu/phin-coffee-group.jpg'
      }
    ]
  }
];
