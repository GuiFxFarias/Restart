import "./HomeCss.css";

function Home() {
  return (
    <>
      <main>
        <h1>Senior Noroeste Paulista</h1>
        <section className="apresentation">
          <h2>Excelente dia a todos, fico feliz em te ver aqui.</h2>
          <div>
            Este site é voltado para nós, aqui da Noroeste, podermos usarmos
            para entender melhor a situação de cada cliente em relação a alguns
            parâmetros de cada empresa. Os dashboards que poderão ser hospedados
            aqui, poderão ser sobre a quantidade de tickets abertos (Suporte), o
            andamento de cada projeto que existe em cada cliente e seria uma
            melhor organização para manter todos os dashboards unidos, cliente
            por cliente. Tereos, Cofco, Unimed, Rodobens e qualquer outro
            cliente, estes seriam somente um exemplos.
          </div>
        </section>
        <section className="imageSenior"></section>
        <footer className="footerH2">
          <h2>
            Deixando claro que isto seria somente para um início de um projeto
            que pode ser moldado e mais pra frente ser algo totalmente usável
            para todos os setores dentro da Senior.
          </h2>
        </footer>
      </main>
    </>
  );
}

export default Home;
