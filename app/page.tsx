import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-50 text-center">
      <Image
        src="/logo.png"
        alt="DonateDash Logo"
        width={100}
        height={100}
        className="mb-4 rounded-full shadow"
      />
      <h1 className="text-4xl font-bold text-blue-700 mb-2">DonateDash</h1>
      <p className="text-lg text-gray-700 max-w-md mb-6">
        Help poor people around the world. Your small donation can provide food,
        water, and hope. 🌍💖
      </p>
      <a
  href="https://pay.sendwyre.com/purchase?dest=0x007FD3512faC2E70D868F0d833b9744B3174AabB&destCurrency=USDC"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition"
>
  💸 Donate with Crypto
</a>
    </main>
  );
}
