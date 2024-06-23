
import Card from "./Card";

const Restaurant = () => {
  const resto = {
    img: "https://food-cms.grab.com/compressed_webp/merchants/3-C6LJT3J3CBBAC2/hero/54dc7816a17a4673ac5c3348b5dc75cb_1715066804297370214.webp",
    title: "ปิ้งย่าง​24ช.ม. - ศาลปกครอง ชุมแพ",
    type: "อาหารตามสั่ง",
  };
  const resto2 = {
    img: "https://food-cms.grab.com/compressed_webp/merchants/3-C6CGT74TNU2VEE/hero/f38fe9d17c5347909fbbe7382d7364e0_1711092412603294087.webp",
    title: "แรดตำ - นางรอง",
    type: "อาหารตามสั่ง",
  };
  const resto3 = {
    img: "https://food-cms.grab.com/compressed_webp/merchants/3-C2NCTEB3EACVNJ/hero/470f2f221eff48e2aa56cd5c90e96ea8_1618546203528209183.webp",
    title: "ครัวคุณหญิงแชบตามสั่ง -มาบตาพุด",
    type: "อาหารตามสั่ง",
  };
  const resto4 = {
    img: "https://food-cms.grab.com/compressed_webp/merchants/3-C22KGX5BGAXBWA/hero/6ea14004a4074f68964a000f3ab11ebf_1630988621702295480.webp",
    title: "Jason Bourn - kitchen",
    type: "พิซซ่า",
  };
  const resto5 = {
    img: "https://food-cms.grab.com/compressed_webp/merchants/3-C2KKJ4MEV8CFVJ/hero/a43630020ac6410db199ee69e6f31dcd_1613369539685271848.webp",
    title: "Mamuang Cafe - ถนนนครสวรรค์",
    type: "ชา กาแฟ",
  };
  const resto6 = {
    img: "https://food-cms.grab.com/compressed_webp/merchants/3-C6ATTTUFUB23V2/hero/201b92b3a528457c9121481a99752338_1711897203170731647.webp",
    title: "Kamu Tea (คามุ ที) - ศาลเจ้าพ่อเสือ",
    type: "ชานมไข่มุก",
  };
  
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <Card img={resto.img} title={resto.title} type={resto.type} />
      <Card img={resto2.img} title={resto2.title} type={resto2.type} />
      <Card img={resto3.img} title={resto3.title} type={resto3.type} />
      <Card img={resto4.img} title={resto4.title} type={resto4.type} />
      <Card img={resto5.img} title={resto5.title} type={resto5.type} />
      <Card img={resto6.img} title={resto6.title} type={resto6.type} />
    </div>
  );
};

export default Restaurant;
