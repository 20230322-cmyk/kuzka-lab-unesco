import { useState, useCallback } from 'react';
import { KUSKA_CARDS } from '../data/kuskaCards';

const INITIAL_BOARD = {
  'Prompt Lab': { symptom: null, tool: null, action: null },
  'Forense Lab': { symptom: null, tool: null, action: null },
  'Privacidad Lab': { symptom: null, tool: null, action: null },
  'Creator Lab': { symptom: null, tool: null, action: null },
};

export const useKuskaGame = () => {
  const [hand, setHand] = useState(KUSKA_CARDS);
  const [board, setBoard] = useState(INITIAL_BOARD);
  const [selectedCardId, setSelectedCardId] = useState(null);

  const selectCard = useCallback((cardId) => {
    setSelectedCardId(cardId === selectedCardId ? null : cardId);
  }, [selectedCardId]);

  const placeCard = useCallback((labName, slotType) => {
    if (!selectedCardId) return;

    const card = hand.find(c => c.id === selectedCardId);
    if (!card) return;

    // Only allow placing if the slot type matches the card type
    if (card.type !== slotType) return;

    setBoard(prevBoard => {
      const newBoard = { ...prevBoard };
      
      // If there was a card in this slot, return it to hand
      // For now we don't actually remove cards from the hand in this implementation
      // because the user can play any card from the deck.
      // But we update the board.
      
      newBoard[labName] = {
        ...newBoard[labName],
        [slotType]: card
      };

      return newBoard;
    });

    setSelectedCardId(null);
  }, [hand, selectedCardId]);

  const removeCard = useCallback((labName, slotType) => {
    setBoard(prevBoard => {
      const newBoard = { ...prevBoard };
      newBoard[labName] = {
        ...newBoard[labName],
        [slotType]: null
      };
      return newBoard;
    });
  }, []);

  const checkMatch = useCallback((labName) => {
    const lab = board[labName];
    if (lab.symptom && lab.tool && lab.action) {
      if (lab.symptom.matchId === lab.tool.matchId && lab.tool.matchId === lab.action.matchId) {
        return 'perfect';
      }
      return 'invalid';
    }
    if (lab.symptom || lab.tool || lab.action) {
      return 'partial';
    }
    return 'empty';
  }, [board]);

  return {
    hand,
    board,
    selectedCardId,
    selectCard,
    placeCard,
    removeCard,
    checkMatch
  };
};
