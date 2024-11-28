import { FiGithub, FiLinkedin } from 'react-icons/fi';

function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-200 py-6">
            <div className="container mx-auto px-4 text-center">
             <p className="text-sm mb-4">@2024. All rights reserved.</p>

                <div className="mb-4">
                    <a href="home" className="text-gray-400 hover:text-gray-200 mx-2">Home</a>
                    <a href="about" className="text-gray-400 hover:text-gray-200 mx-2">About</a>
                </div>

                <div className="flex justify-center space-x-4">
                    <a href="https://github.com/eshaidrees" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200">
                        <FiGithub className="h-6 w-6" />
                    </a>
                    <a href="https://www.linkedin.com/in/esha-idrees-1379692b7" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200">
                        <FiLinkedin className="h-6 w-6" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;