export default {
  hello: 'سلام {first_name} {last_name}',
  general: {
    yes: 'آره',
    no: 'نه',
    delete: 'حذف',
    delete_all: 'حذف همه',
    confirm: 'تایید',
    cancel: 'لغو',
  },
  auth: {
    heading: 'سلام. خوش اومدی!',
    caption: 'برای استفاده از خدمات وبسایت، لطفا وارد شو.',
    username: 'نام کاربری',
    password: 'رمز عبور',
    forgot_password: 'رمزت یادت رفته؟ :/ ',
    login: 'ورود',
    support: 'پشتیبانی',
    errors: {
      username_empty: 'نام کاربری نمی‌تونه خالی باشه',
      password_empty: 'رمز عبور نمی‌تونه خالی باشه',
    },
  },
  personal_info: {
    student: 'دانشجو',
    fullname: 'نام و نام خانوادگی',
    username: 'نام کاربری',
    national_code: 'کد ملی',
    change_password: 'تغییر رمز عبور',
    button: {
      transaction_history: 'تاریخچه‌ی تراکنشات',
      order_history: 'تاریخچه‌ی سفارشات',
      reservation_history: 'غذاهای رزرو شده',
      support: 'پشتیبانی',
    },
  },
  reset_password: {
    change_password: 'تغییر رمز عبور',
    old_password: 'رمز عبور قبلی',
    new_password: 'رمز عبور جدید',
    confirm_password: 'تکرار رمز عبور',
    errors: {
      password_empty: 'رمز عبور نمی‌تونه خالی باشه',
      password_min: 'رمز عبور نمی‌تونه کمتر از 8 کاراکتر باشه',
      password_max: 'رمز عبور نمی‌تونه بیشتر از 20 کاراکتر باشه',
      confirmation: 'تکرار رمز عبور اشتباهه',
    },
  },
  transaction_history: {
    date: 'تاریخ',
    time: 'ساعت',
    balance: 'موجودی',
    price: 'مبلغ',
    remaining: 'باقی مانده',
    wallet: 'کیف پول',
    increase_balance: 'افزایش موجودی',
    currency_toman: 'تومان',
    filter_date: {
      all: 'همه',
      this_week: 'این هفته',
      specific_date: 'بازه‌ی خاص',
    },
  },
  order_history: {
    order_code: 'کد فیش',
    order_date: 'تاریخ رزرو',
    day: 'روز',
    price: 'مبلغ',
    total_sum: 'جمع کل',
    total_price: 'قابل پرداخت  ',
    currency_toman: 'تومان',
    heading_order_history: 'غذاهایی که تا امروز رزرو کرده بودی',
    heading_reserverd_food: 'غذاهایی که رزرو کردی',
    cancel_reservation: 'لغو رزرو',
  },
} as const;
