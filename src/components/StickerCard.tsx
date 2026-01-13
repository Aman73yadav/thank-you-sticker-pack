import { useRef } from "react";
import ThankYouSticker, { StickerShape, StickerVariant, StickerCustomization } from "./ThankYouSticker";
import DownloadButton from "./DownloadButton";

interface StickerCardProps {
  variant: StickerVariant;
  shape: StickerShape;
  label: string;
  customization: StickerCustomization;
}

const StickerCard = ({ variant, shape, label, customization }: StickerCardProps) => {
  const stickerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col items-center">
      <ThankYouSticker 
        stickerRef={stickerRef} 
        variant={variant} 
        shape={shape} 
        customization={customization}
      />
      <span className="mt-4 text-sm font-medium text-muted-foreground uppercase tracking-wider">
        {label}
      </span>
      <DownloadButton 
        targetRef={stickerRef} 
        filename={`thank-you-${shape}-${variant}`} 
      />
    </div>
  );
};

export default StickerCard;
