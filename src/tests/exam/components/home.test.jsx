import { render, screen } from '@testing-library/react';
import {describe, test, expect} from 'vitest';
import HomeCard from '../../../Components/HomeCard';
import { ApiProvider } from '../../../contexts/ApiContext';
import { ThemeProvider } from '../../../contexts/ThemeContext';
import { BrowserRouter } from 'react-router-dom';
import App from '../../../App';


describe("App Test",() => {
  test("Shoukd show destacados as title", () => {
    render(
      <ApiProvider>
        <HomeCard oustandings={false} />
      </ApiProvider>
      );
    screen.debug()
    const result = screen.getByText("Home");
    expect(result).toBeTruthy();
  });

  test("Shoul show the provider aaas light", () => {
   const { container } = render(
    <BrowserRouter>
   <ThemeProvider >
     <App />
   </ThemeProvider>
   </BrowserRouter>
    );
    screen.debug()
    const result = container.getElementsByClassName('light');
    console.log(result)
    expect(result).toBeTruthy();
  });
})
