import * as reactRedux from 'react-redux';
import { fireEvent, render, screen } from "@testing-library/react";
import TagItem from "./TagItem";

jest.mock("react-redux", () => ({
    useSelector: jest.fn(),
}))
describe("Testing TagItem", function () {
    const useSelectorMock = reactRedux.useSelector
    const mockStore = {
        colors: {
            1: {
            color: 'tan',
            isUsed: true,
            id: '1'
        }}
    };
    beforeEach(() => {
        useSelectorMock.mockImplementation(selector => selector(mockStore).color)
    })
    afterEach(() => {
        useSelectorMock.mockClear();
    })
    test("should render tag item with Tag Name", function () {
        
        const props = {
            tag: {
                colorId: 1,
                id: "4",
                title: "Tag Name",
            },
            id: 5
        }     
        render(<TagItem {...props} />)
        const tag = screen.getByText(/Tag Name/i)
        expect(tag).toBeInTheDocument()
        }
    )
    test("should render checkbox tag item, check on click event end add checked attribute", function () {
        const handleClick = jest.fn()
        const props = {
            checked: false,
            tag: {
                colorId: 1,
                id: "4",
                title: "Tag Name",
            },
            id: 5,
            onClick: handleClick,
        }     
        render(<TagItem {...props} />)
        const tag = screen.getByText(/Tag Name/i)
        const checkbox = screen.getByTestId('tag-checkbox')
        expect(checkbox).not.toBeChecked()

        fireEvent.click(tag)
        expect(handleClick).toHaveBeenCalledTimes(1);
        expect(checkbox).toBeChecked()
        }
    )

})