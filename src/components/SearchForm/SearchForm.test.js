import {cleanup, render, screen} from "@testing-library/react";
import SearchForm from "./SearchForm.tsx";
import userEvent from "@testing-library/user-event";

afterEach(cleanup);

test('should render search form text input on component render', async () =>{
    render(<SearchForm/>);

    const element = await screen.findByPlaceholderText("Enter keyword");

    expect(element).toBeInTheDocument();
});

test('should render search form submit input on component render', async () =>{
    render(<SearchForm/>);

    const element = await screen.findByText("Search");

    expect(element).toBeInTheDocument();
});

test('should not send api request on search click with empty input text', () =>{
    render(<SearchForm/>);

    userEvent.click(screen.getByText('Search'));

    const element = screen.queryByRole('img');

    expect(element).not.toBeInTheDocument();
})