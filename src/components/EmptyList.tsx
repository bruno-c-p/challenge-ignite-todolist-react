import { Clipboard } from "lucide-react";

const EmptyList = () => {
  return (
    <>
      <hr className="border-zinc-600 w-full" />
      <Clipboard className="text-zinc-700" size={72} />
      <div className="text-center">
        <h2 className="font-bold text-base text-zinc-300">
          Você ainda não tem tarefas cadastradas
        </h2>
        <p className="text-sm text-zinc-500">
          Crie tarefas e organize seus itens a fazer
        </p>
      </div>
    </>
  );
};

export default EmptyList;
