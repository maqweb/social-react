import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be in state", () => {
        const component = create(<ProfileStatus status="Profile status!"/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("Profile status!")
    });

    test("after creation <span> should be displayed with correct status", () => {
        const component = create(<ProfileStatus status="Profile status!"/>);
        const root = component.root;
        let span = root.findByType('span');
        expect(span).not.toBeNull()
    });

    test("after creation <input> shouldn't be displayed ", () => {
        const component = create(<ProfileStatus status="Profile status!"/>);
        const root = component.root;

        expect(() => {
            let input = root.findByType('input');
        }).toThrow();
    });

    test("after creation <span> should contains correct status", () => {
        const component = create(<ProfileStatus status="Profile status!"/>);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[0]).toBe("Profile status!")
    });

});
