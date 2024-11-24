import Link from "next/link";

const bijuterias = [
  {
    id: 1,
    name: "Pulseira Elegância",
    price: "R$ 25,00",
    image: "/pulseira.jpg",
  },
  { id: 2, name: "Colar Coração", price: "R$ 40,00", image: "/colar.jpg" },
  { id: 3, name: "Anel Delicado", price: "R$ 15,00", image: "/anel.jpg" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <h1 className="text-3xl font-bold my-8">Minha Vitrine de Bijuterias</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {bijuterias.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md p-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="text-lg font-bold mt-4">{item.name}</h2>
            <p className="text-gray-600">{item.price}</p>
            <Link href={`/produto/${item.id}`}>
              <a className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Ver Mais
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
