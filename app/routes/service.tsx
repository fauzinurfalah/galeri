import { Link } from "react-router";

type Karya = {
  id: number;
  title: string;
  image: string;
  description: string;
};

const karyaList: Karya[] = [
  {
    id: 1,
    title: "Autumn Landscape with Four Trees (1885)",
    image:
      "https://serupa.id/wp-content/uploads/2018/09/autumn-landscape-with-four-trees-vincent-van-gogh-realisme-serupa.id_.jpg",
    description:
      "Lukisan ini menggambarkan suasana pedesaan di musim gugur, dengan empat pohon di tengah bidang, dedaunan berwarna cokelat dan merah bata khas musim gugur, serta seorang figur kecil di kejauhan. Suasananya lebih tenang dan realistis dibanding dua lukisan sebelumnya.",
  },
  {
    id: 2,
    title: "The Starry Night (1889)",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/960px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
    description:
      "Ini adalah salah satu lukisan paling terkenal di dunia. Menggambarkan langit malam penuh pusaran bintang di atas desa Saint-Rémy-de-Provence, tempat Van Gogh dirawat di rumah sakit jiwa. Langit mendominasi lukisan dengan pusaran biru dan bintang yang bercahaya terang. Di bawahnya, terlihat desa kecil dengan menara gereja yang menjulang.",
  },
  {
    id: 3,
    title: "Starry Night Over the Rhône (1888) ",
    image:
      "https://img-highend.okezone.com/okz/900/pictureArticle/images_PN78zd18_15PD4t.jpg",
    description:
      "Lukisan ini menggambarkan pemandangan malam di tepi Sungai Rhône di Arles, Prancis. Langit dipenuhi bintang berkilauan yang memantul di permukaan air sungai. Di kejauhan terlihat cahaya lampu kota, sementara di bagian depan ada sepasang kekasih berjalan di tepi sungai.",
  },
];

export default function Service(){
    return (
        <div className="bg-white flex flex-col items-center justify-center min-h-screen">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-semibold text-gray-800">Karya Koleksi</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl px-4">
        {karyaList.map((karya) => (
          <Link
            key={karya.id}
            to={`/detail/${karya.id}`}
            className="overflow-hidden rounded-md shadow-sm hover:shadow-md transition block"
          >
            <img
              src={karya.image}
              alt={karya.title}
              className="w-full h-auto object-cover"
            />
          </Link>
        ))}
      </div>
    </div>
    );
}

export { karyaList };