
import { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ExpandableTextProps {
  text: string;
  maxLines?: number;
}

export function ExpandableText({ text, maxLines = 3 }: ExpandableTextProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const textRef = useRef<HTMLParagraphElement>(null);
  
  useEffect(() => {
    const checkTextHeight = () => {
      const textElement = textRef.current;
      if (!textElement) return;
      
      // Get line height and total height to determine number of lines
      const style = window.getComputedStyle(textElement);
      const lineHeight = parseInt(style.lineHeight) || parseInt(style.fontSize) * 1.2;
      const height = textElement.offsetHeight;
      
      const lines = Math.ceil(height / lineHeight);
      //setShowButton(lines > maxLines);
    };

    checkTextHeight();
    // Recalculate on window resize
    window.addEventListener('resize', checkTextHeight);
    return () => window.removeEventListener('resize', checkTextHeight);
  }, [text, maxLines]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="relative">
      <p 
        ref={textRef}
        className={`text-slate-700 ${!isExpanded ? 'line-clamp-' + maxLines : ''}`}
      >
        {text}
      </p>
      {showButton && (
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleExpand}
          className="mt-1 text-xs font-medium flex items-center gap-1 text-slate-500 hover:text-slate-700"
        >
          {isExpanded ? (
            <>
              Show Less <ChevronUp className="h-3 w-3" />
            </>
          ) : (
            <>
              Show More <ChevronDown className="h-3 w-3" />
            </>
          )}
        </Button>
      )}
    </div>
  );
}
