import { memo } from 'react';
import { motion } from 'framer-motion';
import { Verified, Star } from 'lucide-react';
import 'aos/dist/aos.css';

const testimonials = [
  {
    id: 1,
    name: 'Himdeunn | 힘든',
    role: 'Minecraft Server Owner',
    community: null,
    country: null,
    time: null,
    rating: 5,
    text: 'Halo HeppyCloud.Saya ingin mengucapkan terima kasih atas layanan hosting yang HeppyCloud sediakan. Kami sangat puas dengan stabilitas dan kecepatan server yang telah membantu operasional kami berjalan lancar. Dukungan teknis yang cepat dan andal...',
    avatar: 'https://images-ext-1.discordapp.net/external/bxY7SVn3wYj-LqKSTNoFA9KMS87b2_UnptkwLOVsv_s/%3Fsize%3D4096%26ignore%3Dtrue%29./https/cdn.discordapp.com/avatars/732410605713096737/e38a876d9661b86fc76eb2d7ae414410.png?format=webp&quality=lossless&width=482&height=482',
  },
  {
    id: 2,
    name: 'Zuftyyy',
    role: 'Minecraft Server Owner',
    community: null,
    country: null,
    time: null,
    rating: 5,
    text: 'Selalu responsif saat ada masalah atau error — langsung ditangani dengan cepat! Pelayanan dari admin dan staff sangat memuaskan. Harga juga terjangkau dan ramah di kantong!',
    avatar: 'https://images-ext-1.discordapp.net/external/iVS1w-DvCGWNCCMJTCA5eSj6mWgyGO_b2zERl_Os-Fk/%3Fsize%3D4096%26ignore%3Dtrue%29./https/cdn.discordapp.com/avatars/420206743839178762/e3de54a71d7fdc8479f02a23ad628883.png?format=webp&quality=lossless&width=511&height=511',
  },
  {
    id: 3,
    name: 'Jhanmc',
    role: 'Minecraft Server Owner',
    community: null,
    country: null,
    time: null,
    rating: 5,
    text: 'Awalnya sempat ragu, tapi setelah coba hosting di tempat lain yang harganya lebih mahal dan malah lag, aku akhirnya pindah ke HeppyCloud — dan ternyata jauh lebih memuaskan! Discord-nya ramah, panelnya enak dipakai, websitenya mudah dipahami, dan semua...',
    avatar: 'https://images-ext-1.discordapp.net/external/SjejS7GOTkjXHfS8cViqCY9-BRAqH6Wi97Zzkjb3TC0/%3Fsize%3D4096%26ignore%3Dtrue%29./https/cdn.discordapp.com/avatars/958437633355296798/cfcbef97ec278413d3862969efc8c547.png?format=webp&quality=lossless&width=205&height=205',
  },
];

const TestimoniPage = memo(() => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="text-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] pt-35"	style={{ height: '800px' }}
  >
    <div className="container mx-auto py-20 text-center">
      <div data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-bold mt-2 bg-gradient-to-r from-fuchsia-500 to-violet-600 bg-clip-text text-transparent">
          What Our Customers Say
        </h2>
        <p className="mt-4 text-gray-400 max-w-3xl mx-auto text-lg">
          Read authentic reviews from verified customers about their experience
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="200">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 flex flex-col h-full text-left">
            <div className="flex items-center gap-4 mb-4">
              {testimonial.avatar ? (
                <img src={testimonial.avatar} alt={`${testimonial.name}'s avatar`} className="w-10 h-10 rounded-full" />
              ) : (
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center font-bold text-lg">{testimonial.name.charAt(0)}</div>
              )}
              <div>
                <h4 className="font-semibold text-gray-200">{testimonial.name}</h4>
                <p className="text-xs text-gray-500">{testimonial.role}</p>
              </div>
              <div className="flex ml-auto items-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={14} className="text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-6 flex-grow">{testimonial.text}</p>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center mt-16" data-aos="fade-up" data-aos-delay="300">
        <a href="https://www.trustpilot.com/review/heppyhost.my.id" className="px-8 py-4 rounded-full text-white font-medium bg-gradient-to-r from-fuchsia-500 to-violet-600 hover:opacity-80 transition-opacity flex items-center gap-2">
          <Verified size={16} />
          Verified on Trustpilot
        </a>
      </div>
    </div>
  </motion.div>
));

export default TestimoniPage;
