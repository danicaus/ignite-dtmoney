import { Container } from "./styles";
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";

export function Summary() {
    const {transactions} = useContext(TransactionsContext)
    
    const totalDeposits = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit') {
            return acc + transaction.amount;
        }

        return acc;
    }, 0);
    
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas"/>
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency', 
                        currency: 'BRL'
                    }).format(totalDeposits)}</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Saídas"/>
                </header>
                <strong>- R$500,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total"/>
                </header>
                <strong>R$500,00</strong>
            </div>
        </Container>
    )
}