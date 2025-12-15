import { expect, test } from 'vitest'
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import App from '../App';
import UserMocks from "./UserMocks.json"
import userEvent from '@testing-library/user-event';

test('displays a list of users after fetching', async () => {
  render(<App />);
  // Wait for the loading text to disappear
  await waitForElementToBeRemoved(() => screen.getByText("Cargando..."));

  // Use findBy* queries to wait for elements to appear asynchronously
  const user1 = await screen.findByText(UserMocks[0].name);
  const user2 = await screen.findByText(UserMocks[1].name);

  expect(user1).toBeInTheDocument();
  expect(user2).toBeInTheDocument();
})

test('filter the list', async () => {
  render(<App />);
  await waitForElementToBeRemoved(() => screen.getByText("Cargando..."));

  const input = await screen.findByPlaceholderText('Buscar por nombre...')
  const user1 = await screen.findByText(UserMocks[0].name);
  const user2 = await screen.findByText(UserMocks[1].name);

  // Type in input the first item name
  await userEvent.type(input, UserMocks[0].name);

  expect(input).toBeInTheDocument();
  expect(user1).toBeInTheDocument();
  expect(user2).not.toBeInTheDocument();
})