import { Container } from "./styles";
import incomeImg from "../../assets/income.svg";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>RS1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>RS1000,00</strong>
      </div>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>RS1000,00</strong>
      </div>
    </Container>
  );
}
