
// Unit tests for: Login

import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Login from '../Login';


import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';


// Mocking useNavigate from react-router-dom
jest.mock("react-router-dom", () => ({
  useNavigate: () => jest.fn(),
}));

// Mocking axios
jest.mock("axios");

describe('Login() Login method', () => {
  // Happy Path Tests
  describe('Happy Paths', () => {
    it('should render the login form with initial state', () => {
      render(<Login />);
      expect(screen.getByLabelText(/Username/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Login/i })).toBeInTheDocument();
    });

    it('should update form fields on user input', () => {
      render(<Login />);
      const usernameInput = screen.getByLabelText(/Username/i);
      const passwordInput = screen.getByLabelText(/Password/i);

      fireEvent.change(usernameInput, { target: { value: 'testuser' } });
      fireEvent.change(passwordInput, { target: { value: 'password123' } });

      expect(usernameInput.value).toBe('testuser');
      expect(passwordInput.value).toBe('password123');
    });

    it('should display success message and navigate on successful login', async () => {
      const mockNavigate = jest.fn();
      useNavigate.mockReturnValue(mockNavigate);

      axios.post.mockResolvedValueOnce({
        data: { accessToken: 'mockAccessToken' },
      });

      render(<Login />);
      fireEvent.change(screen.getByLabelText(/Username/i), { target: { value: 'testuser' } });
      fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: 'password123' } });
      fireEvent.click(screen.getByRole('button', { name: /Login/i }));

      await waitFor(() => {
        expect(screen.getByText(/Login successful!/i)).toBeInTheDocument();
        expect(mockNavigate).toHaveBeenCalledWith('/');
      });
    });
  });

  // Edge Case Tests
  describe('Edge Cases', () => {
    it('should display error message on failed login', async () => {
      axios.post.mockRejectedValueOnce({
        response: { data: { message: 'Invalid credentials' } },
      });

      render(<Login />);
      fireEvent.change(screen.getByLabelText(/Username/i), { target: { value: 'wronguser' } });
      fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: 'wrongpassword' } });
      fireEvent.click(screen.getByRole('button', { name: /Login/i }));

      await waitFor(() => {
        expect(screen.getByText(/Invalid credentials/i)).toBeInTheDocument();
      });
    });

    it('should handle network error gracefully', async () => {
      axios.post.mockRejectedValueOnce(new Error('Network Error'));

      render(<Login />);
      fireEvent.change(screen.getByLabelText(/Username/i), { target: { value: 'testuser' } });
      fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: 'password123' } });
      fireEvent.click(screen.getByRole('button', { name: /Login/i }));

      await waitFor(() => {
        expect(screen.getByText(/An error occurred/i)).toBeInTheDocument();
      });
    });

    it('should disable login button when loading', async () => {
      axios.post.mockImplementation(() => new Promise((resolve) => setTimeout(() => resolve({ data: { accessToken: 'mockAccessToken' } }), 1000)));

      render(<Login />);
      fireEvent.change(screen.getByLabelText(/Username/i), { target: { value: 'testuser' } });
      fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: 'password123' } });
      fireEvent.click(screen.getByRole('button', { name: /Login/i }));

      expect(screen.getByRole('button', { name: /Loading.../i })).toBeDisabled();
    });
  });
});

// End of unit tests for: Login
