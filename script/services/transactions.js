import apiFetch from './api-fetch.js';

export function createTransaction(
  categoryId,
  newTransaction = { amount, notes, date }
) {
  return apiFetch(`/categories/${categoryId}/transactions`, {
    body: newTransaction,
  });
}

export function deleteTransaction(categoryId, transactionId) {
  return apiFetch(`/categories/${categoryId}/transactions/${transactionId}`, {
    method: 'DELETE',
  });
}
