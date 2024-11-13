interface ListHeaderProps {
  createdTodos: number;
  finishedTodos: number;
}

const ListHeader = ({ createdTodos, finishedTodos }: ListHeaderProps) => {
  return (
    <article className="flex justify-between mt-16">
      <div className="flex gap-2 items-center">
        <em className="font-bold text-sm text-violet-500">Tarefas criadas</em>
        <strong className="text-xs text-zinc-200 bg-zinc-600 py-[2px] px-2 rounded-lg">
          {createdTodos}
        </strong>
      </div>
      <div className="flex gap-2 items-center">
        <em className="font-bold text-sm text-violet-500">Concluídas</em>
        <strong className="text-xs text-zinc-200 bg-zinc-600 py-[2px] px-2 rounded-lg">
          {createdTodos === 0
            ? createdTodos
            : `${finishedTodos} de ${createdTodos}`}
        </strong>
      </div>
    </article>
  );
};

export default ListHeader;
