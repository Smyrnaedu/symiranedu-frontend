import { list } from "postcss";
import { ProgramsData } from "../types/programTypes";

export const programsData: ProgramsData = {
  ielts: {
    title:
      "IELTS (International English Language Testing System) / Uluslararası İngilizce Dil Yeterlilik Sınavı",
    idTag: "#overview",
    description:
      "IELTS, uluslararası eğitim, iş ve göçmenlik amacıyla tercih edilen bir dil sınavıdır. Amerika, İngiltere, Kanada, Yeni Zelanda ve Avustralya gibi ülkelerde üniversitelerin de içinde bulunduğu 12 binden fazla kurum ve kuruluş tarafından kabul edilmektedir. Dahası, IELTS, göçmenlik için İngilizce yeterliliğini şart koşan ülkelerce de kabul edilir ve dünya genelinde en çok tercih edilen dil sınavlarından biridir.",
    sub_desc:
      "Bu sınav, British Council (BC), University of Cambridge ESOL ve IDP (International Development Programme of Australian Universities) tarafından geliştirilmiştir.",
    sections: {
      academic: {
        title: "IELTS Akademik",
        idTag: "#ielts-academic",
        description:
          "IELTS Academic sınavı, İngilizce dil yeterliliğini ölçmek ve akademik bir ortama uygunluğu değerlendirmek için tasarlanmıştır. Sınav soruları akademik dil becerilerine yönelik olup, İngilizce eğitimine veya öğretimine başlamaya hazır olunup olunmadığını değerlendirir.",

        sub_desc:
          "İngilizce dilinde lisans veya lisansüstü düzeyde eğitim almak, İngiltere’de bir üniversitede eğitim görmek ve İngilizce konuşulan herhangi bir ülkede mesleki bir kuruluşta çalışmak için IELTS Akademik sınavı istenmektedir.",
      },
      general: {
        title: "IELTS Genel Eğitim",
        idTag: "#general",
        description:
          "IELTS Genel Eğitim sınavı, İngilizce dil yeterliliğinin pratik ve günlük bağlamda ölçülmesine yönelik tasarlanmıştır. Genellikle yabancı bir ülkede çalışma ve iltica gibi süreçlerde istenir.",

        sub_desc:
          "İngilizce konuşulan bir ülkede çalışmak, iş ile ilgili eğitim almak, bu ülkeye göç etmek, lisans seviyesinin altında eğitim-öğrenim görmek veya kişinin kendi ülkesinde bir iş başvurusunda İngilizce dil yeterliliğini kanıtlamak için IELTS Genel Eğitim sınavı istenmektedir. ",
      },
      exams: {
        title: "IELTS Sınav ",
        idTag: "#exams",
        description:
          "IELTS sınavı internet bağlantısının olduğu özel bir alanda veya 800'den fazla resmi IELTS sınav merkezinde alınabilir. Tercihe göre sınav yazılı olur veya bilgisayar üzerinden yapılabilir. ",
      },
      format: {
        title: "IELTS Sınav Formatı",
        idTag: "#format",
        description:
          "“Dinleme” ve “Konuşma” bölümleri iki sınav türünde de aynıdır. Fakat “Okuma” ve “Yazma” bölümlerinin konuları her iki sınavın türüne göre değişmektedir. Sınavın “Konuşma” bölümü, diğer sınavlardan bir hafta önce veya sonra yapılırken, “Dinleme”, “Okuma” ve “Yazma” bölümleri arada herhangi bir mola vermeden aynı gün içerisinde yapılır. ",
        listening: {
          title: "DİNLEME (40 soru -> 30 + 10 dakika)",
          idTag: "#listening",
          description:
            "IELTS Dinleme sınavı başlıca aşağıdaki becerileri ölçmek üzere tasarlanmıştır:",
          list: [
            {
              title: "Ana fikri ve detaylı bilgileri anlamak,",
            },
            {
              title: "Konuşmacının görüşlerini, tutumunu ve amacını anlamak,",
            },
            {
              title: "Argümanın gelişimini takip edebilmek.",
            },
          ],
          sub_desc:
            "Sınavda anadili İngilizce olan kişilerin konuşmalarından oluşan dört kayıt dinletilir ve ardından birtakım soruların cevaplanması istenir. Sınav toplam 40 sorudan oluşur. Ortalama 30 dakika sürer. Cevapların soru kağıdından cevap kağıdında geçirilmesi için ekstra 10 dakika süre tanınır.",
        },
        reading: {
          title: "OKUMA (40 soru -> 60 dakika)",
          idTag: "#reading",
          description:
            "IELTS Okuma sınavında üç farklı metnin okunması ve ilgili soruların cevaplanması istenir. IELTS Akademik ve IELTS Genel Eğitim sınavlarının Okuma bölümlerinin içeriği farklıdır. Ancak başarılı olmak için her iki sınavda da metinler hızlı okunmalı ve zaman verimli kullanılmalıdır.",
          sub_desc:
            "IELTS Okuma sınavı başlıca aşağıdaki becerileri ölçmek üzere tasarlanmıştır:",
          list: [
            {
              title: "Metnin genel konusunu anlamak,",
            },
            {
              title: "Ana fikirleri saptama,",
            },
            {
              title: "Detayları saptamak,",
            },
            {
              title: "Çıkarımları ve ima edilen anlamı anlamak,",
            },
            {
              title: "Yazarın görüşlerini, tutumunu ve amacını anlamak,",
            },
            {
              title: "Argümanın gelişimini takip edebilmek.",
            },
          ],
          sub_desc2_title: "Akademik Okuma; ",
          sub_desc2:
            "Akademik Okuma; Bu bölüm farklı kitap, bülten, dergi veya gazetelerden alınmış betimleyici, olgusal veya analitik üç uzun metin içerir. Metinler uzman olmayan bir kitle için seçilmiş olmakla beraber, üniversite derslerine girecek veya profesyonel kurumlarda çalışacak kişiler için uygundur.",
          sub_desc2_alt:
            "Bölüm 40 sorudan oluşur ve cevapları sınav kağıdına geçirme süresi dahil 60 dakikadır.",
          sub_desc3_title: "Genel Okuma;  ",
          sub_desc3:
            "Bu bölüm kitap, dergi, gazete, bildiri, reklam veya şirket el kitaplarından alınmış parçalardan oluşur.  Bu okuma metinleri İngilizce konuşulan bir çevrede günlük olarak karşılaşacağınız türden materyallerdir. 40 sorudan oluşur ve cevapları sınav kağıdına geçirme süresi dahil 60 dakikadır",
        },
        writing: {
          title: "YAZMA ( 60 dakika)",
          idTag: "#writing",
          description:
            "IELTS Yazma sınavı başlıca aşağıdaki becerileri ölçmek üzere tasarlanmıştır:",
          list: [
            {
              title: "Uygun şekilde cevap yazmak,",
            },
            {
              title: "Fikirleri düzenlemek,",
            },

            {
              title:
                "Zengin bir kelime dağarcığı ve doğru dil bilgisi kullanmak.",
            },
          ],
          sub_desc_title: "Akademik Yazma; ",
          sub_desc:
            "Akademik Yazma sınavında resmi bir dil kullanılması beklenir. Bölüm 1, bir grafik, tablo, çizelge veya diyagram içerir. Verilen bilginin özgün kelimelerle tanımlanması, özetlenmesi ve açıklanması istenir. Bu bir verinin tanımlanması; bir sürecin aşamalarının açıklanması, bir şeyin nasıl çalıştığının anlatılması veya bir obje veya etkinliğin tarif edilmesi şeklinde olabilir. Bölüm 2'de ise bir bakış açısı, argüman veya problem hakkında yazı yazılması istenir. Verilen konu kolay anlaşılır ve ilginçtir.",
          sub_desc_alt:
            "Yazma sınavı 60 dakika sürer. Bölüm 1 için 20 dakika, Bölüm 2 için ise 40 dakika zaman verilir. Bölüm 1 için en az 150 kelimelik; bölüm 2 için ise en az 250 kelimelik bir yazı yazılması beklenir.  ",
          sub_desc2_title: "Genel Yazma; ",
          sub_desc2:
            "Genel Yazma sınavında resmi olmayan bir dil kullanılması beklenir. Bölüm 1, bir mektup yazmayı gerektirir. Bu, bir arkadaşınıza, iş arkadaşınıza veya işvereninize yazılacak bir mektup olabilir. Bölüm 2'de ise bir bakış açısı, argüman veya problem hakkında yazı yazılması istenir. Verilen konu kolay anlaşılır ve ilginçtir.",
          sub_desc2_alt:
            "IELTS Yazma sınavı 60 dakika sürer. Bölüm 1 için 20 dakika, Bölüm 2 için ise 40 dakika zaman verilir. Bölüm 1 için en az 150; bölüm 2 için ise en az 250 kelimelik bir yazı yazılması beklenir.",
        },

        speaking: {
          title: "KONUŞMA (11-14 dakika)",
          idTag: "#speaking",
          description:
            "IELTS konuşma sınavında sertifikalı bir IELTS uzmanıyla karşılıklı ve gerçek hayatta karşılaşılacak türden bir konuşma yapılır. Farklı aksanlar kullanılabilir ve sınav kaydedilir. IELTS Akademik ve IELTS Genel Eğitim sınavlarının “Konuşma” bölümlerinin içeriği aynıdır. ",
          sub_desc:
            "IELTS Konuşma sınavında sınav görevlisi başlıca aşağıdaki becerileri görmeyi hedefler:",
          list: [
            {
              title:
                "Günlük konularla ilgili bilgilerin ve sıradan deneyimlerin düzgün ve organize bir şekilde aktarılması;",
            },
            {
              title:
                "Verilen bir konu üzerinde belli bir süre uygun dil kullanılarak konuşulması;",
            },
            {
              title: "Fikirlerin tutarlı şekilde bir araya getirilmesi;",
            },
            {
              title: "Görüşlerin ifade edilmesi ve gerekçelendirilmesi;",
            },
            {
              title: "Konunun analiz edilmesi, tartışılması ve yorumlanması.",
            },
          ],
          sub_desc2:
            "Konuşurken doğal ve rahat olunması başarı için önemlidir.",
        },
      },
      exam_process: {
        title: "Sınav Süreci",
        idTag: "#exam-process",
        description:
          "IELTS sınav süreci, adayların kimlik doğrulamasından başlayarak, farklı bölümlerde çeşitli görevleri yerine getirmesini içerir.",
        list: [
          {
            title: "Bölüm 1: ",
            description:
              "Sınav görevlisi kendini tanıtır ve sınava giren kişiden kendisini tanıtmasını ve kimliğini doğrulamasını ister. Görevli ev, aile, iş, eğitim ve hobiler gibi genel konular hakkında sorular sorar. Bu bölüm sınava giren kişinin rahatlamasına ve doğal bir şekilde konuşmasına yardımcı olur.",
          },
          {
            title: "Bölüm 2: ",
            description:
              "Sınava giren kişiye bir konu verilir ve bu konu hakkında 1-2 dakika boyunca konuşması istenir. Kişiye konuşma için 1 dakika süre verilir ve bu süre içinde not alabilir. Ardından, sınav görevlisi kişiden bu konu hakkında konuşmasını ister.",
          },
          {
            title: "Bölüm 3: ",
            description:
              "Sınav görevlisi Bölüm 2'nin konusu ile ilgili ilave sorular sorar. Bu sorular daha soyut konuları içerir ve tartışmaya fırsat olacak şekilde hazırlanmıştır.",
          },
        ],
      },
      exam_grading: {
        title: "IELTS Puanlama Sistemi",
        idTag: "#exam-grading",
        description:
          "IELTS Sınavına giren adaylara 1’den 9’a kadar bir puan verilir. Sınav 4 ana bölümden oluştuğu için puanlar 4 farklı alanda (band) verilir. Sınav Bölümleri Listening (Dinleme),  Reading (Okuma), Writing (Essay- Yazma) ve  Speaking (Konuşma) bölümlerinden oluşur.  ",
        sub_desc:
          "Her bir alandan (band) alınan puan ortalaması IELTS Overall Band Score sonucunu verir.",
        sub_desc2:
          "IELTS puanı hesaplanırken her bir bölüm için 1'den 9'a kadar puan verilir. Örneğin: Listening 6.0, Reading 5.5, Writing 5.5 ve Speaking 5.0 ise; Overall Score hesaplanması için 4 bölümden alınan puanlar toplanır (6 + 5.5 + 5.5 + 5 = 22) ve ortalamasını almak için yine 4'e bölünür (22/4 = 5.5). Bu durumda IELTS puanı 5,5 olarak tespit edilir.",
      },
    },
  },
  toefl: {
    title: "TOEFL (Test of English as a Foreign Language)",
    idTag: "#toefl",
    description:
      "TOEFL, yani “Yabancı Dil Olarak İngilizce Testi”, ana dili İngilizce olmayan bireylerin akademik ortamlarda İngilizce yeterliliğini ölçmek amacıyla geliştirilmiş bir dil sınavıdır. Genellikle Amerika Birleşik Devletleri ve Kanada’daki üniversiteler tarafından başvuru sürecinde istenen bir sınavdır. Ancak dünya genelinde birçok yükseköğretim kurumu da TOEFL puanlarını kabul etmektedir.",
    sub_desc:
      "TOEFL, ETS (Educational Testing Service) tarafından hazırlanmakta ve uygulanmaktadır. TOEFL sınavı, İngilizce’nin dört temel becerisini (okuma, dinleme, konuşma, yazma) ölçer ve bu yönüyle üniversitelerdeki akademik yaşama hazırlık seviyenizi değerlendirir.",
    sub_desc2:
      "TOEFL puanı, yalnızca üniversite başvurularında değil; iş başvuruları, burs başvuruları ve çeşitli mesleki yeterlilik belgeleri için de kullanılabilir. Bazı ülkelerdeki göçmenlik kurumları da TOEFL sonucunu geçerli saymaktadır.",
    sections: {
      exam_types: {
        title: "TOEFL Sınav Türleri",
        idTag: "#exam-types",
        description:
          "TOEFL sınavının farklı formatları bulunmaktadır. En yaygın olarak kullanılan sürüm TOEFL iBT (Internet-Based Test) olarak bilinir. TOEFL iBT, adından da anlaşılacağı üzere tamamen internet üzerinden yapılan bir sınavdır. Diğer bir format ise TOEFL Essentials ve kuruma özel uygulanan TOEFL ITP’dir.",
        sub_desc:
          "TOEFL iBT sınavı, dünya çapında 160’dan fazla ülkede 4500’den fazla sınav merkezinde uygulanmaktadır. Ayrıca, TOEFL iBT Home Edition seçeneği ile sınavı evinizde de almanız mümkündür.",
      },
      exam_participants: {
        title: "TOEFL iBT Sınavı Kimler İçindir?",
        idTag: "#exam-participants",
        description: "TOEFL iBT sınavı aşağıdaki bireyler için uygundur:",
        list: [
          {
            title:
              "İngilizce eğitim veren bir üniversite veya koleje başvurmak isteyenler,",
          },
          {
            title: "Öğrenci vizesine başvuracak olanlar,",
          },
          {
            title:
              "İngilizce konuşulan bir ortamda akademik seviyede başarılı olma yeterliliğini kanıtlamak isteyenler,",
          },
          {
            title:
              "Burs başvuruları ya da mezuniyet sonrası yurtdışında çalışma planı olanlar.",
          },
        ],
        sub_desc:
          "Her kurumun kabul ettiği minimum puan farklı olabilir. Başvuru yapılacak okulun web sitesinden istenen TOEFL skoru kontrol edilebilir.",
      },
      format: {
        title: "TOEFL Sınav Formatı",
        idTag: "#exam-format",
        description: "TOEFL iBT sınavı dört bölümden oluşur:",
        list: [
          {
            title: "Reading (Okuma)",
          },
          {
            title: "Listening (Dinleme)",
          },
          {
            title: "Speaking (Konuşma)",
          },
          {
            title: "Writing (Yazma)",
          },
        ],
        sub_desc:
          "Sınav süresi yaklaşık 2 saat civarındadır. Her bölüm, akademik ortamda karşılaşacağınız görevleri yansıtan gerçek hayat senaryoları üzerine kurgulanmıştır.",
      },
      exam_types_detail: {
        title: "TOEFL Sınav Bölümleri",
        idTag: "#exam-types-detail",
        description:
          "TOEFL sınavı dört ana bölümden oluşur ve her biri farklı becerileri ölçer.",
        reading: {
          title: "Okuma (Reading)",
          idTag: "#reading",
          duration: "Süre: 35 dakika – 20 soru",
          description:
            "TOEFL Reading bölümü, akademik içerikli 2 uzun metinden oluşur. Her metin yaklaşık 700 kelime uzunluğundadır ve ardından çoktan seçmeli sorular gelir.",
          sub_desc: "Bu bölümde ölçülen beceriler şunlardır:",
          list: [
            {
              title: "Ana fikri ve detayları ayırt etme",
            },
            {
              title: "Yazarın amacı ve tutumunu belirleme",
            },
            {
              title: "Çıkarım yapma, kelime anlamlarını bağlamdan çıkarma",
            },
            {
              title: "Argüman ve metin yapısını analiz etme",
            },
          ],
        },
        listening: {
          title: "Dinleme (Listening)",
          idTag: "#listening",
          duration: "Süre: 36 dakika – 28 soru",
          description:
            "Dinleme bölümünde, 2 ders (lecture) ve 2 konuşma (conversation) yer alır. Katılımcılar ses kayıtlarını bir kez dinler ve ardından soruları yanıtlar.",
          sub_desc: "Ölçülen beceriler:",
          list: [
            {
              title: "Konunun ana fikrini kavrama",
            },

            {
              title: "Detayları anlama",
            },
            {
              title: "Konuşmacının amacı ve tutumunu belirleme",
            },
            {
              title: "Konu geçişlerini takip etme",
            },
          ],
        },
        speaking: {
          title: "Konuşma (Speaking)",
          idTag: "#speaking",
          duration: "Süre: 16 dakika – 4 görev",
          description:
            "TOEFL Speaking bölümü hem kişisel hem de entegre görevlerden oluşur:",
          list: [
            {
              title: "Görev 1",
              description:
                "Kendi deneyimlerinize veya tercihinize dayalı kısa bir konuşma",
            },
            {
              title: "Görev 2",
              description: "Okuma ve dinleme materyallerine dayalı yorum",
            },
            {
              title: "Görev 3",
              description:
                "Akademik konularla ilgili kısa bir dinleme + konuşma",
            },
          ],
          details: "Adaydan beklenenler:",
          list1: [
            {
              title: "Fikirlerini net ve tutarlı şekilde ifade etme",
            },
            {
              title: "Uygun akademik kelimeler kullanma",
            },
            {
              title: "Akıcı konuşma ve doğru telaffuz",
            },
          ],
        },
        writing: {
          title: "Yazma (Writing)",
          idTag: "#writing",
          duration: "29 dakika – 2 görev",
          description:
            "Writing bölümü, biri entegre biri bağımsız olmak üzere iki görevden oluşur:",
          list: [
            {
              title: "Görev 1 (Integrated)",
              description:
                "Kısa bir metin okunur, ardından bir dinleme parçası dinlenir. Daha sonra her iki kaynaktan elde edilen bilgileri karşılaştırarak bir kompozisyon yazılır.",
            },
            {
              title: "Görev 2 (Independent)",
              description:
                "Belirli bir konuya ilişkin görüşünüzü destekleyecek şekilde bağımsız bir essay yazılır.",
            },
          ],
          sub_desc:
            "Yazma bölümü hem yapısal bütünlük hem de içerik derinliği açısından değerlendirilir. Gramer, kelime seçimi ve bağlantılı fikir sunumu önemlidir.",
        },
      },
      exam_process: {
        title: "TOEFL Sınavına Nasıl Girilir?",
        idTag: "#exam-process",
        description:
          "TOEFL iBT sınavına kayıt işlemleri, ETS’nin resmî web sitesi olan www.ets.org/toefl adresi üzerinden yapılır. Sınav merkezinde ya da “Home Edition” (evden) seçeneği ile sınava katılınır.",
        sub_desc:
          "Sınav gününde geçerli bir kimlik belgesi istenir. Bilgisayar üzerinden yapılan sınav, ses kayıtları ve yazılı yanıtlarla birlikte değerlendirilir.",
      },
      exam_grading: {
        title: "TOEFL Puanlama Sistemi",
        idTag: "#exam-grading",
        description:
          "TOEFL iBT sınavı toplam 120 puan üzerinden değerlendirilir. Her bölüm maksimum 30 puan alabilir.",
        list: [
          {
            title: "Reading: 0 - 30 puan",
          },
          {
            title: "Listening: 0 - 30 puan",
          },
          {
            title: "Speaking: 0 - 30 puan",
          },
          {
            title: "Writing: 0 - 30 puan",
          },
        ],
        sub_desc: "Toplam skor: 0 - 120",
        sub_desc2:
          "Her bölüm için ayrı skorlar verilmekte olup üniversiteler genellikle toplam skorun yanı sıra minimum bölüm skorlarını da dikkate alır. Örneğin; bazı üniversiteler Writing bölümünden en az 22 puan istemektedir.",
        validity: "Skorlar sınav tarihinden itibaren 2 yıl boyunca geçerlidir.",
      },
    },
    sub_desc3:
      "TOEFL sınavı, dünya çapında 11 binden fazla kurum ve kuruluş tarafından kabul edilmektedir. Özellikle ABD, Kanada ve bazı Avrupa ülkelerinde lisans veya lisansüstü eğitim almak isteyenler için olmazsa olmaz bir sınavdır.",
  },
  pte: {
    title: "PTE Academic (Pearson Test of English Academic)",
    idTag: "#pte",
    description:
      "PTE Academic, İngilizce dil yeterliliğini değerlendiren, tamamen bilgisayar tabanlı bir sınavdır. Eğitim, göçmenlik ve iş başvuruları için uluslararası geçerliliğe sahiptir. PTE Academic, özellikle Avustralya, İngiltere, Yeni Zelanda ve Kanada gibi ülkelerdeki üniversiteler ve resmî kurumlar tarafından kabul edilmektedir.",
    sub_desc:
      "Pearson tarafından geliştirilen bu sınav, yapay zekâ destekli değerlendirme sistemi sayesinde hızlı ve tarafsız sonuçlar sunar. PTE, adayın İngilizce dil becerilerini akademik bağlamda test eder ve üniversite başvuruları için oldukça etkili bir ölçüm aracıdır.",
    sections: {
      exam_participants: {
        title: "PTE Academic Kimler İçindir?",
        idTag: "#exam-participants",
        description:
          "PTE Academic sınavı, akademik veya profesyonel hedeflere ulaşmak isteyen adaylar için idealdir:",
        list: [
          {
            title:
              " İngilizce eğitim veren bir üniversiteye başvurmak isteyenler",
          },
          {
            title:
              "Öğrenci vizesi veya göçmenlik işlemleri için dil yeterliliği kanıtlamak isteyenler",
          },
          {
            title:
              "İngilizce konuşulan bir ülkede meslek icra etmek isteyenler",
          },
          {
            title:
              "Hızlı sonuç almak isteyen adaylar (genellikle 24-48 saat içinde sonuç açıklanır)",
          },
        ],
        sub_desc:
          "PTE Academic, sınav sürecinin tamamını dijital ortamda gerçekleştirir. Bu sayede insan hatası ve öznellik en aza indirilmiş olur.",
      },
      format: {
        title: "PTE Academic Sınav Formatı",
        idTag: "#format",
        description:
          "PTE Academic sınavı, dört temel beceriyi üç ana bölümde değerlendirir:",
        list: [
          {
            title: "Speaking & Writing (Konuşma ve Yazma)",
          },
          {
            title: "Reading (Okuma)",
          },
          {
            title: "Listening (Dinleme)",
          },
        ],
        sub_desc:
          "Sınavın toplam süresi yaklaşık 2 saat 15 dakikadır. Tüm sınav bilgisayar üzerinden yapılır ve konuşma bölümü mikrofon ile kaydedilir. Tüm yanıtlar yapay zekâ tarafından analiz edilir ve puanlandırılır.",
        speaking_writing: {
          title: "🗣️ Konuşma ve Yazma (Speaking & Writing)",
          idTag: "#speaking-writing",
          description:
            "Bu bölüm, adayın hem sözlü hem de yazılı ifade becerilerini değerlendirir. Aşağıdaki görev türlerini içerir:",
          list: [
            {
              title: "Read Aloud",
              description: "Verilen metni yüksek sesle okumak",
            },
            {
              title: "Repeat Sentence",
              description: "Dinlenen cümleyi tekrar etmek",
            },
            {
              title: "Describe Image",
              description: "Görüntü ya da tabloyu açıklamak",
            },
            {
              title: "Re-tell Lecture",
              description: "Kısa bir ses kaydını özetlemek",
            },
            {
              title: "Answer Short Questions",
              description: "Kısa sorulara  cevap vermek",
            },
            {
              title: "Summarize Written Text",
              description: "Kısa bir metni tek cümlede özetlemek",
            },
            {
              title: "Essay Writing",
              description:
                "Verilen konu hakkında 200-300 kelimelik bir makale yazmak",
            },
          ],
          sub_desc:
            "Bu bölümdeki tüm görevler hem içeriği hem de telaffuzu, akıcılığı, gramer ve kelime kullanımı gibi unsurlar açısından değerlendirilir.",
        },
        reading: {
          title: "📖 Okuma (Reading)",
          idTag: "#reading",
          duration: "Süre: Yaklaşık 30 dakika",
          description:
            "Reading bölümü akademik metinleri anlama ve analiz etme becerisini ölçer. Sınavda çeşitli okuma görevleri yer alır:",
          list: [
            {
              title: "Multiple Choice (Single/Multiple Answers)",
            },
            {
              title: "Re-order Paragraphs",
              description: "Paragrafların mantıklı sıraya konması",
            },
            {
              title: "Fill in the Blanks",
              description:
                "Cümle içindeki boşlukları doğru kelimelerle tamamlama",
            },
          ],
          sub_desc:
            "Bu bölüm, adayın bilgi çıkarımı yapabilmesini, bağlamı kavrayabilmesini ve akademik metinleri çözümleyebilmesini test eder.",
        },
        listening: {
          title: "🎧 Dinleme (Listening)",
          idTag: "#listening",
          duration: "Süre: Yaklaşık 30-35 dakika",
          description:
            "Dinleme (Listening) bölümü, çeşitli konuşmaları ve ders anlatımlarını dinleyip buna dayalı soruları cevaplama üzerine kuruludur:",
          list: [
            {
              title: "Summarize Spoken Text",
              description: "Dinlenen metni yazılı şekilde özetleme",
            },
            {
              title: "Multiple Choice Questions",
              description: "Çoktan seçmeli sorular",
            },
            {
              title: "Fill in the Blanks",
              description: "Boşluk doldurma",
            },
            {
              title: "Highlight Correct Summary",
              description: "Kaydı en iyi özetleyen paragrafı seçme",
            },
            {
              title: "Select Missing Word",
              description: "Eksik kelimeyi bulma",
            },
            {
              title: "Highlight Incorrect Words",
              description: "Yanlış kelimeleri seçme",
            },
            {
              title: "Write from Dictation",
              description: "Dikte edilen metni yazma",
            },
          ],
          sub_desc:
            "Bu bölümdeki ses kayıtları yalnızca bir kez dinletilir. Bu nedenle dikkatli dinleme ve not alma önemlidir.",
        },
      },
      exam_process: {
        title: "PTE Academic Nasıl Uygulanır?",
        idTag: "#exam-process",
        description:
          "PTE Academic sınavı, dünya çapında Pearson onaylı test merkezlerinde düzenlenir. Ayrıca bazı ülkelerde “Online at Home” (Evde Sınav) seçeneği de bulunmaktadır.",
        list: [
          {
            title: "Sınav tamamen bilgisayar ortamında gerçekleşir.",
          },
          {
            title: "Konuşma kısmı için mikrofonlu kulaklık kullanılır..",
          },
          {
            title: "Kimlik doğrulaması sınav öncesi dijital olarak yapılır.",
          },
          {
            title:
              "Sınav güvenliği oldukça yüksektir; video kaydı ve biyometrik tarama dahil edilir.",
          },
        ],
        sub_desc:
          "Sınavdan sonra sonuçlar genellikle 1-2 iş günü içinde dijital olarak gönderilir.",
      },
      exam_grading: {
        title: "PTE Academic Puanlama Sistemi",
        idTag: "#exam-grading",
        description:
          "PTE Academic sınavı, 10 ile 90 puan arasında değerlendirilir. Skorlar hem genel başarıyı hem de alt beceri puanlarını içerir:",
        list: [
          {
            title: "Overall Score",
            description: "(Genel Puan)",
          },
          {
            title: "Communicative Skills",
            description:
              "(İletişim Becerileri) Listening, Reading, Speaking, Writing",
          },
          {
            title: "Enabling Skills: ",
            description:
              "(Destekleyici Beceriler) Grammar, Oral Fluency, Pronunciation, S(Alt Beceriler) Grammar, Vocabulary, Pronunciation, Fluency, etc.pelling, Vocabulary, Written Discourse",
          },
        ],
        example: {
          title: "Örnek bir puan raporu:",
          list2: [
            {
              title: "Speaking: 75",
            },
            {
              title: "Writing: 70",
            },
            {
              title: "Listening: 68",
            },
            {
              title: "Reading: 72",
            },
            {
              title: "Overall Score: 71",
            },
          ],
        },
        sub_desc:
          "Sınav sonucu; göçmenlik, akademik kabul ve profesyonel kayıt süreçlerinde geçerlidir. Skorlar 2 yıl süreyle geçerlidir.",
      },
    },
    sub_desc2:
      "PTE Academic, teknolojiyi merkeze alan ve hızlı sonuç garantisiyle öne çıkan bir sınavdır. Özellikle zaman baskısı altında olan ya da tarafsız, yapay zekâ tabanlı bir değerlendirme isteyen adaylar için ideal bir tercihtir.",
  },
  gmat: {
    title: "GMAT",
    idTag: "#gmat",
    description: "GMAT sınavı hakkında bilgi buraya gelecek.",
    sub_desc: "",
    sections: {},
  },
  gre: {
    title: "GRE",
    idTag: "#gre",
    description: "GRE sınavı hakkında bilgi buraya gelecek.",
    sub_desc: "",
    sections: {},
  },
  sat: {
    title: "SAT",
    idTag: "#sat",
    description: "SAT sınavı hakkında bilgi buraya gelecek.",
    sub_desc: "",
    sections: {},
  },
  ap: {
    title: "AP (Advanced Placement)",
    idTag: "#ap",
    description:
      "AP (Advanced Placement) sınavı hakkında bilgi buraya gelecek.",
    sub_desc: "",
    sections: {},
  },

  duolingo: {
    title: "Duolingo English Test",
    idTag: "#duolingo",
    description: "Duolingo English Test sınavı hakkında bilgi buraya gelecek.",
    sub_desc: "",
    sections: {},
  },
};
