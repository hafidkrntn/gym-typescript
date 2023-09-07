import Navbar from '@/components/navbar';
import { useEffect, useState } from 'react';
import { SelectedPage } from '@/shared/types';
import Home from './components/home';
import Benefits from './components/benefits';
import OurClasses from './components/ourClasses';
import ContactUs from './components/contactUs';
import Footer from './components/footer';

function App() {
  // Membuat state 'selectedPage' yang akan menyimpan nilai dari halaman yang sedang dipilih.
  // Pada awalnya, nilai state ini diatur sebagai 'SelectedPage.Home'.
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home,
  );

  // Membuat state 'isTopOfPage' yang akan menyimpan status apakah pengguna berada di bagian atas halaman.
  // Pada awalnya, state ini diatur sebagai 'true'.
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  // Membuat efek samping menggunakan useEffect. Efek ini akan dieksekusi saat komponen pertama kali dimuat.
  useEffect(() => {
    // Membuat fungsi 'handleScroll' yang akan menangani peristiwa scroll pada jendela (window).
    const handleScroll = () => {
      // Jika posisi scroll di jendela (window.scrollY) berada di atas (0), maka pengguna berada di atas halaman.
      if (window.scrollY === 0) {
        // Mengatur state 'isTopOfPage' menjadi 'true' untuk menandakan pengguna berada di atas halaman.
        setIsTopOfPage(true);
        // Mengatur state 'selectedPage' menjadi 'SelectedPage.Home' karena pengguna kemungkinan berada di halaman utama.
        setSelectedPage(SelectedPage.Home);
      }
      // Jika posisi scroll di jendela tidak sama dengan 0, maka pengguna berada di bawah bagian atas halaman.
      if (window.scrollY !== 0) {
        // Mengatur state 'isTopOfPage' menjadi 'false' untuk menandakan pengguna tidak berada di atas halaman.
        setIsTopOfPage(false);
      }
    };

    // Menambahkan event listener 'scroll' ke jendela (window) yang akan memanggil fungsi 'handleScroll' saat pengguna melakukan scroll.
    window.addEventListener('scroll', handleScroll);

    // Mengembalikan fungsi penghapusan event listener yang akan dieksekusi saat komponen tidak lagi digunakan.
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
}

export default App;
