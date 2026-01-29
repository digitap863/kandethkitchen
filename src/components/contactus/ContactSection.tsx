"use client"
import api from "@/lib/api";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { FormEvent, useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await api.post('/user/contact', formData);

      if (res.status === 200) {
        setStatus('success');
        setFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="relative w-full pb-24 overflow-hidden font-raleway">
      {/* Background glow */}

      <div className="relative z-10 max-w-5xl mx-auto md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:border-2 rounded-2xl md:bg-white/2 backdrop-blur-md  md:border-white/5 md:px-14 px-7 py-16 shadow-2xl ">
          {/* Left Info */}
          <div className="order-2 md:order-1" data-aos="fade-right">
            <h3 className="text-white text-[28px] font-revalia">
              Contact Information
            </h3>
            <p className="mt-1 text-white/50 text-lg">
              Say something to start a live chat!
            </p>

            <div className="mt-10 space-y-4 text-white/60 text-base">
              <div className="flex items-center gap-8">
                <Phone size={20} className="text-white" />
                <div className="flex flex-col">
                  <span>94003 46504,</span>
                  <span>94469 86504</span>
                </div>
              </div>

              <div className="flex items-center gap-8">
                <Mail size={20} className="text-white" />
                <span>kandethkitchen@gmail.com</span>
              </div>

              <div className="flex items-start gap-8">
                <MapPin size={20} className="text-white mt-1" />
                <span>
                  Kandeth Kitchen Accessories
                  <br />
                  Pvt Road End, 8/405/B&C
                  <br />
                  Near Cochin Granite, Opposite FORUM Mall
                  <br />
                  Ernakulam, Kerala 682304
                </span>
              </div>
            </div>

            {/* Social */}
            <div className="mt-10 flex flex-col items-center">
              <p className="text-white text-[20px] mb-6 font-revalia">
                Follow Us
              </p>
              <div className="flex gap-4">
                <Link href={"https://www.instagram.com/kandeth.kitchenandaccessories/"} target="_blank">
                  <div className="w-9 h-9 rounded-full  flex items-center justify-center bg-[#CE1919] text-white">
                    <Instagram size={20} />
                  </div>
                </Link>
                <Link href={"https://www.facebook.com/p/Kandeth-Kitchen-Accessories-Vyttila-Cochin-100057456248849/"} target="_blank">
                  <div className="w-9 h-9 rounded-full bg-[#CE1919] flex items-center justify-center text-white">
                    <Facebook size={20} />
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="md:order-2 order-1" data-aos="fade-left" data-aos-delay="200">
            <h3 className="text-white text-[30px] font-revalia">
              Let’s connect
            </h3>
            <p className="mt-1 text-white/50 text-base">
              Let’s align our constellations! Reach out and let the magic of
              collaboration illuminate our skies.
            </p>

            <div className="">
              <form action="" className="mt-6 space-y-4" onSubmit={handleSubmit}>
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full bg-white/5 border border-white/20 rounded-md px-4 py-2 text-white placeholder:text-white/70 outline-none"
                />

                <input
                  required
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  inputMode="numeric"
                  pattern="[0-9+]*"
                  className="w-full bg-white/5 border border-white/20 rounded-md px-4 py-2 text-white placeholder:text-white/70 outline-none"
                  placeholder="Phone number"
                />

                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/20 rounded-md px-4 py-2 text-white placeholder:text-white/70 outline-none"
                  placeholder="Email"
                />

                <textarea
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  className="w-full bg-white/5 border border-white/20 rounded-md px-4 py-2 text-white placeholder:text-white/70 outline-none resize-none"
                />
                {status === 'success' && (
                  <p className="text-green-600 text-sm">Message sent successfully!</p>
                )}
                {status === 'error' && (
                  <p className="text-red-600 text-sm">Failed to send. Please try again.</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full mt-2 bg-linear-to-r from-[#CE1919] to-[#680C0C] transition text-white py-2 rounded-md">
                  {status === 'loading' ? 'Sending...' : 'Send a Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
