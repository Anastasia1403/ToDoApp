import { render, screen } from "@testing-library/react";
import Label from "./Label";


describe("Testing Label", function () {
    test("should render label with *", function () {        
        render(<Label required='true'>Name</Label>)
        expect(screen.getByText(/Name*/i)).toBeInTheDocument()
    }
    )
    test("should render label without *", function () {
        render(<Label required='false'>Name</Label>)
        expect(screen.getByText(/Name/i)).toBeInTheDocument()
    }
    )
})