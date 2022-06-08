import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from "react-modal";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsContext } from "./TransactionsContext";

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  const handleOpenNewTransactionModal = () => {
    setIsNewTransactionModalOpen(true);
  };
  const handleOCloseNewTransactionModal = () => {
    setIsNewTransactionModalOpen(false);
  };
  return (
    <TransactionsContext.Provider value={[]}>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleOCloseNewTransactionModal} 
      />
      <GlobalStyle />
    </TransactionsContext.Provider>
  );
}
