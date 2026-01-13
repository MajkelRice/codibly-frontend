import { Github, Linkedin, Mail, Code2 } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/10 mt-auto bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left space-y-1">
            <h3 className="text-lg font-bold text-transparent bg-clip-text bg-linear-to-r from-success to-primary">
              Michał Ryz
            </h3>
            <p className="text-sm text-gray-400">
              Codibly Recruitment Task © {currentYear}
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            {/* GitHub */}
            <a
              href="https://github.com/majkelrice"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline text-sm">GitHub</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/michal-ryz"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-gray-400 hover:text-[#0077b5] transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline text-sm">LinkedIn</span>
            </a>

            {/* Email */}
            <a
              href="mailto:michalryz2003@gmail.com"
              className="group flex items-center gap-2 text-gray-400 hover:text-success transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline text-sm">Contact</span>
            </a>

            <div className="h-4 w-px bg-white/10 hidden sm:block"></div>

            <a
              href="https://github.com/majkelrice/codibly-frontend"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-gray-500 hover:text-primary transition-colors border border-white/10 px-3 py-1.5 rounded-full"
            >
              <Code2 className="w-3 h-3" />
              Frontend Source Code
            </a>

            <a
              href="https://github.com/majkelrice/codibly-backend"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-gray-500 hover:text-primary transition-colors border border-white/10 px-3 py-1.5 rounded-full"
            >
              <Code2 className="w-3 h-3" />
              Backend Source Code
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
