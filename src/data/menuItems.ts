import type { MenuGroup } from '../types';

export const menuGroups: MenuGroup[] = [
  {
    id: 'phin-coffee',
    title: 'Cà Phê Phin Truyền Thống',
    description: 'Được chắt lọc từ những hạt cà phê Robusta hảo hạng của cao nguyên Việt Nam, rang xay mộc mạc theo phương pháp thủ công lâu đời, mang lại hương vị đậm đà truyền thống khó phai.',
    image: '/images/menu/phin-coffee-group.jpg',
    items: [
      {
        id: 'cafe-den',
        name: 'Cà Phê Đen',
        price: '35.000đ',
        description: 'Vị đắng nguyên bản đậm chất hạt Robusta rang đậm, mang lại sự tỉnh táo tức thì cho buổi sáng năng động.',
        image: '/images/menu/cafe-den.jpg'
      },
      {
        id: 'cafe-nau',
        name: 'Cà Phê Nâu (Sữa Đá)',
        price: '39.000đ',
        description: 'Sự kết hợp hoàn hảo giữa vị đắng đậm đà của cà phê phin và độ ngọt ngào béo ngậy của sữa đặc ông Thọ.',
        image: '/images/menu/cafe-nau.jpg'
      },
      {
        id: 'bac-xiu',
        name: 'Bạc Xỉu',
        price: '39.000đ',
        description: 'Món nước quen thuộc của Sài Gòn xưa, nhiều sữa ít cà phê, dịu ngọt dễ uống nhưng vẫn phảng phất hương thơm nồng.',
        image: '/images/menu/bac-xiu.jpg'
      }
    ]
  },
  {
    id: 'coconut-coffee',
    title: 'Thức Uống Từ Cốt Dừa',
    description: 'Dòng sản phẩm sáng tạo trứ danh của Cộng Cà Phê, kết hợp tinh tế giữa cốt dừa đá xay béo ngậy thơm nồng và các hương vị truyền thống Việt Nam.',
    image: '/images/menu/coconut-group.jpg',
    items: [
      {
        id: 'cafe-cot-dua',
        name: 'Cà Phê Cốt Dừa',
        price: '59.000đ',
        description: 'Signature của Cộng. Cà phê phin truyền thống hòa quyện cùng cốt dừa đá xay ngọt ngào, mát lạnh, thơm bùi.',
        image: '/images/menu/cafe-cot-dua.jpg'
      },
      {
        id: 'cot-dua-cacao',
        name: 'Cốt Dừa Cacao',
        price: '59.000đ',
        description: 'Dành cho những tín đồ yêu thích vị ngọt ngào. Cacao nguyên chất hòa quyện đậm đà cùng đá xay cốt dừa béo ngậy.',
        image: '/images/menu/cot-dua-cacao.jpg'
      },
      {
        id: 'cot-dua-com-xanh',
        name: 'Cốt Dừa Cốm Xanh',
        price: '65.000đ',
        description: 'Hương vị mùa thu Hà Nội gói gọn trong một ly nước. Cốm non dẻo bùi hòa cùng cốt dừa đá xay mát rượi.',
        image: '/images/menu/cot-dua-com-xanh.jpg'
      }
    ]
  },
  {
    id: 'shan-tea',
    title: 'Trà Shan Tuyết Cổ Thụ',
    description: 'Thu hoạch từ những cây chè cổ thụ hàng trăm năm tuổi tại vùng núi cao Tây Bắc quanh năm sương phủ, mang lại vị thanh khiết ấm nồng.',
    image: '/images/menu/shan-tea-group.jpg',
    items: [
      {
        id: 'tra-cam-que',
        name: 'Trà Cam Quế',
        price: '45.000đ',
        description: 'Tách trà ấm áp tỏa hương thơm nồng của quế chi, vị ngọt thanh của cam vàng, giúp thư thái tinh thần hiệu quả.',
        image: '/images/menu/tra-cam-que.jpg'
      },
      {
        id: 'tra-gung',
        name: 'Trà Gừng Mật Ong',
        price: '42.000đ',
        description: 'Vị gừng già cay nồng ấm áp kết hợp mật ong ngọt dịu, thích hợp cho những chiều mưa se lạnh.',
        image: '/images/menu/tra-gung.jpg'
      },
      {
        id: 'tra-chanh-tuyet',
        name: 'Trà Chanh Tuyết',
        price: '45.000đ',
        description: 'Trà Shan Tuyết kết hợp chanh tươi xay nhuyễn tuyết mát lạnh, thanh nhiệt giải độc, sảng khoái ngày hè.',
        image: '/images/menu/tra-chanh-tuyet.jpg'
      }
    ]
  }
];
