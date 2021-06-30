# HowHouse，最優質的訂房網站

![image](https://user-images.githubusercontent.com/5466631/123921492-a1b36d80-d9b9-11eb-8e2d-48d139c1c99d.png)

## 作品介紹

HowHouse，為旅人提供優質的住宿休息選擇

- 首頁
  - 使用者可以看房間列表
  - 可以選擇下訂的房型、時間（超過 90 天、已無空房的日期不可選）
- 房間細節頁
  - 使用者可以看房間細節（包含行事曆假日、非假日價錢）
  - 可以選擇下訂的房型、時間
- 下訂單頁
  - 使用者可以確認房間時間、價錢等訊息
  - 使用者可以下訂單
- 下訂成功頁
  - 可以確認下訂成功的資訊

## 使用技術

- 切板相關
  - SCSS
  - tailwind
- 框架相關
  - vue 2.6
  - vue router
  - vuex
  - nuxt
- 套件使用
  - axios
  - moment
  - vue2-datepicker
  - vuex-map-fields
- 程式碼風格管理
  - ESLint
  - Prettier
  - StyleLint
- 上板相關
  - Github git service
  - vercel

## 環境建構

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## 其他

本網站採用 [The F2E - 前端修練精神時光屋](https://challenge.thef2e.com) 活動釋出的設計稿

- [w6-hotel 設計稿](https://xd.adobe.com/spec/8384ecea-5384-44d2-72a7-94d9b883504d-f5b5/screen/3ee8c726-cbff-4e09-8311-5e1c88525d4a/main-mockup-navbar-fixed)

後端 API，除了用該活動平台提供的 API（取得房間資訊、訂單資訊，以及能送出與刪除訂單）、以及行事曆的公開資料

- [The F2E - 前端修練精神時光屋 | 第六關 - 旅館預約服務 資訊說明](https://challenge.thef2e.com/news/17)
- [臺北市資料大平臺](https://data.taipei/#/dataset/detail?id=c30ca421-d935-4faa-b523-9c175c8de738)

  - [taiwan-holiday.js/opendata-tw.js at master · ensky/taiwan-holiday.js](https://github.com/ensky/taiwan-holiday.js/blob/master/lib/opendata-tw.js)

更多細節，請看 wiki

- [Home · ayugioh2003/how-house Wiki](https://github.com/ayugioh2003/how-house/wiki)
