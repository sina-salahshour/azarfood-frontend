import type { OrderHistoryDto } from './dtos/order-history.dto';

export const orderHistoryMock: OrderHistoryDto[] = [
  {
    id: '1',
    date: '2024-09-20',
    total_cost: '185000',
    status: 'delivered',
    meal: 'lunch',
    orderProducts: [
      { name: 'چلو کباب کوبیده', count: 2, cost: '120000' },
      { name: 'سالاد شیرازی', count: 1, cost: '35000' },
      { name: 'دوغ', count: 2, cost: '30000' },
    ],
  },
  {
    id: '2',
    date: '2024-09-19',
    total_cost: '210000',
    status: 'canceled',
    meal: 'dinner',
    orderProducts: [
      { name: 'قرمه سبزی', count: 3, cost: '150000' },
      { name: 'ماست موسیر', count: 2, cost: '40000' },
      { name: 'نوشابه', count: 1, cost: '20000' },
    ],
  },
  {
    id: '3',
    date: '2024-09-18',
    total_cost: '165000',
    status: 'delivered',
    meal: 'lunch',
    orderProducts: [
      { name: 'جوجه کباب', count: 2, cost: '130000' },
      { name: 'زیتون پرورده', count: 1, cost: '35000' },
    ],
  },
  {
    id: '4',
    date: '2024-09-17',
    total_cost: '195000',
    status: 'delivered',
    meal: 'dinner',
    orderProducts: [
      { name: 'فسنجان', count: 2, cost: '140000' },
      { name: 'ترشی مخلوط', count: 1, cost: '25000' },
      { name: 'دلستر', count: 2, cost: '30000' },
    ],
  },
  {
    id: '5',
    date: '2024-09-16',
    total_cost: '220000',
    status: 'canceled',
    meal: 'lunch',
    orderProducts: [
      { name: 'باقالی پلو با گوشت', count: 2, cost: '180000' },
      { name: 'ماست و خیار', count: 2, cost: '40000' },
    ],
  },
  {
    id: '6',
    date: '2024-09-15',
    total_cost: '175000',
    status: 'delivered',
    meal: 'dinner',
    orderProducts: [
      { name: 'کشک بادمجان', count: 2, cost: '110000' },
      { name: 'نان سنگک', count: 2, cost: '30000' },
      { name: 'آب معدنی', count: 1, cost: '35000' },
    ],
  },
  {
    id: '7',
    date: '2024-09-14',
    total_cost: '230000',
    status: 'delivered',
    meal: 'lunch',
    orderProducts: [
      { name: 'زرشک پلو با مرغ', count: 3, cost: '180000' },
      { name: 'سوپ جو', count: 2, cost: '50000' },
    ],
  },
  {
    id: '8',
    date: '2024-09-13',
    total_cost: '200000',
    status: 'canceled',
    meal: 'dinner',
    orderProducts: [
      { name: 'میرزا قاسمی', count: 2, cost: '100000' },
      { name: 'کوکو سبزی', count: 2, cost: '80000' },
      { name: 'شربت آلبالو', count: 1, cost: '20000' },
    ],
  },
  {
    id: '9',
    date: '2024-09-12',
    total_cost: '190000',
    status: 'delivered',
    meal: 'lunch',
    orderProducts: [
      { name: 'خورشت قیمه', count: 2, cost: '130000' },
      { name: 'سالاد فصل', count: 2, cost: '40000' },
      { name: 'نوشابه', count: 1, cost: '20000' },
    ],
  },
  {
    id: '10',
    date: '2024-09-11',
    total_cost: '240000',
    status: 'delivered',
    meal: 'dinner',
    orderProducts: [
      { name: 'ته چین مرغ', count: 2, cost: '160000' },
      { name: 'بورانی اسفناج', count: 1, cost: '50000' },
      { name: 'دوغ', count: 2, cost: '30000' },
    ],
  },
  {
    id: '11',
    date: '2024-09-10',
    total_cost: '205000',
    status: 'canceled',
    meal: 'lunch',
    orderProducts: [
      { name: 'کباب برگ', count: 2, cost: '160000' },
      { name: 'ماست موسیر', count: 1, cost: '25000' },
      { name: 'دلستر', count: 1, cost: '20000' },
    ],
  },
  {
    id: '12',
    date: '2024-09-09',
    total_cost: '180000',
    status: 'delivered',
    meal: 'dinner',
    orderProducts: [
      { name: 'عدس پلو', count: 2, cost: '100000' },
      { name: 'کشک بادمجان', count: 1, cost: '60000' },
      { name: 'دوغ', count: 1, cost: '20000' },
    ],
  },
  {
    id: '13',
    date: '2024-09-08',
    total_cost: '215000',
    status: 'delivered',
    meal: 'lunch',
    orderProducts: [
      { name: 'چلو خورشت سبزی', count: 2, cost: '140000' },
      { name: 'ساالاد اولویه', count: 1, cost: '55000' },
      { name: 'نوشابه', count: 1, cost: '20000' },
    ],
  },
  {
    id: '14',
    date: '2024-09-07',
    total_cost: '195000',
    status: 'canceled',
    meal: 'dinner',
    orderProducts: [
      { name: 'کوفته تبریزی', count: 2, cost: '130000' },
      { name: 'ماست و خیار', count: 1, cost: '25000' },
      { name: 'آب معدنی', count: 2, cost: '40000' },
    ],
  },
  {
    id: '15',
    date: '2024-09-06',
    total_cost: '225000',
    status: 'delivered',
    meal: 'lunch',
    orderProducts: [
      { name: 'چلو کباب بختیاری', count: 2, cost: '180000' },
      { name: 'سالاد فصل', count: 1, cost: '25000' },
      { name: 'دوغ', count: 1, cost: '20000' },
    ],
  },
  {
    id: '16',
    date: '2024-09-05',
    total_cost: '170000',
    status: 'delivered',
    meal: 'dinner',
    orderProducts: [
      { name: 'آش رشته', count: 2, cost: '100000' },
      { name: 'کوکو سیب زمینی', count: 2, cost: '70000' },
    ],
  },
  {
    id: '17',
    date: '2024-09-04',
    total_cost: '235000',
    status: 'canceled',
    meal: 'lunch',
    orderProducts: [
      { name: 'چلو ماهی', count: 2, cost: '180000' },
      { name: 'سالاد سزار', count: 1, cost: '55000' },
    ],
  },
  {
    id: '18',
    date: '2024-09-03',
    total_cost: '200000',
    status: 'delivered',
    meal: 'dinner',
    orderProducts: [
      { name: 'دلمه برگ مو', count: 2, cost: '140000' },
      { name: 'ماست چکیده', count: 1, cost: '40000' },
      { name: 'دلستر', count: 1, cost: '20000' },
    ],
  },
  {
    id: '19',
    date: '2024-09-02',
    total_cost: '210000',
    status: 'delivered',
    meal: 'lunch',
    orderProducts: [
      { name: 'لوبیا پلو', count: 2, cost: '120000' },
      { name: 'زیتون پرورده', count: 1, cost: '50000' },
      { name: 'دوغ', count: 2, cost: '40000' },
    ],
  },
  {
    id: '20',
    date: '2024-09-01',
    total_cost: '245000',
    status: 'canceled',
    meal: 'dinner',
    orderProducts: [
      { name: 'شیشلیک', count: 2, cost: '200000' },
      { name: 'سالاد شیرازی', count: 1, cost: '25000' },
      { name: 'نوشابه', count: 1, cost: '20000' },
    ],
  },
];
