import './SuggestionChip.css';

interface SuggestionChipProps {
  label: string;
  onClick: () => void;
}

export default function SuggestionChip({ label, onClick }: SuggestionChipProps) {
  return (
    <button className="home-suggestion-chip" onClick={onClick}>
      {label}
    </button>
  );
}
