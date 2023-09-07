import { useEffect, useState } from 'react';

// Custom hook untuk mendeteksi media query
const useMediaQuery = (query: string) => {
  // State untuk menyimpan hasil dari media query
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Membuat objek media query dari string yang diberikan
    const media = window.matchMedia(query);

    // Memeriksa apakah hasil media query berubah
    if (media.matches !== matches) {
      // Jika berubah, memperbarui state dengan nilai baru
      setMatches(media.matches);
    }

    // Membuat event listener untuk mendengarkan perubahan ukuran layar
    const listener = () => setMatches(media.matches);

    // Menambahkan event listener ke window
    window.addEventListener('resize', listener);

    // Membersihkan event listener ketika komponen unmount
    return () => window.removeEventListener('resize', listener);
  }, [matches, query]);

  // Mengembalikan hasil media query saat ini
  return matches;
};

// Mengekspor custom hook
export default useMediaQuery;
