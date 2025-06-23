// Make sure PreparationData is exported from the module, or adjust the import to match the actual export


import type { PreparationData } from "../types/preperationTypes";


// If the export is named differently, for example 'IPreparationData', use:
// import type { IPreparationData as PreparationData } from "../types/preperationTypes";

export const prepationsData: PreparationData = {
  work_and_study: {
    title: "Work and Study: Hem Çalışın Hem Eğitim Alın",
    idTag: "#overview",
    description:
      "Globalleşen dünyada eğitim ve iş deneyimi kazanmak, kişisel ve profesyonel gelişiminiz için büyük önem taşıyor. **Work and Study programları**, öğrencilere yurtdışında eğitim alırken aynı zamanda çalışarak gelir elde etme fırsatı sunar. Bu programlar, öğrencilere eğitim hayatlarını sürdürülebilir kılma ve aynı zamanda iş deneyimi kazanma imkânı verir. Özellikle finansal olarak bağımsız olmak ve kariyer yolunda önemli bir adım atmak isteyen öğrenciler için oldukça cazip fırsatlar sunar.",

    sub_desc:
      "Bu yazıda, **Work and Study programlarının** ne olduğunu, nasıl başvurulacağını, avantajlarını, vize sürecini ve daha fazlasını öğreneceksiniz.",
    sections: {
      definition: {
        title: "Work and Study Programları Nedir?",
        idTag: "#definition",
        description:
          "**Work and Study programları**, öğrencilere yurtdışında eğitim aldıkları dönemde aynı zamanda part-time veya tam zamanlı çalışarak gelir elde etme imkânı sunan eğitim programlarıdır. Bu programlar genellikle **yurtdışında üniversite eğitimi** alırken veya dil kurslarına katılırken uygulanabilir. Öğrenciler, çalışma izinleri sayesinde eğitim aldıkları ülkede yasal olarak çalışabilir ve yaşam masraflarını karşılamak için gelir elde edebilirler.",
        sub_desc:
          "**Work and Study** programları, öğrencilerin kariyerlerini erken yaşta şekillendirmelerine yardımcı olurken, finansal özgürlük kazanmalarını sağlar. Aynı zamanda kültürel deneyimler edinmeleri ve yabancı dil becerilerini geliştirmeleri için harika bir fırsattır.",
      },
      advantages: {
        title: "Work and Study Programlarının Avantajları",
        idTag: "#advantages",
        list: [
          {
            title: "Finansal Destek",
            description:
              "Work and Study programlarının en büyük avantajlarından biri, öğrencilerin eğitim sırasında finansal olarak bağımsız olmalarına yardımcı olmaktır. Çalışarak kazanılan gelir, öğrencilerin yaşam giderlerini karşılamalarına yardımcı olur ve eğitimlerini sürdürebilmeleri için ekstra finansal yükten kurtulmalarını sağlar.",
          },
          {
            title: "Kariyer Deneyimi",
            description:
              "Work and Study programları, öğrencilere farklı iş alanlarında pratik deneyim kazandırır. Bu programlar, öğrencilerin gelecekteki kariyerlerine yön verecek deneyimler edinmelerini sağlar. Çalışma deneyimi, CV'nizi güçlendirir ve mezuniyet sonrası iş bulma sürecinizi hızlandırabilir.",
          },
          {
            title: "Kültürel Deneyim",
            description:
              "Yurtdışında eğitim almak, aynı zamanda farklı bir kültürü tanıma fırsatıdır. Work and Study programlarına katılan öğrenciler, yalnızca çalıştıkları işyerlerinde değil, aynı zamanda toplumsal yaşamda da farklı bir kültürle tanışır ve sosyal becerilerini geliştirir.",
          },
          {
            title: "Yabancı Dil Gelişimi",
            description:
              "Çalışırken, özellikle yerel işyerlerinde dil becerilerinizi geliştirebilirsiniz. Eğer eğitim aldığınız ülkenin dilini öğrenmek istiyorsanız, günlük yaşamda ve iş ortamında bu dili kullanmak, dil becerilerinizi hızla geliştirmenize yardımcı olacaktır.",
          },
          {
            title: "Bağımsızlık ve Sorumluluk",
            description:
              "Work and Study programları, öğrencilerin bağımsızlıklarını artırır. Kendi kazançlarını elde etme ve çalışma sorumluluğu, öğrencilerin kişisel gelişimlerine önemli katkılarda bulunur.",
          },
        ],
      },
      requirements: {
        title: "Work and Study Programlarına Katılmak İçin Gereken Şartlar",
        idTag: "#requirements",
        description:
          "Work and Study programlarına katılmak için çeşitli şartlar bulunmaktadır. Bu şartlar, eğitim aldığınız ülkeye ve programın türüne göre değişiklik gösterebilir. Ancak genel olarak aranan başlıca gereklilikler şunlardır:",
        list: [
          {
            title: "Öğrenci Vizesi ve Çalışma İzni",
            description:
              "Çoğu ülke, Work and Study programlarına katılacak öğrencilerden, geçerli bir öğrenci vizesine sahip olmalarını ister. Öğrencilerin vize başvurusunda, eğitim kurumlarıyla yapılan anlaşmalar ve çalışma izinleri de göz önünde bulundurulur. Çalışma izni, öğrencilere belirli saatlerde çalışma hakkı tanır.",
          },
          {
            title: "Eğitim Durumu",
            description:
              "Work and Study programlarına başvurmak için, öğrencilerin kayıtlı oldukları bir eğitim kurumunda aktif öğrenci olmaları gerekmektedir. Lisans veya yüksek lisans öğrencileri, dil okulları gibi kısa süreli eğitim programlarına katılan öğrenciler de bu programlardan yararlanabilir.",
          },
          {
            title: "Dil Yeterliliği",
            description:
              "Çoğu Work and Study programı, öğrencilere çalışma ve eğitim fırsatları sunarken, genellikle o ülkenin dilini belirli bir seviyede bilmenizi ister. Dil yeterliliği, öğrencinin programa başvurduğu ülkenin dilinde iletişim kurmasını sağlayacak şekilde değerlendirilir.",
          },
          {
            title: "Finansal Durum",
            description:
              "Bazı ülkeler, öğrencilerin belirli bir miktar finansal kaynağa sahip olduklarını belgelemelerini isteyebilir. Bu, öğrencinin yaşam masraflarını karşılayabilmesi için gereklidir.",
          },
        ],
      },
      countries: {
        title: "Work and Study Programlarına Katılabileceğiniz Ülkelerr",
        idTag: "#countries",
        description:
          "Birçok ülke, öğrencilere Work and Study programları sunmaktadır. En popüler **Work and Study programları** sunan ülkelerden bazıları şunlardır:",
        list: [
          {
            title: "Amerika Birleşik Devletleri",
            description:
              "Amerika, Work and Study programları konusunda oldukça geniş bir yelpazeye sahiptir. F-1 öğrenci vizesi ile Amerika’da eğitim alırken haftada 20 saate kadar çalışabilirsiniz. Amerika’daki üniversiteler ve dil okulları, Work and Study programları sunmaktadır.",
          },
          {
            title: "Kanada",
            description:
              "Kanada, öğrencilere eğitim sırasında çalışma fırsatı sunan ülkelerden biridir. Kanada’da öğrenci vizesi ile çalışma izni almak mümkündür ve bu izinle haftada 20 saat çalışabilirsiniz.",
          },
          {
            title: "Avustralya",
            description:
              "Avustralya, öğrencilere hem eğitim hem de çalışma fırsatları sunar. Eğitim alırken haftada 40 saate kadar çalışmak mümkündür. Avustralya’daki üniversiteler ve dil okulları, Work and Study programlarına katılmak isteyen öğrencilere çeşitli seçenekler sunar.",
          },
          {
            title: "İngiltere",
            description:
              "İngiltere’de öğrenci vizesi ile Work and Study programına katılmak mümkündür. Öğrenciler, haftada 20 saate kadar çalışabilirler. İngiltere'deki üniversiteler, öğrencilere birçok çalışma ve eğitim fırsatı sunar.",
          },
        ],
      },
      support: {
        title:
          "Smyrna Edu Danışmanlık: Work and Study Programlarına Başvuru ve Destek Hizmetleri",
        idTag: "#support",
        description:
          "Smyrna Edu, Work and Study programları hakkında size rehberlik etmek için profesyonel danışmanlık hizmetleri sunmaktadır. Eğitim alırken aynı zamanda çalışarak deneyim kazanmak, finansal özgürlüğünüzü sağlamak ve dünya çapında kariyer fırsatları yaratmak için doğru programı seçmek önemlidir. Bizimle, başvuru sürecinden, vize işlemlerine, konaklama düzenlemelerinden, çalışma izni alımına kadar her aşamada profesyonel destek alabilirsiniz.",
        sub_desc: "Sunmuş olduğumuz hizmetler şunlardır:",
        list: [
          {
            title: "Work and Study Programı Seçimi",
          },
          {
            title: "Başvuru Belgelerinin Hazırlanması",
          },
          {
            title: "Vize Başvurusu ve Çalışma İzni Rehberliği",
          },
          {
            title: "Kariyer Danışmanlığı ve İş İmkanları",
          },
          {
            title: "Dil Yeterlilik Desteği",
          },
          {
            title: "Konaklama ve Ulaşım Yardımlarıı",
          },
          {
            title: "Burs ve Finansal Destek İmkanları",
          },
        ],
      },
    },
    sub_desc_alt:
      "Work and Study hem eğitim hem de iş deneyimi kazanarak kariyerinize sağlam bir temel atmanıza olanak tanır. Smyrna Edu olarak, bu süreçte size rehberlik etmek için buradayız.",
  },
  pathway_programs: {
    title: "Pathway Programları: Yurtdışında Eğitim İçin İlk Adım",
    idTag: "#pathway-programs",
    description:
      "Eğitim hayatınızı yurtdışında sürdürmeyi düşünüyorsanız, dil bariyerleri veya akademik gereklilikler gibi zorluklarla karşılaşabilirsiniz. Pathway programları, özellikle yurtdışında lisans veya yüksek lisans eğitimi almak isteyen öğrenciler için mükemmel bir başlangıç noktasıdır. Bu programlar, öğrencilere üniversiteye girişte karşılaştıkları zorlukları aşma ve başarılı bir eğitim hayatı için gerekli hazırlıkları yapma fırsatı sunar.",
    sub_desc:
      "Bu yazıda, Pathway programlarının ne olduğunu, nasıl başvurulacağı, avantajları ve hangi ülkelerde yaygın olarak bulunduğu gibi önemli bilgileri bulabilirsiniz.",
    sections: {
      definition: {
        title: "Pathway Programları Nedir?",
        idTag: "#definition",
        description:
          "Pathway programları, öğrencilerin belirli bir eğitim seviyesine ulaşmaları için gerekli olan beceri ve bilgi birikimini kazandıran önceden hazırlık programlarıdır. Bu programlar, genellikle üniversiteye girmeden önce veya dil becerilerinde eksiklikleri olan öğrenciler için tasarlanmıştır. Pathway programları, öğrencilerin akademik eğitimlerini sürdürebilmeleri için gereken dil seviyesine ulaşmalarını veya temel dersleri tamamlamalarını sağlar.",
        sub_desc:
          "Örneğin, bir öğrenci İngilizce seviyesini yeterince geliştirememişse, İngilizce Pathway programı ile dil becerilerini geliştirip ardından lisans veya yüksek lisans eğitimine başlayabilir. Benzer şekilde, bir öğrenci lisans programına kabul için gerekli olan akademik bilgiyi edinmemişse, Akademik Pathway programları bu eksikliği giderir.",
      },
      advantages: {
        title: "Pathway Programlarının Avantajları",
        idTag: "#advantages",
        list: [
          {
            title: " Dil Yeterliliği Geliştirme",
            description:
              "Yurtdışında eğitim almak isteyen öğrencilerin, genellikle başvurdukları üniversite için yeterli dil becerisine sahip olmaları gerekir. İngilizce Pathway programları, öğrencilerin dil seviyelerini geliştirmelerine yardımcı olarak, üniversiteye başvurmadan önce gerekli dil yeterlilik şartlarını yerine getirmelerini sağlar. Bu, özellikle İngilizce konuşulan ülkelere eğitim almak isteyen öğrenciler için büyük bir avantajdır.",
          },
          {
            title: "Akademik Hazırlık",
            description:
              "Bazı öğrenciler, yurtdışındaki üniversitelerin akademik gerekliliklerini karşılamakta zorlanabilir. Akademik Pathway programları, öğrencilerin belirli bir alanda akademik yeterlilik kazanmalarını sağlar. Bu programlar, genellikle üniversitenin sunduğu derslerin temelini atar ve öğrencilere yüksek lisans veya lisans eğitimi için gerekli bilgi ve becerileri kazandırır.",
          },
          {
            title: "Kültürel Uyum Sağlama",
            description:
              "Yurtdışında eğitim almak, kültürel adaptasyonu gerektirir. Pathway programları, öğrencilerin eğitim sürecine başlamadan önce bulundukları ülkenin kültürüne aşina olmalarını sağlar. Bu, öğrencilerin eğitim hayatına sorunsuz bir şekilde başlamalarını ve sosyal çevrelerinde daha rahat olmalarını sağlar.",
          },
          {
            title: "Üniversiteye Kolay Geçiş",
            description:
              "Pathway programları, öğrencilerin seçtikleri üniversitelere girişte kolaylık sağlar. Bu programlar, üniversite ile işbirliği içinde çalışarak, öğrencilerin doğrudan üniversitenin lisans veya yüksek lisans programlarına geçiş yapmalarını sağlar. Bu, öğrencilerin üniversiteye kabul edilme şansını artırır.",
          },
          {
            title: "Kişisel Gelişim",
            description:
              "Pathway programları, sadece akademik ve dilsel beceriler kazandırmakla kalmaz, aynı zamanda öğrencilerin bağımsızlıklarını ve özgüvenlerini artırır. Yurtdışında eğitim almak, yeni bir dil ve kültürle tanışmak, öğrencilerin kişisel gelişimlerine büyük katkı sağlar.",
          },
        ],
      },
      requirements: {
        title: "Pathway Programlarına Başvuru Şartları",
        description:
          "Pathway programlarına başvurmak için genel olarak bazı gereklilikler bulunmaktadır. Ancak bu gereklilikler, başvurulan üniversite ve program türüne göre değişebilir. Aşağıda, çoğu Pathway programı için beklenen başvuru şartları yer almaktadır:",
        idTag: "#requirements",
        list: [
          {
            title: "Dil Yeterliliği",
            description:
              "Birçok Pathway programı, öğrencilerin yeterli düzeyde İngilizce bilmesini ister. Eğer dil seviyeniz yeterli değilse, Pathway programları, İngilizce yeterliliğinizi geliştirebilmeniz için iyi bir fırsattır. İngilizce yeterlilik testlerinden (TOEFL, IELTS vb.) belirli bir puan almanız gerekebilir.",
          },
          {
            title: "Eğitim Geçmişi",
            description:
              "Pathway programlarına başvurabilmek için genellikle lise veya üniversite mezunu olmanız gerekir. Ancak, bazı üniversiteler, belirli bir akademik geçmişe sahip olmayan öğrenciler için de Pathway programları sunmaktadır.",
          },
          {
            title: "Başvuru Belgeleri",
            description:
              "Başvuru sürecinde, genellikle aşağıdaki belgeler talep edilir:",
            alt_list: [
              {
                title: "Lise veya üniversite transkripti",
              },
              {
                title: "Dil yeterlilik belgesi (TOEFL, IELTS vb.)",
              },
              {
                title: "Motivasyon mektubu",
              },
              {
                title: "Referans mektupları",
              },
              {
                title: "Pasaport fotokopisi",
              },
            ],
          },
          {
            title: "Yaş Sınırı",
            description:
              "Pathway programlarının katılımcıları genellikle 17 yaş ve üzeri öğrenciler olmalıdır. Ancak, programın türüne göre yaş sınırlamaları değişiklik gösterebilir.",
          },
        ],
      },
      countries: {
        title: "Hangi Ülkelerde Pathway Programları Bulunur?",
        idTag: "#countries",
        description:
          "Pathway programları, dünya çapında birçok üniversite tarafından sunulmaktadır. En popüler Pathway programları sunan ülkelerden bazıları şunlardır:",
        list: [
          {
            title: "Birleşik Krallık",
            description:
              "Birleşik Krallık, yurtdışında eğitim almak isteyen öğrenciler için en çok tercih edilen destinasyonlardan biridir. Birçok İngiliz üniversitesi, öğrencilere İngilizce dil yeterliliklerini geliştirebileceği ve akademik olarak hazırlıklı olabileceği Pathway programları sunmaktadır. Özellikle Londra, Manchester ve Birmingham gibi şehirlerde pek çok seçenek bulunmaktadır.",
          },
          {
            title: "Amerika Birleşik Devletleri",
            description:
              "Amerika, geniş bir eğitim yelpazesi ve çeşitli Pathway programlarıyla yurtdışında eğitim almak isteyen öğrenciler için mükemmel bir seçenektir. Üniversiteler, dil becerilerini geliştirmek ve akademik hazırlık yapmak isteyen öğrenciler için Pathway programları sunmaktadır..",
          },
          {
            title: "Kanada",
            description:
              "Kanada’daki birçok üniversite, dil ve akademik hazırlık programları aracılığıyla öğrencilerin üniversiteye geçişlerini kolaylaştırır. Pathway programları, öğrencilere dil becerilerini geliştirerek, Kanada’daki üniversitelere başarılı bir geçiş yapmalarını sağlar.",
          },
          {
            title: "Avustralya",
            description:
              "Avustralya, Pathway programlarıyla öğrencilerin üniversitelere giriş yapmalarını sağlayan önemli bir destinasyondur. Avustralya’daki üniversiteler, öğrencilere hem dil becerilerini geliştirme hem de akademik olarak hazırlıklı olma imkanı sunar.",
          },
          {
            title: "Yeni Zelanda",
            description:
              "Yeni Zelanda da yurtdışında eğitim almak isteyen öğrenciler için iyi bir seçenektir. Yeni Zelanda’daki üniversiteler, öğrencilere Pathway programları ile güçlü bir akademik temel sağlar.",
          },
        ],
      },
      support: {
        title:
          "Smyrna Edu Danışmanlık: Pathway Programları ve Destek Hizmetleri",
        idTag: "#support",
        description:
          "Smyrna Edu, Pathway programları konusunda kapsamlı danışmanlık hizmetleri sunmaktadır. Eğitim hayatınızı yurtdışında sürdürebilmeniz için gereken tüm desteği sağlıyoruz. Başvuru sürecinden vize işlemlerine, burs olanaklarından konaklama düzenlemelerine kadar her adımda yanınızdayız.",
        sub_desc: "Sunmuş olduğumuz hizmetler şunlardır:",
        list: [
          {
            title: "Pathway Programı Seçimi ve Danışmanlık",
          },
          {
            title: "Başvuru Belgelerinin Hazırlanması",
          },
          {
            title: "Dil Yeterlilik Desteği (TOEFL, IELTS vb.)",
          },
          {
            title: "Vize Başvurusu ve Onay Süreci",
          },
          {
            title: "Konaklama ve Ulaşım Yardımı",
          },
          {
            title: "Burs ve Finansal Destek İmkanları",
          },
        ],
      },
    },
    sub_desc_alt:
      "Pathway programları, yurtdışında eğitim almak isteyen öğrenciler için mükemmel bir fırsattır. Smyrna Edu olarak, bu süreci sizin için kolay ve verimli hale getirmek için buradayız.",
  },
  foundation_programs: {
    title:
      "Foundation Programları: Yurtdışında Üniversite Eğitimi İçin Hazırlık Süreci",
    idTag: "#foundation",
    description:
      "Yurtdışında üniversite eğitimi almak isteyen öğrenciler için Foundation programları, üniversiteye geçiş öncesi gerekli akademik ve dil becerilerini geliştirmeye yardımcı olan önemli bir eğitim aşamasıdır. Bu programlar, genellikle akademik becerileri ve dil yeterliliği eksik olan öğrenciler için ideal bir başlangıç fırsatı sunar.",
    sub_desc:
      "Bu yazıda, Foundation programlarının ne olduğunu, avantajlarını, başvuru sürecini ve hangi ülkelerde mevcut olduklarını bulabilirsiniz.",
    sections: {
      definition: {
        title: "Foundation Programları Nedir?",
        idTag: "#definition",
        description:
          "Foundation programları, üniversiteye geçiş yapmadan önce akademik hazırlık ve dil becerilerini geliştirmek amacıyla sunulan eğitim programlarıdır. Özellikle dil seviyesi yeterli olmayan veya akademik geçmişi üniversiteye başvuru için yeterli olmayan öğrenciler için tasarlanmıştır.",
        sub_desc:
          "Bu programlar, öğrencileri yurtdışındaki üniversitelere hazırlamak için gerekli olan temel bilgileri kazandırmayı amaçlar. İngilizce yeterliliği eksik olan öğrencilere dil desteği sağlarken temel akademik derslerle üniversiteye uygun bir seviyeye ulaşmalarını sağlar.",
      },
      advantages: {
        title: "Foundation Programlarının Avantajları",
        idTag: "#advantages",
        list: [
          {
            title: "Üniversiteye Kolay Geçiş",
            description:
              "Foundation programı başarıyla tamamlandığında öğrenciler genellikle lisans programına doğrudan geçiş hakkı kazanır. Bu da öğrencilere üniversiteye güçlü bir temel ile başlama avantajı sunar.",
          },
          {
            title: "Dil Yeterliliğini Geliştirme",
            description:
              "İngilizce Foundation programları sayesinde öğrenciler, TOEFL veya IELTS gibi sınavlara girmeden üniversiteye geçiş yapabilir ve dil becerilerini eğitim süresince geliştirebilir.",
          },
          {
            title: "Akademik Hazırlık",
            description:
              "Foundation programları, mühendislikten işletmeye birçok alanda temel akademik bilgileri kapsayarak üniversite eğitimine geçişi kolaylaştırır.",
          },
          {
            title: "Kültürel Uyumu Sağlama",
            description:
              "Öğrencilerin yurtdışındaki yaşam koşullarına alışmalarına ve kültürel farkındalık geliştirmelerine olanak tanır.",
          },
          {
            title: "Kariyer Fırsatlarını Artırma",
            description:
              "Uluslararası bir eğitim deneyimi sayesinde öğrencilerin özgeçmişleri güçlenir ve küresel iş fırsatlarına erişimleri artar.",
          },
        ],
      },
      requirements: {
        title: "Foundation Programlarına Katılmak İçin Gereken Şartlar",
        idTag: "#requirements",
        description:
          "Foundation programlarına başvuru yapabilmek için genel olarak bazı şartlar gereklidir. Bu şartlar üniversiteye göre değişiklik gösterebilir:",
        list: [
          {
            title: "Dil Yeterliliği",
            description:
              "Bazı programlar başvuru sırasında IELTS veya TOEFL gibi sınavlardan belirli bir puan isteyebilir; ancak çoğu program dil eğitimi de sunmaktadır.",
          },
          {
            title: "Eğitim Geçmişi",
            description:
              "Lise diploması genellikle yeterlidir. Akademik yeterlilikleri düşük olan öğrenciler için de fırsat sunar.",
          },
          {
            title: "Başvuru Belgeleri",
            description:
              "Genellikle lise diploması, transkript, dil yeterlilik belgesi, pasaport fotokopisi, motivasyon ve referans mektupları istenir.",
          },
          {
            title: "Yaş Sınırı",
            description: "Genellikle 17 yaş ve üzeri öğrenciler kabul edilir.",
          },
        ],
      },
      countries: {
        title: "Foundation Programlarının Bulunduğu Ülkeler",
        idTag: "#countries",
        description:
          "Foundation programları, dünya genelinde pek çok ülkede sunulmaktadır. En çok tercih edilen ülkeler şunlardır:",
        list: [
          {
            title: "Birleşik Krallık",
            description:
              "İngiltere, İskoçya, Galler ve Kuzey İrlanda'da birçok üniversite Foundation programı sunar.",
          },
          {
            title: "Amerika Birleşik Devletleri",
            description:
              "Amerika'daki üniversiteler, öğrencilerin akademik ve dilsel olarak hazırlanmasını sağlayan çeşitli Foundation programları sunmaktadır.",
          },
          {
            title: "Kanada",
            description:
              "Kanada'daki üniversiteler, yüksek kaliteli Foundation programlarıyla dil ve akademik hazırlık imkânı sunar.",
          },
          {
            title: "Avustralya",
            description:
              "Avustralya üniversiteleri, Foundation eğitimi ile öğrencilere üniversiteye girişte avantaj sağlar.",
          },
          {
            title: "Yeni Zelanda",
            description:
              "Yeni Zelanda’daki eğitim kurumları da Foundation programları ile akademik geçişi kolaylaştırmaktadır.",
          },
        ],
      },
      support: {
        title:
          "Smyrna Edu Danışmanlık: Foundation Programları İçin Destek Hizmetleri",
        idTag: "#support",
        description:
          "Smyrna Edu, Foundation programlarına başvurmak isteyen öğrencilere profesyonel danışmanlık hizmetleri sunmaktadır. Eğitim kurumlarının seçimi, başvuru belgelerinin hazırlanması, vize ve konaklama süreçleri gibi tüm aşamalarda yanınızdayız.",
        sub_desc: "Smyrna Edu'nun sunduğu hizmetler şunlardır:",
        list: [
          { title: "Foundation Programı Seçimi ve Danışmanlık" },
          { title: "Başvuru Belgelerinin Hazırlanması" },
          { title: "Dil Yeterlilik Desteği (TOEFL, IELTS vb.)" },
          { title: "Vize Başvurusu ve Onay Süreci" },
          { title: "Konaklama ve Sim Kart Düzenlemeleri" },
          { title: "Burs ve Finansal Destek İmkânları" },
        ],
      },
    },
    sub_desc_alt:
      "Foundation programları, üniversite eğitimi öncesinde öğrencilerin akademik ve dilsel açıdan hazır hale gelmesini sağlar. Smyrna Edu olarak bu süreçte yanınızdayız.",
  },
};
