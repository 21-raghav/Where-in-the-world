import "@testing-library/jest-dom/extend-expect"; // Import jest-dom matchers
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ListItem from "./ListItem";

const renderWithRouter = (ui, { route = "/" } = {}) => {
  window.history.pushState({}, "Test Page", route);

  return render(ui, { wrapper: BrowserRouter });
};

test("renders ListItem component with props", () => {
  const props = {
    url: "/country/india",
    details: { id: "india", name: "India" },
    flag: "/images/india-flag.png",
    name: "India",
    population: 1380004385,
    region: "Asia",
    capital: "New Delhi"
  };

  renderWithRouter(<ListItem {...props} />);

  const linkElement = screen.getByRole("link");
  expect(linkElement).toHaveAttribute("href", "/country/india");

  const imgElement = screen.getByAltText("Country Flag");
  expect(imgElement).toHaveAttribute("src", "/images/india-flag.png");

  expect(screen.getByText("India")).toBeInTheDocument();
  expect(screen.getByText("Population:")).toBeInTheDocument();
  expect(screen.getByText("1,380,004,385")).toBeInTheDocument();
  expect(screen.getByText("Region:")).toBeInTheDocument();
  expect(screen.getByText("Asia")).toBeInTheDocument();
  expect(screen.getByText("Capital:")).toBeInTheDocument();
  expect(screen.getByText("New Delhi")).toBeInTheDocument();
});

test("formats population correctly", () => {
  const props = {
    url: "/country/india",
    details: { id: "india", name: "India" },
    flag: "/images/india-flag.png",
    name: "India",
    population: 1380004385,
    region: "Asia",
    capital: "New Delhi"
  };

  renderWithRouter(<ListItem {...props} />);

  expect(screen.getByText("1,380,004,385")).toBeInTheDocument();
});
