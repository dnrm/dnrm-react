import '../styles/footer.scss';

export default function Footer() {
    return (
        <div className="footer p-6 px-5 md:px-20 lg:px-64 absolute bottom-0 w-full">
            <hr className="mb-4" />
            <h1 className="font-work text-text">
                Made by{' '}
                <a href="https://medina.dev" className="text-accent underline">
                    Daniel Medina
                </a>
            </h1>
            <a
                href="https://github.com/dnrm"
                className="font-work text-accent underline"
            >
                My GitHub
            </a>
        </div>
    );
}
