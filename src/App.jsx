import React, { useState } from "react";

import "./styles.scss";

const contadores = [
  {
    valor: 0,
    id: 1
  },
  {
    valor: 0,
    id: 2
  },
  {
    valor: 0,
    id: 3
  }
];

function App() {
  const [listaContadores, actualizarListaContadores] = useState(contadores);

  const manejarIncrementoGlobal = (id) => {
    const nuevaListaContadores = listaContadores.map((contador) => {
      if (contador.id === id) {
        return {
          id: contador.id,
          valor: contador.valor + 1
        };
      }
      return contador;
    });
    actualizarListaContadores(nuevaListaContadores); // actualizar el estado global
  };

  const manejarDecrementoGlobal = (id) => {
    const nuevaListaContadores = listaContadores.map((contador) => {
      if (contador.id === id) {
        return {
          id: contador.id,
          valor: contador.valor - 1
        };
      }
      return contador;
    });
    actualizarListaContadores(nuevaListaContadores); // actualizar el estado global
  };

  const manejarResetGlobal = (id) => {
    const nuevaListaContadores = listaContadores.map((contador) => {
      if (contador.id === id) {
        return {
          id: contador.id,
          valor: 0
        };
      }
      return contador;
    });
    actualizarListaContadores(nuevaListaContadores); // actualizar el estado global
  };

  const sumaContadores = () => {
    let resultado = 0;
    listaContadores.forEach((contador) => {
      resultado += contador.valor;
    });

    return resultado;
  };

  return (
    <div className="contenedor-principal">
      <div>
        <p className="resultado-suma">Suma contadores: {sumaContadores()}</p>
      </div>
      <div className="contador-grupo">
        {listaContadores.map((contador) => {
          return (
            <Contador
              key={contador.id}
              manejarIncremento={manejarIncrementoGlobal}
              manejarDecremento={manejarDecrementoGlobal}
              manejarReset={manejarResetGlobal}
              valor={contador.valor}
              id={contador.id}
            />
          );
        })}
      </div>
    </div>
  );
}

function Contador(props) {
  const manejarIncremento = () => {
    props.manejarIncremento(props.id);
  };

  const manejarDecremento = () => {
    props.manejarDecremento(props.id);
  };

  const manejarReset = () => {
    props.manejarReset(props.id);
  };

  return (
    <main className="Application">
      <section className="Counters">
        <div className="Counter">
          <p className="count">{props.valor}</p>
          <section className="controls">
            <button onClick={manejarIncremento}>Incrementar</button>
            <button onClick={manejarDecremento}>Decrementar</button>
            <button onClick={manejarReset}>Reset</button>
          </section>
        </div>
      </section>
    </main>
  );
}

export default App;
