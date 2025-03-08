import type { Translation } from "../types/i18n"

// The Arabic font 'Noto Kufi Arabic' is already imported in index.css
// We'll ensure it's applied to Arabic text via the font-arabic class

export const ar: Translation = {
  navbar: {
    home: "الرئيسية",
    about: "من نحن",
    services: "الخدمات",
    partners: "الشركاء",
    contact: "اتصل بنا",
    founder: "المؤسس",
  },
  hero: {
    slogan: ["تأمين", "تقييم", "إستشارة"],
    cta: "اكتشف المزيد",
  },
  about: {
    title: "حول أمان",
    description:
      "تُعد أمان شركة ناشئة مبتكرة في مجال الأمن السيبراني بالجزائر، يقودها فريق من الخبراء المتحمسين والباحثين والاستشاريين. نعتمد على أساليب عمل مرنة وتقنيات حديثة لإحداث تحول جذري في الأمن الرقمي داخل الجزائر وخارجها",
    points: {
      consult: {
        title: "1. إستشارة",
        description: "التواصل مع العملاء لفهم تحدياتهم الأمنية الخاصة وتقديم المشورة المتخصصة.",
      },
      assess: {
        title: "2. تقييم",
        description: "إجراء تقييمات دقيقة للثغرات الأمنية لتحديد نقاط الضعف والتنبؤ بالتهديدات الناشئة.",
      },
      secure: {
        title: "3. تأمين",
        description: "تطبيق حلول أمنية قوية ومُخصصة لحماية البيانات الحساسة وبناء قدرة طويلة الأمد على مواجهة التحديات.",
      },
    },
  },
  services: {
    title: "الخدمات",
    list: [
      {
        title: "اختبار الاختراق",
        description: "تقييم شامل لأمان أنظمتك",
      },
      {
        title: "أمان السحابة",
        description: "تأمين البنية التحتية والتطبيقات السحابية",
      },
      {
        title: "تطوير الويب الآمن",
        description: "بناء تطبيقات ويب آمنة وقوية",
      },
      {
        title: "استخبارات التهديدات السيبرانية",
        description: "البقاء متقدمًا على التهديدات السيبرانية الناشئة",
      },
    ],
  },
  partners: {
    title: "الشركاء",
  },
  contact: {
    title: "اتصل بنا",
    form: {
      name: "الاسم",
      email: "البريد الإلكتروني",
      message: "الرسالة",
      submit: "إرسال الرسالة",
    },
  },
  founder: {
    title: "المؤسس",
  },
}

