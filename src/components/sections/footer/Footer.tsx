function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="h-full border-t border-neutral-800 mx-3">
            <div>
                <div className="mx-auto max-w-2xl mb-8 px-8 py-8 space-y-16 lg:max-w-7xl lg:px-8">
                    <div className="flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0">
                        <p className="text-neutral-300 text-lg">
                            Copyright © {currentYear} Hamza GATTAL.
                        </p>
                        <p className="text-neutral-300 text-lg">
                            All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer