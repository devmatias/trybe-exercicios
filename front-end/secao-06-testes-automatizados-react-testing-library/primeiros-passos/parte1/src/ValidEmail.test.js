import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from './ValidEmail';

const EMAIL_USER = 'emailerrado';
const EMAIL_TESTE = 'teste@email.com'

test('Testando um componente, caso o email seja inválido.', () => {
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Inválido');
  expect(isValid).toBeInTheDocument();
});

test('Testando se componente não renderiza, caso email não exista', () => {
  render(<ValidEmail email={ '' } />);
  const msgElement = screen.queryByTestId('email-msg-validity');
  expect(msgElement).toBeNull(); 
});

test('Testando se mensagem válida, está com a cor verde', () => {
  render(<ValidEmail email={ EMAIL_TESTE } />);
  const msgElement = screen.queryByTestId('email-msg-validity');
  const estilo = window.getComputedStyle(msgElement);
  const corDoTexto = estilo.getPropertyValue('color');

  expect(corDoTexto).toBe('green');
});

test('Testando se mensagem inválida, está com a cor vermelha', () => {
  render(<ValidEmail email={ EMAIL_USER } />);
  const msgElement = screen.queryByTestId('email-msg-validity');
  const estilo = window.getComputedStyle(msgElement);
  const corDoTexto = estilo.getPropertyValue('color');

  expect(corDoTexto).toBe('red');
});