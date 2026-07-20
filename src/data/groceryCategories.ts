export interface GroceryItem {
  id: string;
  name: string;
  description: string;
  image: string;
  details?: string;
}

export interface GroceryCategory {
  id: string;
  title: string; // E.g. CÀ PHÊ
  description: string;
  image: string;
  items: GroceryItem[];
}

export const groceryCategories: GroceryCategory[] = [
  {
    id: 'grocery-coffee',
    title: 'CÀ PHÊ',
    description: 'Hạt cà phê Robusta rang mộc thơm lừng đóng gói túi kraft.',
    image: '/images/grocery/ca-phe-moc.jpg',
    items: [
      {
        id: 'ca-phe-moc-250',
        name: 'Cà Phê Rang Xay Mộc (250g)',
        description: 'Đóng gói túi giấy xi măng thân thiện bảo quản nguyên vị cà phê hạt mộc mạc.',
        image: '/images/grocery/ca-phe-moc.jpg',
        details: 'Được tuyển chọn hạt cà phê chất lượng cao chế biến ướt sấy khô tự nhiên tạo hậu vị ngọt hậu sâu sắc.'
      }
    ]
  },
  {
    id: 'grocery-tea',
    title: 'TRÀ CỔ THỤ',
    description: 'Trà bánh và trà búp Shan Tuyết trứ danh sương mù Tây Bắc.',
    image: '/images/menu/tra-cam-que.jpg',
    items: [
      {
        id: 'tra-shan-tuyet-kho',
        name: 'Hộp Trà Shan Tuyết Búp',
        description: 'Trà lá sao khô nguyên búp tuyết bạc cổ kính giữ hương thanh thoát.',
        image: '/images/menu/tra-cam-que.jpg',
        details: 'Đóng hộp thiếc hoài cổ thích hợp làm quà tặng ý nghĩa.'
      }
    ]
  },
  {
    id: 'grocery-giftset',
    title: 'SET QUÀ TẶNG',
    description: 'Bộ sưu tập quà tặng ý nghĩa chắt chiu tinh túy phong vị xưa.',
    image: '/images/grocery/postcard-ky-uc.jpg',
    items: [
      {
        id: 'postcard-set',
        name: 'Set Bưu Thiếp Ký Ức Hà Nội',
        description: 'Bộ 6 bưu thiếp in màu nước tái hiện nét đẹp xưa cũ phố thị Việt Nam.',
        image: '/images/grocery/postcard-ky-uc.jpg',
        details: 'Thiết kế dập gân cao cấp thích hợp sưu tầm hoặc làm quà tặng bạn bè bốn phương.'
      }
    ]
  },
  {
    id: 'grocery-souvenirs',
    title: 'QUÀ LƯU NIỆM',
    description: 'Kỷ vật cốc tráng men xanh lính, sổ tay bọc chăn con công.',
    image: '/images/grocery/coc-su-men.jpg',
    items: [
      {
        id: 'coc-su-men-mug',
        name: 'Cốc Sắt Tráng Men Cổ Điển',
        description: 'Chiếc cốc sắt tráng men huyền thoại phủ sơn xanh quân đội sờn xước độc đáo.',
        image: '/images/grocery/coc-su-men.jpg',
        details: 'Thân thép tráng men sứ thủ công, giữ nhiệt nhẹ phù hợp thưởng thức cà phê nóng.'
      },
      {
        id: 'so-tay-con-cong-book',
        name: 'Sổ Bọc Vải Chăn Con Công',
        description: 'Bìa sổ bọc vải hoa văn chăn con công đỏ rực rỡ quốc dân.',
        image: '/images/grocery/so-tay-con-cong.jpg',
        details: 'Ruột giấy ngà chống lóa mắt thích hợp để ký họa hay ghi chép nhật ký hành trình.'
      }
    ]
  },
  {
    id: 'grocery-others',
    title: 'KHÁC',
    description: 'Các sản phẩm lưu niệm canvas túi vải, phụ kiện Cộng.',
    image: '/images/grocery/tui-vai-cong.jpg',
    items: [
      {
        id: 'tui-canvas-cong',
        name: 'Túi Vải Tote Canvas Cộng',
        description: 'Túi tote chất liệu canvas dày dặn in lụa logo CỘNG tinh tế.',
        image: '/images/grocery/tui-vai-cong.jpg',
        details: 'Quai đeo thoải mái thích hợp sử dụng hàng ngày bảo vệ môi trường sạch đẹp.'
      },
      {
        id: 'binh-giu-nhiet-army',
        name: 'Bình Giữ Nhiệt Xanh Quân Đội',
        description: 'Bình giữ nhiệt chất liệu inox sơn nhám xanh lính sang trọng.',
        image: '/images/grocery/binh-giu-nhiet.jpg',
        details: 'Hai lớp chân không giữ lạnh và giữ ấm lên đến nhiều giờ liên tục.'
      }
    ]
  }
];
