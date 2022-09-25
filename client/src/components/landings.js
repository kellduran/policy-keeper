import { NavButton } from "../tools/hooks";

export const Root = () => {
    return (
        <>
            <h1>root landing page</h1>
            <div>
                <NavButton path="/signup" text="sign up" />
                <NavButton path="/login" text="log in" />
            </div>
        </>
    )
}

export const NotFound = () => {
    return (
        <>
        <h1>404 Not Found</h1>
        <NavButton />
        </>
    )
}