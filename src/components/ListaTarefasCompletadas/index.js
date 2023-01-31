import { ListaContainer, Tarefa } from "./styled";

export function ListaTarefasCompletadas({ tarefasCompletadas }) {
  return (
    <ListaContainer>
      <ul>
        {tarefasCompletadas.map((tarefa, index) => {
          return (
            <Tarefa key={index}>
              <p>{tarefa}</p>
            </Tarefa>
          );
        })}
      </ul>
    </ListaContainer>
  );
}
