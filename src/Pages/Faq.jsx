import { memo, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import 'aos/dist/aos.css';

const faqs = [
  // FAQ General
  {
    id: 1,
    category: 'General',
    question: 'Bagaimana cara memesan server di HeppyCloud?',
    answer: 'Cukup kunjungi website kami, pilih paket server sesuai kebutuhanmu, lalu lakukan checkout. Setelah pembayaran berhasil, server kamu akan otomatis aktif dalam beberapa menit. Panduan lengkapnya bisa kamu tonton di channel YouTube resmi HeppyCloud.',
  },
  {
    id: 2,
    category: 'General',
    question: 'Apakah server langsung aktif setelah bayar?',
    answer: 'Untuk paket Basic dan Premium, server akan langsung aktif secara otomatis setelah pembayaran diterima (instan). Sedangkan untuk Private Node, kamu bisa pesan melalui tiket di Discord kami. Proses provisioning Private Node memerlukan waktu 10–30 menit. Daftar lengkap Private Node tersedia di server Discord HeppyCloud.',
  },
  {
    id: 3,
    category: 'General',
    question: 'Apakah bisa request setup gratis?',
    answer:'Bisa! Kami menyediakan bantuan setup gratis untuk plugin, mod, map, hingga Geyser/Floodgate. Kalian bisa request langsung di channel Discord 🛠️︱ꜰʀᴇᴇ-ꜱᴇᴛᴜᴘ dengan upload file dan menjelaskan kebutuhan kalian.',
    },
  
  // FAQ Game Servers
  {
    id: 4,
    category: 'Game Servers',
    question: 'Apakah bisa ganti versi server?',
    answer: 'Bisa, kamu bisa ganti versi server kapan saja lewat panel kontrol. Tersedia berbagai versi Minecraft seperti Vanilla, Paper, Purpur, Modded, dan Bedrock.',
  },
  {
    id: 5,
    category: 'Game Servers',
    question: 'Apakah mendukung plugin dan mod?',
    answer: 'Ya! Kamu bisa pasang plugin dan mod dengan mudah melalui file manager atau menu Plugin/Mods Manager. Jika kesulitan, tim kami siap bantu setup.',
  },
  {
    id: 6,
    category: 'Game Servers',
    question: 'Apakah server bisa untuk crack/non-premium?',
    answer: 'Bisa. Kamu bisa aktifkan mode offline/crack melalui pengaturan server di panel. Kami juga menyediakan panduan lengkapnya.',
  },
  
  // FAQ Billing
  {
    id: 7,
    category: 'Billing',
    question: 'Metode pembayaran apa saja yang tersedia?',
    answer: 'Kami menerima pembayaran melalui QRIS (semua e-wallet), bank transfer, Dana, OVO, GoPay, ShopeePay, dan lainnya. Pembayaran otomatis diproses dalam hitungan detik.',
  },
  {
    id: 8,
    category: 'Billing',
    question: 'Apakah bisa upgrade paket?',
    answer: 'Bisa. Kamu bisa upgrade paket kapan saja melalui tiket. Selisih harga akan dihitung secara proporsional dari sisa masa aktif server kamu.',
  },
  {
    id: 9,
    category: 'Billing',
    question: 'Apakah server bisa auto perpanjang?',
    answer: 'Ya, kami menyediakan fitur perpanjangan otomatis untuk server. Pastikan saldo mencukupi atau metode pembayaran tersimpan agar proses auto-renew berjalan lancar.',
  },
];

const FaqPage = memo(() => {
  const [activeCategory, setActiveCategory] = useState('General');
  const [openFaqId, setOpenFaqId] = useState(null);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setOpenFaqId(null); // Close all FAQs when changing categories
  };

  const handleFaqClick = (id) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const filteredFaqs = faqs.filter(faq => faq.category === activeCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] font-inter"	style={{ height: '700px' }}
    >
      <div className="container mx-auto py-20 text-center">
        <div data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mt-2 bg-gradient-to-r from-fuchsia-500 to-violet-600 bg-clip-text text-transparent  ">
            Frequently Asked Questions.
          </h2>
        <p className="mt-4 text-gray-400 max-w-3xl mx-auto text-lg">
          Find answers to common questions about our services.
        </p>
        </div>

        <div className="mt-12 flex justify-center space-x-4" data-aos="fade-up" data-aos-delay="100">
          {['General', 'Game Servers', 'Billing'].map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`py-2 px-6 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-fuchsia-500 to-violet-600 text-white'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-12 max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          {filteredFaqs.map((faq) => (
            <div
              key={faq.id}
              className="mb-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden cursor-pointer transition-all duration-300"
              onClick={() => handleFaqClick(faq.id)}
            >
              <div className="flex justify-between items-center p-6 text-left">
                <span className="font-semibold">{faq.question}</span>
                {openFaqId === faq.id ? (
                  <ChevronUp className="text-violet-400 transition-transform duration-300" />
                ) : (
                  <ChevronDown className="text-violet-400 transition-transform duration-300" />
                )}
              </div>
              {openFaqId === faq.id && (
                <div className="p-6 pt-0 text-left text-gray-400 border-t border-white/10 mt-4 transition-opacity duration-300">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
});

export default FaqPage;
