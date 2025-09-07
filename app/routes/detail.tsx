import { useParams, Link, useNavigate } from "react-router";
import { karyaList } from "./service";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

export default function Detail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const currentIndex = karyaList.findIndex((k) => k.id === Number(id));
  const karya = karyaList[currentIndex];

  
  const handlePrev = () => {
    if (currentIndex > 0) {
      navigate(`/detail/${karyaList[currentIndex - 1].id}`);
    }
  };

  const handleNext = () => {
    if (currentIndex < karyaList.length - 1) {
      navigate(`/detail/${karyaList[currentIndex + 1].id}`);
    }
  };


  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  if (!karya) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-xl font-semibold text-red-500">
          Karya tidak ditemukan
        </h2>
        <Link to="/service" className="mt-4 text-blue-500 hover:underline">
          Kembali ke koleksi
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="max-w-3xl bg-white shadow-md rounded-lg p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={karya.id} // trigger animasi saat karya berubah
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={karya.image}
              alt={karya.title}
              className="w-full h-auto rounded-md mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {karya.title}
            </h2>
            <p className="text-gray-600">{karya.description}</p>

            {/* Indikator posisi */}
            <p className="text-sm text-gray-500 mt-4 text-center">
              {currentIndex + 1} / {karyaList.length}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-between items-center mt-6">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`px-4 py-2 rounded-md text-white ${
              currentIndex === 0
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            ← Sebelumnya
          </button>

          <Link to="/service" className="text-blue-500 hover:underline">
            Kembali ke koleksi
          </Link>

          <button
            onClick={handleNext}
            disabled={currentIndex === karyaList.length - 1}
            className={`px-4 py-2 rounded-md text-white ${
              currentIndex === karyaList.length - 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            Berikutnya →
          </button>
        </div>
      </div>
    </div>
  );
}
