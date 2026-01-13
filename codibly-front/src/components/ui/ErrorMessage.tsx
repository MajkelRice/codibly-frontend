import { AlertCircle } from "lucide-react";

interface Props {
  message: string;
}

export const ErrorMessage = ({ message }: Props) => {
  if (!message) return null;

  return (
    <div className="flex items-center gap-3 p-4 mb-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm animate-in fade-in slide-in-from-top-2">
      <AlertCircle className="w-5 h-5 shrink-0" />
      <span className="font-medium">{message}</span>
    </div>
  );
};
