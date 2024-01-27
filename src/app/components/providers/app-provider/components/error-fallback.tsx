import Button from "@components/elements/button";

function ErrorFallback() {
    return (
        <div
            className="text-red-500 w-screen h-screen flex flex-col justify-center items-center"
            role="alert"
        >
            <h2 className="text-lg font-semibold">Something went wrong :( </h2>
            <Button className="mt-4" onClick={() => window.location.assign(window.location.origin)}>
                Reload Page
            </Button>
        </div>
    );
}

export default ErrorFallback;