import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-red-600 mb-6">Turma SENAI 2025</h1>

      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-md w-full max-w-md shadow-md">
        <div className="flex items-center gap-2">
          <span className="text-2xl">⚠️</span>
          <div>
            <h2 className="font-semibold text-lg">Aviso Importante</h2>
            <p className="text-sm">A entrega do projeto final será na próxima sexta-feira. Não perca o prazo!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
