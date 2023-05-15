function NotFound() {
    return (
        <>
            <div className="h-screen w-screen flex flex-col items-center bg-[#1C1C1C] rounded-md p-7">
                <h1 className="text-center text-4xl font-bold text-red-500">
                    404 Not Found
                </h1>
                <a href="/" className="text-center text-4xl font-bold text-red-500">
                    <i className="fas fa-home"></i> Go Home
                </a>
            </div>

        </>
    )

}

export default NotFound;