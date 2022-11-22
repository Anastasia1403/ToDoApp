import {getDeadlineColor} from './date-time-func.js'
import { DEADLINE_COLORS } from "./constants";

describe("test getDeadlineColor function", function () {
    test("should return urgently color when input is '1'", function () {        
        expect(getDeadlineColor('1')).toBe(DEADLINE_COLORS.urgently)
    })
    test("should return urgently color when input is 0", function () {        
        expect(getDeadlineColor(0)).toBe(DEADLINE_COLORS.urgently)
    })
    test("should return urgently color when input is -10", function () {        
        expect(getDeadlineColor(-10)).toBe(DEADLINE_COLORS.urgently)
    })
    test("should return medium color when input is 2", function () {        
        expect(getDeadlineColor(2)).toBe(DEADLINE_COLORS.medium)
    })
    test("should return medium color when input is '5'", function () {        
        expect(getDeadlineColor('5')).toBe(DEADLINE_COLORS.medium)
    })
    test("should return minor color when input is '500", function () {        
        expect(getDeadlineColor('500')).toBe(DEADLINE_COLORS.minor)
    })
    test("should return minor color when input is 80", function () {        
        expect(getDeadlineColor(80)).toBe(DEADLINE_COLORS.minor)
    })

})